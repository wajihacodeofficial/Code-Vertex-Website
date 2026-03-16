import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions: React.FC = () => {
  return (
    <div className="legal-page">
      <section style={{ padding: '180px 0 100px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label">Legal Framework</span>
            <h1 className="section-title">
              Terms & <span className="accent-text">Conditions</span>
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
                  1. AGREEMENT TO TERMS
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  By accessing or using the Code Vertex Software website and
                  services, you agree to be bound by these Terms and Conditions.
                  Our services are provided to help you build and scale digital
                  solutions, and your usage constitutes acceptance of these
                  protocols.
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
                  2. INTELLECTUAL PROPERTY
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  All code, designs, and content provided by Code Vertex Software,
                  unless otherwise specified in a signed service agreement,
                  remain the intellectual property of Code Vertex Software.
                  Unauthorized reproduction or redistribution is strictly
                  prohibited.
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
                  3. SERVICE DELIVERY
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  We specialize in MERN, Java, and Cross-platform development.
                  Delivery timelines and project scopes are defined in
                  individual project blueprints. We aim for engineering
                  excellence but do not guarantee results based on market
                  fluctuations.
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
                  4. LIMITATION OF LIABILITY
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  Code Vertex Software shall not be liable for any indirect,
                  incidental, or consequential damages resulting from the use or
                  inability to use our services or website.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
