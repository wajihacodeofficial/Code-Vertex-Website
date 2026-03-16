import React from 'react';
import { motion } from 'framer-motion';

const TechStrip: React.FC = () => {
  const stacks = [
    {
      category: 'Web Development',
      stack: 'MERN STACK',
      details: 'MongoDB • Express • React • Node.js',
      icon: '🌐',
    },
    {
      category: 'Desktop Solutions',
      stack: 'JAVA STACK',
      details: 'Java SE/EE • Spring Boot • JavaFX',
      icon: '💻',
    },
    {
      category: 'Mobile Apps',
      stack: 'NATIVE ANDROID',
      details: 'Android SDK • Java • Firebase • SQLite',
      icon: '📱',
    },
  ];

  return (
    <section
      style={{
        padding: 'var(--section-padding) 0',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--card-border)',
        borderBottom: '1px solid var(--card-border)',
      }}
    >
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="text-label">Our Core Stacks</span>
          <h2 className="section-title">
            Expertly Engineered <span className="accent-text">Solutions</span>
          </h2>
        </header>

        <div className="grid grid-3">
          {stacks.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="glass-card"
              style={{ padding: '3rem', textAlign: 'center' }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  marginBottom: '2rem',
                  display: 'block',
                }}
              >
                {s.icon}
              </div>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: 'var(--accent-primary)',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  display: 'block',
                }}
              >
                {s.category}
              </span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                {s.stack}
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                {s.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStrip;
