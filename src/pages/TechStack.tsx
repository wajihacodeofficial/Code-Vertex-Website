import React from 'react';
import { motion } from 'framer-motion';
import TechRadar from '../components/premium/TechRadar';

const TechStack: React.FC = () => {
  const coreStacks = [
    {
      title: 'Distributed Systems (Java)',
      desc: 'High-concurrency enterprise cores built with the Spring ecosystem. We specialize in robust, type-safe architectures for mission-critical operations.',
      techs: [
        'Spring Boot',
        'Java 21',
        'Microservices',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
      ],
      icon: '🏛️',
    },
    {
      title: 'Real-time Web (MERN)',
      desc: 'Dynamic, lightning-fast web applications using modern JavaScript standards. Optimized for sub-second responses and global scalability.',
      techs: ['React', 'Node.js', 'Next.js', 'MongoDB', 'Redis', 'Socket.io'],
      icon: '🕸️',
    },
    {
      title: 'Native Android Development',
      desc: 'High-performance native mobile applications engineered for the Android ecosystem. Optimized for security, hardware integration, and fluid performance.',
      techs: [
        'Java',
        'Android SDK',
        'Firebase',
        'SQLite',
        'REST APIs',
        'Material Design',
      ],
      icon: '📱',
    },
    {
      title: 'Bug Fixing & Maintenance',
      desc: 'Dedicated technical support for legacy codebases and existing systems. We specialize in identifying bottlenecks and resolving mission-critical bugs.',
      techs: [
        'Vulnerability Patching',
        'Refactoring',
        'Performance Audits',
        'System Hardening',
        'Legacy Migration',
        '24/7 Support',
      ],
      icon: '🛠️',
    },
  ];

  return (
    <div className="tech-stack-page">
      <section style={{ padding: '180px 0 100px' }}>
        <div className="container">
          <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <span className="text-label">The Technical Standard</span>
            <h1 className="section-title">
              Our <span className="accent-text">Core Ecosystem</span>
            </h1>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '750px',
                margin: '2rem auto 0',
                fontSize: '1.25rem',
                lineHeight: '1.8',
              }}
            >
              We don't chase every trend. We master the most performant, stable,
              and scalable technologies to ensure your software is future-proof.
            </p>
          </header>

          <div className="grid grid-2" style={{ gap: '4rem' }}>
            {coreStacks.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: '4rem' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                  {stack.icon}
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                  {stack.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.8',
                    marginBottom: '3rem',
                    fontSize: '1.05rem',
                  }}
                >
                  {stack.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {stack.techs.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.6rem 1.4rem',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '8rem' }}>
            <TechRadar />
          </div>
        </div>
      </section>

      {/* Infrastructure Philosophy */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <div
            className="glass-card"
            style={{ padding: '6rem', textAlign: 'center' }}
          >
            <h2 className="section-title">
              The <span className="accent-text">Code Vertex</span> Engineering
              Philosophy
            </h2>
            <div
              className="grid grid-3"
              style={{ marginTop: '5rem', gap: '3rem' }}
            >
              {[
                {
                  title: 'MODULARITY',
                  desc: 'Every component is built to be independent, making updates and scaling effortless.',
                },
                {
                  title: 'PERFORMANCE',
                  desc: 'We target <span style="color:var(--accent-primary)">1s</span> page loads and sub-50ms server responses.',
                },
                {
                  title: 'SECURITY',
                  desc: 'Data protection is never an after-thought; it is baked into the initial blueprint.',
                },
              ].map((p, i) => (
                <div key={i}>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 900,
                      marginBottom: '1.5rem',
                      letterSpacing: '0.2em',
                    }}
                  >
                    {p.title}
                  </h4>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.7',
                    }}
                    dangerouslySetInnerHTML={{ __html: p.desc }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
