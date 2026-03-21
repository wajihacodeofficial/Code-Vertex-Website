import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techData = [
  {
    name: 'React',
    category: 'Frontend',
    level: 0.9,
    x: 200,
    y: 150,
    info: 'Industry-standard for reactive UIs.',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 0.85,
    x: 450,
    y: 180,
    info: 'Scalable event-driven architectures.',
  },
  {
    name: 'Java',
    category: 'Backend',
    level: 0.95,
    x: 480,
    y: 350,
    info: 'The gold standard for enterprise stability.',
  },
  {
    name: 'Three.js',
    category: 'Visuals',
    level: 0.75,
    x: 150,
    y: 400,
    info: 'Immersive 3D web experiences.',
  },
  {
    name: 'Kubernetes',
    category: 'DevOps',
    level: 0.8,
    x: 300,
    y: 500,
    info: 'Automated container orchestration.',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 0.9,
    x: 350,
    y: 280,
    info: 'Reliable relational data management.',
  },
];

const TechRadar: React.FC = () => {
  const [hovered, setHovered] = useState<{name: string, category: string, level: number, info: string, x: number, y: number} | null>(null);

  return (
    <div
      className="glass-card"
      style={{ padding: '4rem', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="text-label">Interactive Map</span>
        <h3 style={{ fontSize: '2.5rem' }}>
          The <span className="accent-text">Tech Radar</span>
        </h3>
      </div>

      <div style={{ position: 'relative', height: '600px', width: '100%' }}>
        {/* Radar Circles */}
        {[1, 2, 3].map((circle) => (
          <div
            key={circle}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${circle * 200}px`,
              height: `${circle * 200}px`,
              border: '1px solid rgba(0, 210, 255, 0.1)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Radar Lines */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '1px',
            background: 'rgba(0, 210, 255, 0.05)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '1px',
            height: '100%',
            background: 'rgba(0, 210, 255, 0.05)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Scanning Effect */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            background:
              'linear-gradient(45deg, rgba(0, 210, 255, 0.1), transparent)',
            transformOrigin: 'top left',
            borderRadius: '0 100% 0 0',
            pointerEvents: 'none',
          }}
        />

        {/* Tech Nodes */}
        {techData.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            onMouseEnter={() => setHovered(tech)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              left: tech.x,
              top: tech.y,
              width: '12px',
              height: '12px',
              background: 'var(--accent-primary)',
              borderRadius: '50%',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 0 15px var(--accent-primary)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: 'var(--text-secondary)',
              }}
            >
              {tech.name}
            </div>
          </motion.div>
        ))}

        {/* Info Box */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                width: '300px',
                padding: '2rem',
                background: 'rgba(5, 5, 5, 0.9)',
                border: '1px solid var(--accent-primary)',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                zIndex: 20,
              }}
            >
              <span className="text-label" style={{ fontSize: '0.6rem' }}>
                {hovered.category}
              </span>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                {hovered.name}
              </h4>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                {hovered.info}
              </p>
              <div
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span style={{ fontSize: '0.7rem', fontWeight: 800 }}>
                  EXPERTISE
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '2px',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${hovered.level * 100}%` }}
                    style={{
                      height: '100%',
                      background: 'var(--accent-primary)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TechRadar;
