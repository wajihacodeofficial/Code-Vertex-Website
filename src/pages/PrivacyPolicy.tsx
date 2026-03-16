import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <section style={{ padding: '180px 0 100px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label">Data Protection</span>
            <h1 className="section-title">
              Privacy <span className="accent-text">Protocol</span>
            </h1>
            <p className="text-muted" style={{ marginBottom: '4rem' }}>
              Last Updated: February 10, 2026
            </p>

            <div
              className="glass-card"
              style={{ padding: '4rem', gap: '3rem' }}
            >
              <section>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  1. INFORMATION WE COLLECT
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  We collect information that you provide directly to us through
                  our contact forms, including your name, email address, and
                  project requirements. We also collect technical data like IP
                  addresses and browser types to improve our web experience.
                </p>
              </section>

              <section>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  2. HOW WE USE YOUR DATA
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  Your data is used exclusively to facilitate communication,
                  provide quotes, and deliver our software engineering services.
                  We do not sell or share your personal information with
                  third-party marketers.
                </p>
              </section>

              <section>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  3. SECURITY INFRASTRUCTURE
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  We implement enterprise-grade security measures to protect
                  your data. All communication is encrypted via SSL/TLS
                  protocols, and our internal databases are restricted to
                  authorized engineering personnel only.
                </p>
              </section>

              <section>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  4. YOUR RIGHTS
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  You have the right to request access to, correction of, or
                  deletion of your personal data held by Code Vertex Software.
                  Contact rehancodeofficial@gmail.com for any data residency inquiries.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
