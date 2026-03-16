import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (containerRef.current && titleRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.hero-reveal', {
          y: 60,
          opacity: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power4.out',
        });

        gsap.to('.hero-float', {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 'var(--nav-height)',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative' }}
        >
          <div className="hero-reveal" style={{ marginBottom: '2.5rem' }}>
            <span 
              className="text-label" 
              style={{ 
                display: 'inline-block',
                letterSpacing: '0.8em', 
                background: 'rgba(255, 195, 0, 0.1)',
                padding: '0.5rem 1.5rem',
                borderRadius: '100px',
                border: '1px solid rgba(255, 195, 0, 0.2)',
                color: '#FFC300'
              }}
            >
              CODE VERTEX DIGITAL
            </span>
          </div>

          <h1
            ref={titleRef}
            className="hero-title hero-reveal"
            style={{
              lineHeight: '1',
              marginBottom: '3rem',
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              fontWeight: 800,
            }}
          >
            Engineering Code
            <span 
              className="accent-text" 
              style={{ 
                display: 'block',
                marginTop: '0.5rem',
                textShadow: '0 0 30px rgba(0, 207, 255, 0.3)'
              }}
            >
              Elevating Ideas
            </span>
          </h1>

          <p
            className="text-text-secondary hero-reveal"
            style={{
              maxWidth: '750px',
              margin: '0 auto 4.5rem',
              fontSize: '1.25rem',
              lineHeight: '1.8',
              opacity: 0.8,
            }}
          >
            A specialized engineering powerhouse focused on scalable, expert solutions. 
            We transform complex visions into high-performance digital reality.
          </p>

          <div
            className="hero-reveal"
            style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--accent-glow)' }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="btn btn-primary"
              style={{ 
                fontSize: '0.85rem', 
                padding: '1.4rem 3.5rem',
                borderRadius: '100px',
                background: 'var(--accent-primary)',
                color: '#000',
                fontWeight: 700
              }}
            >
              Start Your Vision
              <span style={{ marginLeft: '10px' }}>→</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.98 }}
              href="/portfolio"
              className="btn btn-outline"
              style={{ 
                fontSize: '0.85rem', 
                padding: '1.4rem 3.5rem',
                borderRadius: '100px',
                borderColor: 'rgba(255,255,255,0.2)'
              }}
            >
              The Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="hero-float" style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-glow)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        opacity: 0.1,
        zIndex: 1
      }} />
      <div className="hero-float" style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'rgba(0, 207, 255, 0.05)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        opacity: 0.1,
        zIndex: 1
      }} />
    </section>
  );
};

export default Hero;
