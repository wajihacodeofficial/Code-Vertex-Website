import React from 'react';
import { motion } from 'framer-motion';

const FeaturedWork: React.FC = () => {
  return (
    <section
      id="work"
      style={{ borderTop: '1px solid var(--card-border)', paddingTop: '100px' }}
    >
      <div className="container">
        {[
          {
            title: 'PAKCHAT',
            subtitle: 'NATIVE ANDROID',
            desc: 'High-efficiency social messaging console optimized for real-time synchronization in low-bandwidth environments.',
            tags: ['ANDROID', 'JAVA', 'FIREBASE'],
            img: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2940&auto=format&fit=crop',
            result: 'Engineered sub-50ms message delivery and local offline persistence.',
            link: '/portfolio/4',
          },
          {
            title: 'BITEDASH',
            subtitle: 'MERN PLATFORM',
            desc: 'A full-stack food delivery ecosystem handling complex order lifecycles with high-concurrency reliability.',
            tags: ['MONGODB', 'EXPRESS', 'REACT', 'NODE'],
            img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2832&auto=format&fit=crop',
            result: '99.9% Core uptime across multi-tenant restaurant networks.',
            link: '/portfolio/1',
          },
          {
            title: 'TRANSPOPILOT',
            subtitle: 'AI LOGISTICS',
            desc: 'Enterprise AI telemetry system for mission-critical fleet management and route optimization.',
            tags: ['NEXT.JS', 'SUPABASE', 'AI', 'SQL'],
            img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2940&auto=format&fit=crop',
            result: 'AI-driven predictive efficiency gains of +25% in operations.',
            link: '/portfolio/2',
          },
          {
            title: 'STOCKPRO',
            subtitle: 'JAVA DESKTOP',
            desc: 'Professional ERP management panel with real-time inventory analytics and JDBC persistence.',
            tags: ['JAVA', 'SWING', 'MYSQL', 'JDBC'],
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop',
            result: 'Zero-latency local orchestration with automated fiscal reporting.',
            link: '/portfolio/7',
          },
        ].map((project, i) => (
          <div
            key={i}
            className="grid grid-2"
            style={{
              alignItems: 'center',
              gap: '6rem',
              marginBottom: '8rem',
              direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ direction: 'ltr' }}
            >
              <span className="text-label">Strategic Win 0{i + 1}</span>
              <h2
                className="section-title"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                  marginBottom: '2rem',
                }}
              >
                {project.title} <br />
                <span className="accent-text" style={{ fontSize: '0.8em' }}>{project.subtitle}</span>
              </h2>
              <p
                className="text-text-secondary"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  marginBottom: '2.5rem',
                  maxWidth: '500px',
                }}
              >
                {project.desc}
              </p>

              <div
                style={{ display: 'flex', gap: '0.8rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}
              >
                {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '0.4rem 1rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                        borderRadius: '4px'
                      }}
                    >
                      {tag}
                    </span>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <motion.a
                  whileHover={{ scale: 1.02, translateY: -3 }}
                  href={`https://wa.me/923177760506?text=${encodeURIComponent(`Hello Code Vertex Technical Team, I am interested in learning more about the ${project.title} project. Could you please share more details?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  aria-label={`Inquire about ${project.title}`}
                  style={{
                    padding: '1.2rem 3rem',
                    fontSize: '0.75rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                  }}
                >
                  GET PROJECT DETAILS
                  <span style={{ fontSize: '1rem' }}>↗</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                rotateY: i % 2 === 0 ? 2 : -2,
                rotateX: -1,
                translateY: -5,
                boxShadow: '0 30px 60px var(--accent-glow)',
              }}
              transition={{
                duration: 1,
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className="glass-card"
              style={{
                padding: 0,
                aspectRatio: '16/10',
                borderRadius: '2.5rem',
                direction: 'ltr',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transform: 'translateZ(40px)',
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%) brightness(0.6)',
                    transition: 'all 1s var(--transition-premium)',
                  }}
                  className="hover-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 60%)',
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 900,
                      color: 'var(--accent-primary)',
                      letterSpacing: '0.5em',
                      textTransform: 'uppercase',
                      marginBottom: '0.8rem',
                    }}
                  >
                    PROJECT RESULTS
                  </span>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#ffffff',
                    }}
                  >
                    {project.result}
                  </p>
                </div>
              </div>

              <style>{`
                .glass-card:hover .hover-img {
                  filter: grayscale(0%) brightness(1);
                  transform: scale(1.03);
                }
              `}</style>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
