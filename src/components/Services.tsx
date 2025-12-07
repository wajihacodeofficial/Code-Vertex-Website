import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Distributed Systems',
      detail: 'High-throughput cloud architecture.',
    },
    { title: 'AI Engineering', detail: 'Neural patterns for automation.' },
    { title: 'UI/UX Engineering', detail: 'Technical design for complex ops.' },
    {
      title: 'Backend Scale',
      detail: 'Low-latency data processing pipelines.',
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <header className="mb-20">
          <span
            className="font-bold uppercase tracking-[0.4em] block"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '10px',
              marginBottom: '1rem',
            }}
          >
            Execution Capabilities
          </span>
          <h2 className="section-title">
            CORE <br />
            <span className="accent-text">ARCHITECTURE</span>
          </h2>
        </header>

        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-card flex flex-col justify-between group relative overflow-hidden"
              style={{ height: '350px' }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 group-hover:text-accent-primary transition-colors">
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {s.detail}
                </p>
              </div>

              <div className="relative z-10">
                <button
                  className="font-bold uppercase tracking-[0.3em] transition-opacity"
                  style={{
                    fontSize: '10px',
                    opacity: 0.4,
                    border: 'none',
                    background: 'none',
                  }}
                >
                  Protocol Details →
                </button>
              </div>

              <div
                className="absolute opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700"
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  right: '-40px',
                  width: '128px',
                  height: '128px',
                  background: 'var(--accent-primary)',
                  borderRadius: '50%',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
// Service overview cards
