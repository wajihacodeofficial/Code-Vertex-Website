import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('ALL');

  const projects = [
    // Web Applications
    // Web Applications
    {
      id: 1,
      title: 'Bitedash',
      category: 'Web',
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2832&auto=format&fit=crop',
      desc: 'Multi-restaurant food delivery platform with real-time order tracking and payment integration.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Medify',
      category: 'Web',
      image:
        'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2944&auto=format&fit=crop',
      desc: 'Comprehensive pharmacy management system with inventory tracking and admin dashboard.',
      tech: ['React', 'Express.js', 'MongoDB', 'Tailwind'],
    },
    {
      id: 3,
      title: 'Clinic Management System',
      category: 'Web',
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2944&auto=format&fit=crop',
      desc: 'Digital healthcare solution for patient registration, appointment booking, and billing.',
      tech: ['Next.js', 'PostgreSQL', 'Node.js'],
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      category: 'Web',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop',
      desc: 'Scalable online retail solution with product catalog, shopping cart, and order tracking.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      id: 5,
      title: 'LMS Platform',
      category: 'Web',
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2832&auto=format&fit=crop',
      desc: 'Interactive learning management system with video lessons, quizzes, and progress tracking.',
      tech: ['React', 'Express.js', 'MongoDB'],
    },
    // Mobile Applications
    {
      id: 6,
      title: 'On-Demand Service App',
      category: 'Mobile',
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop',
      desc: 'Real-time booking application with location tracking and secure payment gateway.',
      tech: ['Flutter', 'Firebase', 'Google Maps API'],
    },
    {
      id: 7,
      title: 'Finance Tracker',
      category: 'Mobile',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop',
      desc: 'Personal finance manager with income/expense analytics, charts, and secure storage.',
      tech: ['Flutter', 'Firebase', 'Charts'],
    },
    {
      id: 8,
      title: 'Cloud Kitchen App',
      category: 'Mobile',
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2944&auto=format&fit=crop',
      desc: 'Mobile ordering system for cloud kitchens with menu browsing and delivery tracking.',
      tech: ['Flutter', 'Firebase', 'Socket.io'],
    },
    // Desktop Applications
    {
      id: 9,
      title: 'Organizer Desktop',
      category: 'Desktop',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop',
      desc: 'Productivity tool for task management, scheduling, and seamless data export.',
      tech: ['Electron', 'React', 'Node.js'],
    },
    {
      id: 10,
      title: 'HR Management System',
      category: 'Desktop',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
      desc: 'Enterprise-grade system for employee management, payroll processing, and reporting.',
      tech: ['React', 'Spring Boot', 'PostgreSQL'],
    },
  ];

  const categories = ['ALL', 'WEB', 'MOBILE', 'DESKTOP', 'CUSTOM'];

  const filteredProjects =
    filter === 'ALL'
      ? projects
      : projects.filter((p) => p.category.toUpperCase() === filter);

  return (
    <div className="portfolio-page">
      <section
        className="hero-section-padding"
        style={{ padding: 'var(--section-padding) 0' }}
      >
        <div className="container">
          <header style={{ marginBottom: '8rem', textAlign: 'center' }}>
            <span className="text-label">Selected Deployments</span>
            <h1 className="section-title">
              Engineering <span className="accent-text">Showcase</span>
            </h1>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <button
                className="btn btn-outline"
                style={{
                  padding: '0.8rem 2rem',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                }}
                onClick={() => {
                  /* Placeholder for Client Portal action */
                  alert(
                    'Client Portal Access Restricted: Authorized Personnel Only'
                  );
                }}
              >
                ACCESS CLIENT PORTAL
              </button>
            </div>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '750px',
                fontSize: '1.2rem',
                margin: '2rem auto 0',
                lineHeight: '1.8',
              }}
            >
              A gallery of our strategic technical executions. We focus on
              building high-impact solutions that define the standard for modern
              software.
            </p>
          </header>

          {/* Premium Filter System */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '5rem',
              overflowX: 'auto',
              paddingBottom: '1rem',
            }}
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="btn"
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '0.7rem',
                  background:
                    filter === c ? 'var(--accent-gradient)' : 'var(--card-bg)',
                  color: filter === c ? '#fff' : 'var(--text-primary)',
                  border:
                    filter === c ? 'none' : '1px solid var(--card-border)',
                  minWidth: '120px',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="glass-card"
                  style={{ padding: 0, overflow: 'hidden', height: '600px' }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.5) contrast(1.1)',
                        transition: 'all 1.2s var(--transition-premium)',
                      }}
                      className="hover-img"
                    />

                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        padding: '4rem',
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                        pointerEvents: 'none',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 900,
                          color: 'var(--accent-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.4em',
                          marginBottom: '1rem',
                          display: 'block',
                        }}
                      >
                        {p.category}
                      </span>
                      <h3
                        style={{
                          fontSize: '2.5rem',
                          marginBottom: '1.5rem',
                          color: '#fff',
                        }}
                      >
                        {p.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: '1.6',
                          marginBottom: '2rem',
                          maxWidth: '90%',
                        }}
                      >
                        {p.desc}
                      </p>

                      <div
                        style={{
                          display: 'flex',
                          gap: '1rem',
                          marginBottom: '2rem',
                        }}
                      >
                        {p.tech.map((t, k) => (
                          <span
                            key={k}
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 800,
                              color: 'rgba(255,255,255,0.7)',
                              background: 'rgba(255,255,255,0.05)',
                              padding: '0.4rem 1rem',
                              borderRadius: '100px',
                              border: '1px solid rgba(255,255,255,0.1)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/portfolio/${p.id}`}
                        className="btn btn-primary"
                        style={{
                          padding: '0.8rem 2rem',
                          fontSize: '0.65rem',
                          pointerEvents: 'auto',
                          display: 'inline-block',
                          textDecoration: 'none',
                        }}
                      >
                        VIEW CASE STUDY
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container text-center">
          <div
            className="glass-card bg-tertiary"
            style={{ padding: '6rem 4rem' }}
          >
            <span className="text-label">Infinite Scale</span>
            <h2 className="section-title">
              Have a Technical <br />
              <span className="accent-text">Vision?</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '650px',
                margin: '0 auto 3rem',
                fontSize: '1.2rem',
                lineHeight: '1.8',
              }}
            >
              We specialize in bringing high-complexity digital architects to
              life. Let's discuss your next breakthrough deployment.
            </p>
            <a
              href="/contact"
              className="btn btn-primary"
              style={{ fontSize: '0.8rem', padding: '1.5rem 4rem' }}
            >
              Initiate Protocol
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .glass-card:hover .hover-img {
          transform: scale(1.05);
          filter: brightness(0.7) contrast(1);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
// Project showcase
