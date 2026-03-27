import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/team';
import TechRadar from '../components/premium/TechRadar';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Intro Hero */}
      <section
        className="hero-section-padding"
        style={{ padding: 'var(--section-padding) 0' }}
      >
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: 'center', gap: '8rem' }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-label">System Architecture</span>
              <h1
                className="hero-title"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  lineHeight: '1.1',
                }}
              >
                Engineering <br />
                <span className="accent-text">Future Excellence</span>
              </h1>
              <p
                className="text-text-secondary"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  marginTop: '2rem',
                }}
              >
                Code Vertex Software is an elite engineering house built on the
                principles of architectural integrity and global scalability. We
                partner with startups and enterprises to deploy mission-critical
                software that outperforms competition.
              </p>
            </motion.div>

            <div style={{ paddingTop: '2rem' }}>
              <div
                className="glass-card"
                style={{
                  padding: '4rem',
                  textAlign: 'center',
                  borderLeft: '4px solid var(--accent-primary)',
                }}
              >
                <h2
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    marginBottom: '1.5rem',
                    lineHeight: '1.2',
                  }}
                  className="accent-text"
                >
                  GLOBAL STANDARDS
                </h2>
                <span className="text-label" style={{ marginBottom: '2rem' }}>
                  ENTERPRISE SOLUTIONS
                </span>
                <div
                  style={{
                    height: '1px',
                    background: 'var(--card-border)',
                    margin: '2rem 0',
                  }}
                />
                <p
                  className="text-text-secondary"
                  style={{ fontSize: '1rem', lineHeight: '1.6' }}
                >
                  We deploy architectures that handle high-concurrency and
                  complex logic, allowing our partners to focus on scale while
                  we manage the technical core.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision / Philosophy */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <div
            className="grid grid-2"
            style={{ gap: '6rem', alignItems: 'center' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card"
              style={{ padding: 0, height: '500px', overflow: 'hidden' }}
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop"
                alt="Future Technology"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.3,
                }}
              />
            </motion.div>
            <div>
              <span className="text-label">Our Vision</span>
              <h2 className="section-title">
                The CODE VERTEX <span className="accent-text">Manifesto</span>
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2.5rem',
                  marginTop: '3rem',
                }}
              >
                {[
                  {
                    title: 'Reliability over Speed',
                    text: 'Velocity is meaningless without a stable foundation. We prioritize bulletproof architecture that stands the test of time.',
                  },
                  {
                    title: 'User-Centric Complexity',
                    text: 'We handle the heavy lifting of backend logic and intricate data flows so your users experience pure simplicity.',
                  },
                  {
                    title: 'Agile Integration',
                    text: 'Software should adapt. Our modular approach ensures your product can evolve as your business scales.',
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <span
                    className="text-label"
                    style={{
                      marginBottom: '1rem',
                      padding: '0.5rem 1.5rem',
                      fontSize: '0.6rem'
                    }}
                  >
                    {item.title}
                  </span>
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Leadership */}
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <header style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="text-label">Our Leadership</span>
            <h2 className="section-title">
              Engineering <span className="accent-text">Domain Experts</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '600px',
                margin: '1.5rem auto 0',
                fontSize: '1.1rem',
              }}
            >
              A focused team of specialists dedicated to building software that
              solves enterprise-scale problems.
            </p>
          </header>

          <div
            className="grid grid-2"
            style={{ maxWidth: '1000px', margin: '0 auto' }}
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  rotateY: i % 2 === 0 ? 5 : -5,
                  rotateX: 2,
                  scale: 1.02,
                  z: 50,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="glass-card"
                style={{
                  padding: '3.5rem',
                  position: 'relative',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  style={{
                    marginBottom: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    transform: 'translateZ(30px)',
                  }}
                >
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid var(--accent-primary)',
                      flexShrink: 0,
                      userSelect: 'none',
                      pointerEvents: 'none',
                      ...({ WebkitUserDrag: 'none' } as React.CSSProperties),
                    }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="avatar-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.6rem', margin: 0 }}>
                      {member.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: 'var(--accent-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginTop: '0.5rem',
                      }}
                    >
                      {member.role}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        marginTop: '0.5rem',
                        display: 'block',
                        opacity: 0.8,
                      }}
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.8',
                    marginBottom: '2rem',
                    minHeight: '120px',
                    transform: 'translateZ(20px)',
                  }}
                >
                  {member.bio}
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    transform: 'translateZ(40px)',
                  }}
                >
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      letterSpacing: '0.1em',
                    }}
                  >
                    GITHUB ↗
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--accent-primary)',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      letterSpacing: '0.1em',
                    }}
                  >
                    LINKEDIN ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-primary)',
        }}
      >
        <div className="container">
          <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <span className="text-label">The Technical Standard</span>
            <h2 className="section-title">
              Our <span className="accent-text">Core Ecosystem</span>
            </h2>
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
            {[
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
                techs: [
                  'React',
                  'Node.js',
                  'Express.js',
                  'Next.js',
                  'MongoDB',
                  'Redis',
                  'Socket.io',
                ],
                icon: '🕸️',
              },
              {
                title: 'Native Android',
                desc: 'Specialized native application development for the Android ecosystem. We focus on high-performance Java cores and seamless hardware integration.',
                techs: ['Java', 'Android SDK', 'Firebase', 'SQLite', 'REST APIs'],
                icon: '📱',
              },
              {
                title: 'Maintenance & Debugging',
                desc: 'Mission-critical technical support and code optimization for existing systems. We ensure your software remains performant and secure.',
                techs: ['Bug Fixing', 'Security Patching', 'Refactoring', 'Optimization'],
                icon: '🛠️',
              },
            ].map((stack, i) => (
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

      {/* Why Code Vertex */}
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '6rem',
              textAlign: 'center',
              background: 'var(--bg-secondary)',
            }}
          >
            <h2 className="section-title">
              The Code Vertex <br />
              <span className="accent-text">Advantage</span>
            </h2>
            <div
              className="grid grid-3"
              style={{ marginTop: '5rem', gap: '3rem' }}
            >
              {[
                {
                  label: 'ENTERPRISE VELOCITY',
                  value: 'Rapid turnarounds without technical debt.',
                },
                {
                  label: 'TIER-1 STACK',
                  value: 'Specialized in MERN, Java, and Distributed Systems.',
                },
                {
                  label: 'DIRECT CONSULTATION',
                  value: 'Unfiltered access to lead engineering bandwidth.',
                },
              ].map((stat, i) => (
                <div key={i}>
                  <span
                    className="text-label"
                    style={{
                      marginBottom: '1rem',
                      padding: '0.5rem 1.5rem',
                      fontSize: '0.6rem'
                    }}
                  >
                    {stat.label}
                  </span>
                  <p
                    style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}
                  >
                    {stat.value}
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

export default About;
// Company mission and values
// Team member profiles
