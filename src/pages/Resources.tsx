import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Shield, CreditCard, Package,
  Search, ExternalLink, ClipboardList,
  CheckSquare, MessageSquare, Star, AlertCircle
} from 'lucide-react';

// ─── DOCUMENTS ───────────────────────────────────────────────────────────────
interface Document {
  id: string;
  name: string;
  category: 'Legal' | 'Financial' | 'Scope' | 'Process';
  isPrivate: boolean;
  description: string;
  previewHash: string;
  isPDF?: boolean;
}

const documents: Document[] = [
  // LEGAL & COMPLIANCE (Must be public)
  { id: 'l1', name: 'Privacy Policy', category: 'Legal', isPrivate: false, description: 'Global compliance and data protection protocol for client projects.', previewHash: '/privacy', isPDF: false },
  { id: 'l2', name: 'Terms of Service', category: 'Legal', isPrivate: false, description: 'Standard terms governing the use of our services and website.', previewHash: '/terms', isPDF: false },
  { id: 'l3', name: 'Cookie Policy', category: 'Legal', isPrivate: false, description: 'Detailed disclosure of tracking technologies and user privacy controls.', previewHash: '/cookie', isPDF: false },
  { id: 'l4', name: 'Website Legal Suite', category: 'Legal', isPrivate: false, description: 'Consolidated set of standard website governance documentation.', previewHash: '/docs/WebsiteLegal.pdf', isPDF: true },

  // MARKETING & PROCESS (Publicly shared to build trust)
  { id: 'm1', name: 'Agency Methodology', category: 'Process', isPrivate: false, description: 'High-level overview of our development lifecycle and quality standards.', previewHash: '/protocol', isPDF: false },
  { id: 'm2', name: 'Service & Solutions Guide', category: 'Process', isPrivate: false, description: 'Detailed list of technical capabilities and service offerings.', previewHash: '/services', isPDF: false },
  { id: 'm3', name: 'Client Onboarding Guide (Light)', category: 'Process', isPrivate: false, description: 'A light guide for new clients to understand our collaboration workflow.', previewHash: '/docs/ClientOnboarding.pdf', isPDF: true },
  { id: 'm4', name: 'Portfolio Overview', category: 'Scope', isPrivate: false, description: 'Curated selection of high-impact digital solutions and case studies.', previewHash: '/portfolio', isPDF: false },
];

// ─── FORMS ───────────────────────────────────────────────────────────────────
interface Form {
  id: string;
  name: string;
  category: 'Onboarding' | 'Project' | 'Sign-Off' | 'Financial' | 'Feedback';
  filledBy: 'Client' | 'Internal';
  description: string;
  formHash: string;
  hasPDF: boolean;
}

const forms: Form[] = [
  { id: 'f01', name: 'Client Inquiry Form', category: 'Project', filledBy: 'Client', description: 'Kick off your project with company details, goals, and requirements.', formHash: '/contact', hasPDF: false },
  { id: 'f02', name: 'Basic Onboarding Form', category: 'Onboarding', filledBy: 'Client', description: 'Kick off your project with company details, goals, and access requirements.', formHash: 'Internal/Client_Intake_Forms/form-onboarding', hasPDF: false },
  { id: 'f07', name: 'Client Feedback Survey', category: 'Feedback', filledBy: 'Client', description: 'Post-project survey with optional portfolio testimonial.', formHash: 'Internal/Project_Handover/form-feedback', hasPDF: false },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
const docCategoryIcons: Record<string, React.ReactNode> = {
  Legal:     <Shield size={20} style={{ color: '#60a5fa' }} />,
  Financial: <CreditCard size={20} style={{ color: '#34d399' }} />,
  Scope:     <Package size={20} style={{ color: '#fbbf24' }} />,
  Process:   <ClipboardList size={20} style={{ color: '#c084fc' }} />,
};

const formCategoryIcons: Record<string, React.ReactNode> = {
  Onboarding: <ClipboardList size={20} style={{ color: '#34d399' }} />,
  Project:    <FileText size={20} style={{ color: '#60a5fa' }} />,
  'Sign-Off': <CheckSquare size={20} style={{ color: '#fbbf24' }} />,
  Financial:  <CreditCard size={20} style={{ color: '#c084fc' }} />,
  Feedback:   <Star size={20} style={{ color: '#fb923c' }} />,
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'documents' | 'forms'>('documents');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDocCat, setSelectedDocCat] = useState('All');
  const [selectedFormCat, setSelectedFormCat] = useState('All');

  const docCategories = ['All', 'Legal', 'Financial', 'Scope', 'Process'];
  const formCategories = ['All', 'Onboarding', 'Project', 'Sign-Off', 'Feedback'];

  const filteredDocs = documents.filter(doc => {
    const matchSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedDocCat === 'All' || doc.category === selectedDocCat;
    return matchSearch && matchCat && !doc.isPrivate;
  });

  const filteredForms = forms.filter(f => {
    const matchSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedFormCat === 'All' || f.category === selectedFormCat;
    return matchSearch && matchCat && f.filledBy === 'Client';
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'transparent', paddingTop: '160px', paddingBottom: '100px', position: 'relative' }}>
      {/* BG ORBS MOVED TO LAYOUT */}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* HEADER */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span className="text-label-pill">
              AGENCY PROTOCOL
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: '0.95', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            DOCS &amp; <span className="accent-text" style={{ display: 'inline' }}>FORMS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Hardened legal templates, financial documents, and interactive client-facing forms — all in one place.
          </motion.p>
        </div>

        {/* TAB SWITCHER */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-flex', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '100px', padding: '5px' }}>
            <button onClick={() => { setActiveTab('documents'); setSearchTerm(''); }} style={{ padding: '12px 32px', borderRadius: '100px', border: 'none', cursor: 'pointer', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.3s', background: activeTab === 'documents' ? 'var(--accent-primary)' : 'transparent', color: activeTab === 'documents' ? '#000' : 'var(--text-muted)', boxShadow: activeTab === 'documents' ? 'var(--shadow-premium)' : 'none' }}>
              <FileText size={14} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Documents
            </button>
            <button onClick={() => { setActiveTab('forms'); setSearchTerm(''); }} style={{ padding: '12px 32px', borderRadius: '100px', border: 'none', cursor: 'pointer', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.3s', background: activeTab === 'forms' ? 'var(--accent-primary)' : 'transparent', color: activeTab === 'forms' ? '#000' : 'var(--text-muted)', boxShadow: activeTab === 'forms' ? 'var(--shadow-premium)' : 'none' }}>
              <MessageSquare size={14} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Client Forms
            </button>
          </div>
        </div>

        {/* CONTROLS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '50px', alignItems: 'center', justifyContent: 'space-between', background: 'var(--card-bg)', padding: '20px 24px', borderRadius: '24px', border: '1px solid var(--card-border)' }}>
          {/* SEARCH */}
          <div style={{ position: 'relative', flex: '1', minWidth: '260px' }}>
            <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5, color: 'var(--text-primary)' }} size={18} />
            <input type="text" placeholder={activeTab === 'documents' ? 'Search documents…' : 'Search forms…'} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} style={{ width: '100%', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '13px 16px 13px 48px', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none' }} />
          </div>

          {/* CATEGORY FILTERS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {(activeTab === 'documents' ? docCategories : formCategories).map(cat => (
              <button key={cat} onClick={() => activeTab === 'documents' ? setSelectedDocCat(cat) : setSelectedFormCat(cat)} style={{ padding: '9px 18px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid', cursor: 'pointer', transition: 'all 0.25s', backgroundColor: (activeTab === 'documents' ? selectedDocCat : selectedFormCat) === cat ? 'var(--accent-primary)' : 'transparent', borderColor: (activeTab === 'documents' ? selectedDocCat : selectedFormCat) === cat ? 'var(--accent-primary)' : 'var(--card-border)', color: (activeTab === 'documents' ? selectedDocCat : selectedFormCat) === cat ? '#000' : 'var(--text-muted)' }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── DOCUMENTS GRID ── */}
        <AnimatePresence mode="wait">
          {activeTab === 'documents' && (
            <motion.div key="docs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div className="grid grid-3" style={{ gap: '24px' }}>
                <AnimatePresence mode="popLayout">
                  {filteredDocs.map((doc, index) => (
                    <motion.div key={doc.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25, delay: index * 0.04 }} className="glass-card" style={{ padding: '32px', borderRadius: '22px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                          <div style={{ padding: '10px', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                            {docCategoryIcons[doc.category]}
                          </div>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: '700', lineHeight: '1.3' }}>{doc.name}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '24px' }}>{doc.description}</p>
                      </div>
                      <div style={{ paddingTop: '20px', borderTop: '1px solid var(--card-border)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                          <span style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: '800', letterSpacing: '0.1em' }}>{doc.category.toUpperCase()}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <a 
                            href={doc.previewHash.startsWith('/') ? doc.previewHash : `/Agency_Documentation/${doc.previewHash}.html`} 
                            target={doc.previewHash.startsWith('http') || doc.isPDF ? "_blank" : "_self"} 
                            rel="noreferrer" 
                            className="btn btn-primary" 
                            style={{ flex: 1, padding: '12px', fontSize: '0.7rem', letterSpacing: '0.08em', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                          >
                            <ExternalLink size={14} /> {doc.isPDF ? 'VIEW PDF' : 'OPEN RESOURCE'}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              {filteredDocs.length === 0 && <EmptyState />}
            </motion.div>
          )}

          {/* ── FORMS GRID ── */}
          {activeTab === 'forms' && (
            <motion.div key="forms" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '16px 24px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <AlertCircle size={16} style={{ color: '#00CFFF', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5', margin: 0 }}>
                  Forms marked <strong style={{ color: 'var(--accent-primary)' }}>Client</strong> are shared with clients via unique project links. 
                  Forms powered by <strong style={{ color: 'var(--text-primary)' }}>Web3Forms</strong> — submissions land directly in your inbox.
                </p>
              </div>

              <div className="grid grid-3" style={{ gap: '24px' }}>
                <AnimatePresence mode="popLayout">
                  {filteredForms.map((form, index) => (
                    <motion.div key={form.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25, delay: index * 0.05 }} className="glass-card" style={{ padding: '32px', borderRadius: '22px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                          <div style={{ padding: '10px', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                            {formCategoryIcons[form.category]}
                          </div>
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                            <span style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '0.1em', color: '#34d399', background: 'rgba(52,211,153,0.08)', padding: '4px 10px', borderRadius: '100px', border: '1px solid rgba(52,211,153,0.2)' }}>CLIENT FORM</span>
                            {form.hasPDF && <span style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '0.1em', color: '#c084fc', background: 'rgba(192,132,252,0.08)', padding: '4px 10px', borderRadius: '100px', border: '1px solid rgba(192,132,252,0.2)' }}>PDF</span>}
                          </div>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: '700', lineHeight: '1.3' }}>{form.name}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '24px' }}>{form.description}</p>
                      </div>
                      <div style={{ paddingTop: '20px', borderTop: '1px solid var(--card-border)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                          <span style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: '800', letterSpacing: '0.1em' }}>{form.category.toUpperCase()}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <a 
                            href={form.formHash.startsWith('/') ? form.formHash : `/Agency_Documentation/${form.formHash}.html`} 
                            target={form.formHash.startsWith('http') ? "_blank" : "_self"} 
                            rel="noreferrer" 
                            className="btn btn-primary" 
                            style={{ flex: 1, padding: '12px', fontSize: '0.7rem', letterSpacing: '0.08em', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                          >
                            <ExternalLink size={14} /> OPEN FORM
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              {filteredForms.length === 0 && <EmptyState />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const EmptyState = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '80px 0', textAlign: 'center' }}>
    <div style={{ width: '70px', height: '70px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
      <Search style={{ opacity: 0.5, color: 'var(--text-primary)' }} size={28} />
    </div>
    <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '8px' }}>Nothing found</h3>
    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Try adjusting your search or filters.</p>
  </motion.div>
);

export default Resources;
