import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <span className="text-accent-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
              Neural Engineering DNA
            </span>
            <h2 className="section-title">
              BUILT FOR <br />
              <span className="accent-text">COGNITIVE</span> SCALE
            </h2>
            <p className="text-lg text-secondary leading-relaxed mt-8 max-w-lg">
              We don't just build software. We engineer intelligent systems that think and scale.
              Code Vertex specializes in high-stakes neural infrastructure for
              the next generation of digital leaders.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              width: '100%',
            }}
          >
            {[
              {
                label: 'Technical Precision',
                detail: 'Zero-debt architectural protocols.',
              },
              {
                label: 'Scalable Core',
                detail: 'Horizontal expansion by design.',
              },
              {
                label: 'Security First',
                detail: 'Military-grade encryption layers.',
              },
              {
                label: 'Global Edge',
                detail: 'Edge-computed low-latency nodes.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderLeft: '4px solid var(--accent-primary)',
                }}
              >
                <h4 className="font-bold mb-2" style={{ fontSize: '1rem' }}>
                  {item.label}
                </h4>
                <p
                  className="uppercase tracking-widest"
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                    opacity: 0.6,
                  }}
                >
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
