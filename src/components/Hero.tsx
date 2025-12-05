import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 'var(--nav-height)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            scale: { duration: 1.5 },
          }}
          style={{ position: 'relative' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <span className="text-label">RapidWave Software</span>
          </motion.div>

          <h1
            className="hero-title"
            style={{
              lineHeight: '0.9',
              marginBottom: '3.5rem',
              perspective: '1000px',
            }}
          >
            <motion.span
              initial={{ opacity: 0, rotateX: -20, y: 10 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              style={{ display: 'block' }}
            >
              Engineering
            </motion.span>
            <motion.span
              className="accent-text"
              style={{ paddingBottom: '0.2em', display: 'block' }}
              initial={{ opacity: 0, rotateX: -20, y: 10 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Digital Waves of Innovation
            </motion.span>
          </h1>
          <motion.p
            className="text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{
              maxWidth: '800px',
              margin: '0 auto 4.5rem',
              fontSize: '1.2rem',
              lineHeight: '1.8',
            }}
          >
            RapidWave is an elite engineering house specialized in sub-second
            performance and high-concurrency architectures. We transform complex
            business logic into scalable digital infrastructure.
          </motion.p>

          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.a
              whileHover={{ scale: 1.05, translateY: -5 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="btn btn-primary"
              style={{ fontSize: '0.75rem', padding: '1.2rem 3rem' }}
            >
              Start Your Project
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, translateY: -5, color: '#000000' }}
              whileTap={{ scale: 0.98 }}
              href="/portfolio"
              className="btn btn-outline"
              style={{ fontSize: '0.75rem', padding: '1.2rem 3rem' }}
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric bottom fade for cinematic transition */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '40vh',
          background:
            'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    </section>
  );
};

export default Hero;
// Engaging hero section
