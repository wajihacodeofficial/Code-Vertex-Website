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
  category: 'Legal' | 'Financial' | 'Scope';
  isPrivate: boolean;
  description: string;
  previewHash: string;
}

const documents: Document[] = [
  // LEGAL
  { id: '1', name: 'Master Service Agreement (MSA)', category: 'Legal', isPrivate: false, description: 'Core agreement covering services, payments, IP transfer, and liability.', previewHash: 'master-service-agreement-msa' },
  { id: '2', name: 'Non-Disclosure Agreement (NDA)', category: 'Legal', isPrivate: false, description: 'Mutual confidentiality protection for code, data, and business logic.', previewHash: 'non-disclosure-agreement-nda' },
  { id: '3', name: 'Dispute Resolution Addendum', category: 'Legal', isPrivate: false, description: 'KCIA arbitration and mediation protocols. Governed by Sindh, Pakistan.', previewHash: 'dispute-resolution-addendum' },
  { id: '4', name: 'Retainer Agreement', category: 'Legal', isPrivate: false, description: 'Monthly support retainer with usage, overage, and rollover rules.', previewHash: 'retainer-agreement' },
  { id: '5', name: 'IP Assignment Agreement', category: 'Legal', isPrivate: false, description: 'Formal IP transfer linked to final payment clearance.', previewHash: 'ip-assignment-agreement' },
  // FINANCIAL
  { id: '6', name: 'Payment Terms Agreement', category: 'Financial', isPrivate: false, description: 'Milestone schedule, late fees, $350 re-activation fee policy.', previewHash: 'payment-terms-agreement' },
  { id: '7', name: 'Invoice Template', category: 'Financial', isPrivate: false, description: 'Professional invoice with wire transfer instructions.', previewHash: 'invoice' },
  { id: '8', name: 'Estimate / Quote', category: 'Financial', isPrivate: false, description: 'Non-binding indicative cost breakdown before SOW.', previewHash: 'estimate-quote' },
  { id: '9', name: 'Payment Overdue Notice', category: 'Financial', isPrivate: false, description: '48-hour ultimatum notice with escalation chain.', previewHash: 'payment-overdue-notice' },
  { id: '10', name: 'Payment Receipt', category: 'Financial', isPrivate: false, description: 'Immutable receipt with running account summary.', previewHash: 'payment-receipt' },
  // SCOPE
  { id: '11', name: 'Statement of Work (SOW)', category: 'Scope', isPrivate: false, description: 'Full project scope, milestones, acceptance criteria, and payment triggers.', previewHash: 'statement-of-work-sow' },
  { id: '12', name: 'Project Proposal', category: 'Scope', isPrivate: false, description: 'High-level business proposal outlining solution, roadmap, and investment.', previewHash: 'project-proposal' },
  { id: '13', name: 'Revision Policy', category: 'Scope', isPrivate: false, description: 'Included revision rounds, expiry window, and overage billing rules.', previewHash: 'revision-policy' },
  { id: '14', name: 'Risk Assessment', category: 'Scope', isPrivate: false, description: 'Pre-populated project risks with probability, impact and mitigation strategies.', previewHash: 'risk-assessment-tracking' },
  { id: '15', name: 'QA / Testing Checklist', category: 'Scope', isPrivate: false, description: 'Internal QA gate and client UAT sign-off checklist with acceptance window.', previewHash: 'qa-testing-checklist' },
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
  { id: 'f01', name: 'Client Onboarding Form', category: 'Onboarding', filledBy: 'Client', description: 'Kick off your project with company details, goals, and access requirements.', formHash: 'form-onboarding', hasPDF: false },
  { id: 'f02', name: 'Project Kickoff Confirmation', category: 'Onboarding', filledBy: 'Client', description: 'Formally confirm your MSA, SOW, and deposit commitment. Generates a signed PDF.', formHash: 'form-kickoff', hasPDF: true },
  { id: 'f03', name: 'Requirement Submission', category: 'Project', filledBy: 'Client', description: 'Submit a new feature, enhancement, or bug report for team review.', formHash: 'form-requirements', hasPDF: false },
  { id: 'f04', name: 'Milestone Sign-Off', category: 'Sign-Off', filledBy: 'Client', description: 'Review deliverables and trigger the next milestone payment. Generates signed PDF.', formHash: 'form-milestone', hasPDF: true },
  { id: 'f05', name: 'Change Request Form', category: 'Project', filledBy: 'Client', description: 'Request scope changes outside the original SOW with cost estimate.', formHash: 'form-change', hasPDF: true },
  { id: 'f06', name: 'Revision Request Form', category: 'Project', filledBy: 'Client', description: 'Request revisions on delivered work within your included rounds.', formHash: 'form-revision', hasPDF: false },
  { id: 'f07', name: 'Client Feedback Survey (NPS)', category: 'Feedback', filledBy: 'Client', description: 'Post-project NPS + CSAT survey with optional portfolio testimonial.', formHash: 'form-feedback', hasPDF: false },
  { id: 'f08', name: 'Project Completion Certificate', category: 'Sign-Off', filledBy: 'Client', description: 'Confirm all deliverables received and begin your 30-day warranty. Generates PDF.', formHash: 'form-completion', hasPDF: true },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
const docCategoryIcons: Record<string, React.ReactNode> = {
  Legal:     <Shield size={20} style={{ color: '#60a5fa' }} />,
  Financial: <CreditCard size={20} style={{ color: '#34d399' }} />,
  Scope:     <Package size={20} style={{ color: '#fbbf24' }} />,
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

  const docCategories = ['All', 'Legal', 'Financial', 'Scope'];
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
                          <a href={`/document-templates/${doc.previewHash}.html`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ flex: 1, padding: '12px', fontSize: '0.7rem', letterSpacing: '0.08em', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                            <ExternalLink size={14} /> OPEN DOCUMENT
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
                          <a href={`/document-templates/${form.formHash}.html`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ flex: 1, padding: '12px', fontSize: '0.7rem', letterSpacing: '0.08em', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
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
