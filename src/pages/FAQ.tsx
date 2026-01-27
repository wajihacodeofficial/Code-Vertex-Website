import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'What technologies do you specialize in?',
      a: 'We are specialized in high-performance stacks including MERN (MongoDB, Express, React, Node.js), Java Enterprise (Spring Boot), and Tier-1 mobile frameworks like Flutter. Our selection is dictated by the architectural requirements of each deployment.',
    },
    {
      q: 'How long does a typical project take?',
      a: 'Timelines vary by architectural complexity. A strategic MVP usually takes 4-8 weeks, while full-scale enterprise infrastructures are deployed over 3-6 months. We maintain a focus on rapid shipment through modular blueprinting.',
    },
    {
      q: 'Do you offer ongoing maintenance?',
      a: 'Yes. We provide SLA-backed maintenance protocols, including real-time security monitoring, performance audits, and horizontal scaling support.',
    },
    {
      q: 'How is project communication handled?',
      a: 'Directly. RapidWave operates with a flat technical structure. Clients maintain a direct conduit to our lead engineering bandwidth throughout the entire lifecycle—from technical audit to global deployment.',
    },
    {
      q: 'Can you migrate legacy systems to modern stacks?',
      a: 'Migration is a core competency. We conduct deep-dive technical audits to ensure data integrity during the transition to high-performance, modular architectures.',
    },
    {
      q: 'Do you provide dedicated development teams?',
      a: 'Absolutely. For long-term partners, we deploy dedicated engineering cells that integrate directly with your internal operations, ensuring complete alignment with your product roadmap.',
    },
    {
      q: 'What is your approach to security?',
      a: 'Security is foundational, not an afterthought. We implement zero-trust architectures, end-to-end encryption, and rigorous penetration testing protocols for every deployment.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="faq-page">
      <section style={{ padding: '180px 0 100px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span className="text-label">Common Inquiries</span>
          <h1 className="section-title">
            Frequently Asked <span className="accent-text">Questions</span>
          </h1>
          <p
            className="text-text-secondary"
            style={{ fontSize: '1.2rem', margin: '2rem 0 5rem' }}
          >
            Everything you need to know about our engineering process and
            technical standards.
          </p>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '2rem 3rem',
                  cursor: 'pointer',
                  borderLeft:
                    activeIndex === i
                      ? '4px solid var(--accent-primary)'
                      : '1px solid var(--card-border)',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      color:
                        activeIndex === i
                          ? 'var(--accent-primary)'
                          : 'var(--text-primary)',
                    }}
                  >
                    {faq.q}
                  </h4>
                  <span style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                    {activeIndex === i ? '−' : '+'}
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          marginTop: '2rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.8',
                          fontSize: '1rem',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container text-center">
          <div
            className="glass-card"
            style={{
              padding: '4rem',
              display: 'inline-block',
              minWidth: '600px',
            }}
          >
            <h3 style={{ marginBottom: '1.5rem' }}>Still have questions?</h3>
            <p
              style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}
            >
              Contact our lead engineers directly for a technical consultation.
            </p>
            <a
              href="/contact"
              className="btn btn-primary"
              style={{ padding: '1rem 3rem' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
// Common questions
