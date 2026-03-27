import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function splitFile(filepath, isForm) {
    const content = readFileSync(filepath, 'utf8');
    const headMatch = content.match(/([\s\S]*?)<div class="page"/);
    if (!headMatch) return;
    
    let baseHead = headMatch[1];
    
    const exportStyles = `
    <style>
      @media print { .no-print { display: none !important; } }
      .export-bar {
          position: fixed; top: 20px; right: 20px; z-index: 9999;
          display: flex; gap: 10px;
      }
      .export-btn {
          background: #FFC300; color: #000; border: none; padding: 10px 16px;
          border-radius: 100px; font-weight: 800; font-size: 12px; cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-family: system-ui, sans-serif;
      }
      .export-btn:hover { background: #e6af00; transform: translateY(-1px); }
    </style>
    <script>
      function exportDocx(elementId, filename) {
          var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export</title></head><body>";
          var footer = "</body></html>";
          var element = document.getElementById(elementId) || document.querySelector('.page');
          var html = header + element.outerHTML + footer;
          var blob = new Blob(['\\ufeff', html], { type: 'application/msword' });
          var url = URL.createObjectURL(blob);
          var link = document.createElement('a');
          link.href = url;
          link.download = filename + '.doc';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
    </script>
    `;
    
    baseHead = baseHead.replace('</head>', exportStyles + '</head>');
    
    const parts = content.split('<div class="page"');
    const outDir = dirname(filepath);
    
    for (let i = 1; i < parts.length; i++) {
        let part = parts[i];
        
        let id = '';
        const idMatch = part.match(/id="([^"]+)"/);
        if (idMatch) {
             id = idMatch[1];
        } else {
             const h1Match = part.match(/<h1>(.*?)<\/h1>/);
             if (h1Match) {
                 id = slugify(h1Match[1]);
             } else {
                 id = 'doc-' + i;
             }
        }
        
        if (i === parts.length - 1) {
             const closingIdx = part.lastIndexOf('</div>');
             part = part.substring(0, closingIdx + 6);
        } else {
             const commentIdx = part.lastIndexOf('<!-- ===');
             if (commentIdx > -1) {
                 part = part.substring(0, commentIdx).trim();
             } else {
                 part = part.trim();
                 if (!part.endsWith('</div>')) {
                     const lastDivIdx = part.lastIndexOf('</div>');
                     if (lastDivIdx > -1) part = part.substring(0, lastDivIdx + 6);
                 }
             }
        }
        
        let pageContent = '<div class="page" id="' + id + '"' + part;
        // strip any duplicated ids from part if they existed just to be clean
        if (!idMatch) {
            // we added it manually to the div
        } else {
            // it already had one, we should remove the manual one to avoid duplicates, but doing just pageContent = '<div class="page"' + part works because part starts with ` id="...`
            pageContent = '<div class="page"' + part;
        }
        
        let actionBar = `
        <div class="export-bar no-print">
            <button class="export-btn" onclick="window.print()">Download PDF</button>
            <button class="export-btn" style="background:#00CFFF;" onclick="exportDocx('${id}', '${id}')">Export Word</button>
        </div>
        `;
        
        let finalHtml = baseHead + '\n<body>\n' + actionBar + '\n<div style="padding-top:60px;">\n' + pageContent + '\n</div>\n';
        
        if (isForm) {
             const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/);
             if (scriptMatch) {
                 finalHtml += '\n<script>' + scriptMatch[1] + '</script>\n';
             }
        }
        
        finalHtml += '</body>\n</html>';
        
        writeFileSync(join(outDir, id + '.html'), finalHtml);
        console.log('Created ' + id + '.html');
    }
}

splitFile('./document-templates/index.html', false);
splitFile('./document-templates/agency-forms.html', true);
