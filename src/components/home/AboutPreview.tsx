import React from 'react';
import { motion } from 'framer-motion';

const AboutPreview: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem 0',
      }}
    >
      <div className="container">
        <div
          className="grid grid-2"
          style={{ alignItems: 'center', gap: '8rem' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-label">Our Philosophy</span>
            <h2 className="section-title">
              Engineering <br />
              <span className="accent-text">Without Compromise</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{
                marginBottom: '3rem',
                fontSize: '1.2rem',
                lineHeight: '1.8',
              }}
            >
              We don't just write code; we architect solutions. Code Vertex is
              dedicated to building software that is clean, maintainable, and
              built for scale. Our focus is on delivering high-performance
              products that solve real world problems.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a
                href="/about"
                className="btn btn-outline"
                style={{ fontSize: '0.7rem', padding: '1.2rem 3rem' }}
              >
                Our Team
              </a>
              <a
                href="/contact"
                className="btn btn-primary"
                style={{ fontSize: '0.7rem', padding: '1.2rem 3rem' }}
              >
                Start Build
              </a>
            </div>
          </motion.div>

          {/* Impact Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="glass-card"
            style={{
              padding: 0,
              aspectRatio: '16/10',
              borderRadius: '2rem',
              overflow: 'hidden',
              background: 'var(--bg-tertiary)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
              alt="Cyber Security / Tech"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem',
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--accent-primary)',
                  letterSpacing: '0.1em',
                }}
              >
                TRANSFORMING COMPLEXITY INTO{' '}
                <span style={{ color: '#fff' }}>ELEGANCE</span>
              </h3>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'var(--accent-glow)',
          filter: 'blur(150px)',
          borderRadius: '50%',
          opacity: 0.15,
        }}
      />
    </section>
  );
};

export default AboutPreview;
