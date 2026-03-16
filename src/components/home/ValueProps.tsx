import React from 'react';
import { motion } from 'framer-motion';

const ValueProps: React.FC = () => {
  const props = [
    {
      title: 'Precision Engineering',
      desc: 'We minimize technical debt by following rigorous architectural standards, ensuring long-term maintainability and system integrity.',
      metric: 'ELITE',
      label: 'ARCHITECTURE',
    },
    {
      title: 'Distributed Scaling',
      desc: 'Our modular development workflow ensures your backend can handle thousands of concurrent requests with zero latency spikes.',
      metric: 'HIGH',
      label: 'AVAILABILITY',
    },
    {
      title: 'Technical Consultation',
      desc: 'Direct access to senior engineering bandwidth. We eliminate layers of management to focus on pure technical solutioning.',
      metric: 'DIRECT',
      label: 'SYNC',
    },
  ];

  return (
    <section
      style={{
        padding: 'var(--section-padding) 0',
        background: 'var(--bg-tertiary)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="bg-tertiary"
    >
      <div className="container">
        <div
          className="grid grid-2"
          style={{ gap: '8rem', alignItems: 'center' }}
        >
          <div>
            <span className="text-label">Why Code Vertex</span>
            <h2 className="section-title">
              Engineered for <br />
              <span className="accent-text">Maximum Impact</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                marginTop: '2rem',
                marginBottom: '4rem',
              }}
            >
              We’ve positioned ourselves at the intersection of precision code 
              and visionary strategy. Code Vertex provides direct access to 
              senior engineering minds, delivering scalable solutions 
              that drive high-value business results.
            </p>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
            >
              {props.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      padding: '1rem',
                      background: 'var(--accent-glow)',
                      borderRadius: '12px',
                      color: 'var(--accent-primary)',
                      fontWeight: 900,
                    }}
                  >
                    {p.metric}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                      {p.title}
                    </h4>
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{
              rotateY: 2,
              rotateX: -2,
              translateY: -5,
              boxShadow: '0 20px 40px var(--accent-glow)',
            }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            className="glass-card"
            style={{
              padding: '4rem 0',
              height: '600px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'var(--bg-primary)',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div style={{ transform: 'translateZ(30px)' }}>
              {/* Dynamic Visual Representation of Performance */}
              <div style={{ padding: '0 4rem' }}>
                <span className="text-label" style={{ opacity: 0.5 }}>
                  Network Throughput
                </span>
                <div
                  style={{
                    height: '200px',
                    width: '100%',
                    borderBottom: '2px solid var(--accent-primary)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '8px',
                    marginTop: '2rem',
                  }}
                >
                  {[60, 40, 80, 50, 90, 70, 100, 85, 95, 110, 120, 90, 130].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.03, duration: 0.5 }}
                        style={{
                          flex: 1,
                          background: 'var(--accent-gradient)',
                          borderRadius: '4px 4px 0 0',
                          opacity: 0.3 + i * 0.05,
                        }}
                      />
                    )
                  )}
                </div>
                <div style={{ marginTop: '4rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <span style={{ fontSize: '0.7rem', fontWeight: 800 }}>
                      OPTIMIZATION LEVEL
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: 'var(--accent-primary)',
                      }}
                    >
                      MAXIMUM
                    </span>
                  </div>
                  <div
                    style={{
                      height: '4px',
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '100px',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      style={{
                        height: '100%',
                        background: 'var(--accent-gradient)',
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '3rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                  }}
                >
                  Our systems are built with <strong>MERN</strong> and{' '}
                  <strong>Java</strong> architectures that handle 10,000+
                  concurrent requests per second with sub-50ms latency.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'var(--accent-glow)',
          filter: 'blur(150px)',
          borderRadius: '50%',
          opacity: 0.2,
        }}
      />
    </section>
  );
};

export default ValueProps;
