import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const capabilities = [
    {
      id: 'custom-software',
      title: 'Custom Software & SaaS',
      icon: '🚀',
      accent: '#00d2ff',
      desc: 'Architecting scalable SaaS platforms and enterprise ERP solutions tailored for high-concurrency and mission-critical workflows.',
      features: [
        'SaaS Product Architecture',
        'ERP & CRM Solutions',
        'Business Process Automation',
      ],
    },
    {
      id: 'web-design',
      title: 'Web Design & UI/UX',
      icon: '🎨',
      accent: '#ff0080',
      desc: 'Premium user interfaces and experience design focusing on brand narrative, micro-animations, and conversion optimization.',
      features: [
        'Strategic UI/UX Design',
        'Interactive Prototyping',
        'Responsive Web Architectures',
      ],
    },
    {
      id: 'web-app',
      title: 'Web App Development',
      icon: '⚙️',
      accent: '#00cfff',
      desc: 'Complex, high-performance web applications built using Next.js, MERN, and Redux for enterprise-grade scalability.',
      features: [
        'Full-Stack Web Apps',
        'API & Database Integration',
        'Cloud-Native Solutions',
      ],
    },
    {
      id: 'android-dev',
      title: 'Android App Development',
      icon: '🤖',
      accent: '#3ddc84',
      desc: 'Native-grade Android applications engineered for performance, security, and seamless hardware integration.',
      features: [
        'Native Android (Java/Kotlin)',
        'Social & Communication Apps',
        'Mobile Backend Integration',
      ],
    },
    {
      id: 'desktop-dev',
      title: 'Desktop Solutions',
      icon: '💻',
      accent: '#7000ff',
      desc: 'Robust Java-based desktop applications for complex data orchestration and high-performance offline systems.',
      features: [
        'Java Swing/JavaFX Apps',
        'Logistics Telemetry Systems',
        'Secure Offline Platforms',
      ],
    },
    {
      id: 'maintenance',
      title: 'Bug Fixing & Maintenance',
      icon: '🛠️',
      accent: '#ff7000',
      desc: 'Proactive system maintenance, technical debt reduction, and mission-critical bug resolution for existing codebases.',
      features: [
        'Reactive Bug Squashing',
        'Performance Optimization',
        'Technical Debt Audit',
      ],
    },
  ];

  return (
    <div className="services-page">
      <section
        className="hero-section-padding"
        style={{ padding: 'var(--section-padding) 0' }}
      >
        <div className="container">
          <header style={{ marginBottom: '8rem', textAlign: 'center' }}>
            <span className="text-label">Our Expertise</span>
            <h1 className="section-title">
              Engineered <br />
              <span className="accent-text">Service Delivery</span>
            </h1>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '750px',
                fontSize: '1.2rem',
                margin: '2.5rem auto 0',
                lineHeight: '1.8',
              }}
            >
              We provide focused software development services designed for
              performance and longevity. Our approach combines agile methodology
              with rigorous engineering standards.
            </p>
          </header>

          <div className="grid grid-3">
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                id={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="glass-card"
                style={{ padding: '3.5rem' }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: `${c.accent}15`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    marginBottom: '2rem',
                    border: `1px solid ${c.accent}30`,
                  }}
                >
                  {c.icon}
                </div>

                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.6rem' }}>
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    marginBottom: '2.5rem',
                  }}
                >
                  {c.desc}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem',
                    }}
                  >
                    {c.features.map((f, j) => (
                      <div
                        key={j}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.8rem',
                        }}
                      >
                        <span style={{ color: c.accent }}>•</span> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section
        id="protocol"
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <span className="text-label">Our Process</span>
            <h2 className="section-title">
              Methodical <span className="accent-text">Architecture</span>
            </h2>
          </div>

          <div className="grid grid-4">
            {[
              {
                title: 'Consult',
                icon: '01',
                desc: 'In-depth analysis of your business architecture and technical needs.',
              },
              {
                title: 'Blueprint',
                icon: '02',
                desc: 'Strategic technical mapping and interface prototyping in Figma.',
              },
              {
                title: 'Execute',
                icon: '03',
                desc: 'Agile development cycles with continuous quality assurance.',
              },
              {
                title: 'Support',
                icon: '04',
                desc: 'Lifecycle maintenance and proactive security assessments.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ textAlign: 'center', padding: '4rem 2.5rem' }}
              >
                <span
                  style={{
                    fontSize: '5rem',
                    fontWeight: 900,
                    opacity: 0.05,
                    position: 'absolute',
                    top: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 0,
                  }}
                >
                  {step.icon}
                </span>
                <span className="text-label" style={{ padding: '0.35rem 1.2rem', fontSize: '0.62rem', letterSpacing: '0.2em', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                  {step.title}
                </span>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    position: 'relative',
                    zIndex: 1,
                    lineHeight: '1.6',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Industry Focus Section */}
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '6rem 4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span className="text-label">Versatility</span>
              <h2 className="section-title">
                Strategic Industry <span className="accent-text">Focus</span>
              </h2>
            </div>
            <div className="grid grid-3" style={{ gap: '4rem' }}>
              {[
                {
                  title: 'EdTech',
                  desc: 'Transforming education with custom LMS platforms, student portals, and real-time assessment tools.',
                },
                {
                  title: 'FinTech',
                  desc: 'Secure payment architectures, transaction systems, and compliant financial dashboard design.',
                },
                {
                  title: 'Logistics',
                  desc: 'Inventory management solutions, real-time tracking, and supply chain automation logic.',
                },
              ].map((industry, i) => (
                <div key={i}>
                  <span className="text-label" style={{ padding: '0.35rem 1.2rem', fontSize: '0.62rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
                    {industry.title}
                  </span>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.7',
                    }}
                  >
                    {industry.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
