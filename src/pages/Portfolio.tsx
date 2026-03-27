import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: 'BiteDash',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2832&auto=format&fit=crop',
      desc: 'MERN-stack food delivery platform with real-time order tracking and restaurant orchestration.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      id: 2,
      title: 'TranspoPilot',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2940&auto=format&fit=crop',
      desc: 'AI-powered fleet management console for real-time operation monitoring and route optimization.',
      tech: ['Next.js', 'Supabase', 'AI', 'Tailwind'],
    },
    {
      id: 3,
      title: 'Medify',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2944&auto=format&fit=crop',
      desc: 'Scalable healthcare SaaS for clinical scheduling, patient records, and workflow automation.',
      tech: ['React', 'Node.js', 'Vite', 'SQL'],
    },
    {
      id: 4,
      title: 'PakChat',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2940&auto=format&fit=crop',
      desc: 'Native Android social app optimized for low-bandwidth messaging and real-time connectivity.',
      tech: ['Android', 'Java', 'Firebase', 'XML'],
    },
    {
      id: 5,
      title: 'Atmos',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop',
      desc: 'High-performance weather dashboard with live telemetry and predictive environmental models.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'API'],
    },
    {
      id: 6,
      title: 'CureVirtual',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2944&auto=format&fit=crop',
      desc: 'Virtual healthcare ecosystem for secure consultations and digital medical orchestration.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      id: 7,
      title: 'StockPro',
      category: 'Desktop',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop',
      desc: 'Professional Java-based ERP for inventory management and automated fiscal reporting.',
      tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
    },
    {
      id: 8,
      title: 'RideShare',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2944&auto=format&fit=crop',
      desc: 'Real-time mobility app with GPS tracking and native Android performance.',
      tech: ['Android', 'Java', 'Google Maps', 'Firebase'],
    },
    {
      id: 9,
      title: 'ClinicCore',
      category: 'Desktop',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
      desc: 'Enterprise hospital management system with secure medical records and JavaFX interface.',
      tech: ['JavaFX', 'MySQL', 'JDBC', 'Relational DB'],
    },
  ];

  const categories = ['ALL', 'WEB', 'MOBILE', 'DESKTOP', 'SAAS'];

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
            <span className="text-label-pill">Selected Deployments</span>
            <h1 className="section-title">
              Engineering <span className="accent-text">Showcase</span>
            </h1>
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
                aria-label={`Filter by ${c}`}
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
                      loading="lazy"
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
                          gap: '0.5rem',
                          marginBottom: '2rem',
                          flexWrap: 'wrap'
                        }}
                      >
                        {p.tech.map((t, k) => (
                          <span
                            key={k}
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              color: 'rgba(255,255,255,0.6)',
                              padding: '0 0.5rem',
                              borderRight: k < p.tech.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                              letterSpacing: '0.1em'
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/portfolio/${p.id}`}
                        className="btn btn-primary"
                        aria-label={`View Case Study for ${p.title}`}
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
              aria-label="Initiate Protocol - Contact Us"
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
