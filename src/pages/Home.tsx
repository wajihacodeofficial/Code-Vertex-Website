import React from 'react';
import Hero from '../components/Hero';
import TechStrip from '../components/home/TechStrip';
import ProcessSection from '../components/home/ProcessSection';
import ValueProps from '../components/home/ValueProps';
import FeaturedWork from '../components/FeaturedWork';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <TechStrip />

      {/* Unique Home Content */}
      <ValueProps />

      {/* Engineering Excellence Section */}
      <section
        id="philosophy"
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <motion.header 
            initial={{ opacity: 1, y: 0 }} /* Guaranteed visibility */
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <span className="text-label">Our Philosophy</span>
            <h2 className="section-title">
              Engineering <span className="accent-text">Excellence</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{ maxWidth: '600px', margin: '1.5rem auto 0' }}
            >
              We focus on building scalable, maintainable, and high-performance technical foundations
              that empower modern businesses to lead.
            </p>
          </motion.header>

          <div className="grid grid-3" style={{ gap: '30px' }}>
            {[
              {
                title: 'High Performance',
                desc: 'Sub-second response times and optimized asset delivery for a seamless, conversion-driven user experience.'
              },
              {
                title: 'Clean Architecture',
                desc: 'Modular, well-documented codebases built on industry-leading design patterns for long-term scalability.'
              },
              {
                title: 'Hardened Security',
                desc: 'Production-grade security protocols integrated into every development sprint to safeguard your digital assets.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card"
                style={{ padding: '3rem', textAlign: 'center' }}
              >
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{value.title}</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deployments */}
      <section
        id="case-studies"
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-primary)',
        }}
      >
        <div className="container">
          <motion.header 
            initial={{ opacity: 1, y: 0 }} /* Guaranteed visibility */
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '8rem', textAlign: 'center' }}
          >
            <span className="text-label">Case Studies</span>
            <h2 className="section-title">
              Strategic <span className="accent-text">Technical Wins</span>
            </h2>
          </motion.header>

          <FeaturedWork />
        </div>
      </section>

      {/* Deployment Process */}
      <ProcessSection />

      {/* CTA Section */}
      <section id="cta" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-card"
            style={{
              padding: '6rem 2rem',
              textAlign: 'center',
              background:
                'linear-gradient(135deg, rgba(255, 195, 0, 0.05) 0%, rgba(0, 207, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 195, 0, 0.2)',
            }}
          >
            <h2 className="hero-title" style={{ fontSize: '4rem' }}>
              RE-ENGINEER YOUR <br />
              <span className="accent-text">FUTURE</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '600px',
                margin: '2rem auto 4rem',
                fontSize: '1.25rem',
              }}
            >
              Join the elite businesses scaling with Code Vertex's
              high-performance architectures. Start your technical audit
              today.
            </p>
            <div
              className="cta-buttons"
              style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <button
                onClick={() => {
                  window.location.href = '/contact';
                  window.scrollTo(0, 0);
                }}
                className="btn btn-primary"
              >
                INITIATE PROPOSAL
              </button>
              <button
                onClick={() => {
                  window.location.href = '/protocol';
                  window.scrollTo(0, 0);
                }}
                className="btn btn-outline"
              >
                OUR METHODOLOGY
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
