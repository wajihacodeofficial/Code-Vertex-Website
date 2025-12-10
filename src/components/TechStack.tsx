import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const techs = [
    'AWS',
    'RUST',
    'GO',
    'REACT',
    'NEXT.JS',
    'KUBERNETES',
    'TENSORFLOW',
    'POSTGRESQL',
    'PYTHON',
    'DOCKER',
  ];

  return (
    <section id="tech">
      <div className="container" style={{ overflow: 'hidden' }}>
        <header className="mb-20">
          <span
            className="uppercase tracking-[0.4em] block mb-4"
            style={{ color: 'var(--text-secondary)', fontSize: '10px' }}
          >
            Core Infrastructure
          </span>
          <h2 className="section-title">THE STACK</h2>
        </header>

        <div
          className="relative w-full flex items-center"
          style={{ height: '150px', overflow: 'hidden', position: 'relative' }}
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="flex items-center"
            style={{ display: 'flex', gap: '5rem', whiteSpace: 'nowrap' }}
          >
            {[...techs, ...techs, ...techs].map((t, i) => (
              <span
                key={i}
                className="font-heading font-black transition-all duration-500"
                style={{ fontSize: '10vw', opacity: 0.1, cursor: 'default' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.1';
                  e.currentTarget.style.color = 'inherit';
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        <div
          className="grid mt-20"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            {
              tag: 'PERFORMANCE',
              desc: 'Optimized for low-latency distribution and high-throughput workloads.',
            },
            {
              tag: 'SCALABILITY',
              desc: 'Cloud-native architectures designed for infinite horizontal scaling.',
            },
            {
              tag: 'SECURITY',
              desc: 'Military-grade protection and architectural zero-trust protocols.',
            },
          ].map((item, i) => (
            <div key={i} className="glass-card">
              <h4
                className="mb-4 tracking-widest"
                style={{ color: 'var(--accent-primary)', fontSize: '12px' }}
              >
                {item.tag}
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
// Technology stack icons and labels
