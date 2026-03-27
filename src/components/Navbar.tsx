import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sun, Moon } from 'lucide-react';

import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Resources', path: '/resources' },
    { name: 'Protocol', path: '/protocol' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="logo" style={{ cursor: 'pointer', flexShrink: 0 }}>
            <Link
              to="/"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo(0, 0);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                textDecoration: 'none',
              }}
            >
              <div style={{ position: 'relative' }}>
                <Logo size={48} />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  lineHeight: '1',
                }}
                className="hide-mobile"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    fontSize: '1.7rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  CODE <span style={{ color: 'var(--accent-primary)' }}>VERTEX</span>
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.4em',
                    marginTop: '0.3rem',
                  }}
                >
                  Digital Innovation
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5rem',
              marginLeft: 'auto',
              paddingLeft: '4rem',
            }}
            className="hide-mobile"
          >
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              {links.map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  onClick={() => window.scrollTo(0, 0)}
                  style={({ isActive }) => ({
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    color: isActive
                      ? 'var(--accent-primary)'
                      : 'var(--text-primary)',
                    opacity: isActive ? 1 : 0.6,
                    textDecoration: 'none',
                    transition: 'all 0.4s var(--transition-premium)',
                    position: 'relative',
                    padding: '0.5rem 0',
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {l.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '2px',
                            background: 'var(--accent-gradient)',
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div
              style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
            >
              <button
                onClick={toggleTheme}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                }}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="btn btn-primary"
                style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem', whiteSpace: 'nowrap' }}
              >
                HIRE US
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              gap: '6px',
              flexDirection: 'column',
              cursor: 'pointer',
              zIndex: 6000,
            }}
            className="show-mobile"
          >
            <motion.div
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
                width: isOpen ? '30px' : '24px',
              }}
              style={{ height: '2px', background: 'var(--text-primary)' }}
            />
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              style={{
                width: '24px',
                height: '2px',
                background: 'var(--text-primary)',
              }}
            />
            <motion.div
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
                width: isOpen ? '30px' : '24px',
              }}
              style={{ height: '2px', background: 'var(--text-primary)' }}
            />
          </button>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .hide-mobile { display: none !important; }
            .show-mobile { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Mobile Menu Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            style={{
              position: 'fixed',
              inset: 0,
              background:
                theme === 'dark'
                  ? 'rgba(5, 5, 5, 0.98)'
                  : 'rgba(255, 255, 255, 0.98)',
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              padding: '20px 2rem 4rem',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Mobile Menu Header with Back Arrow */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '3rem',
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background:
                    theme === 'dark'
                      ? 'rgba(255,255,255,0.08)'
                      : 'rgba(0,0,0,0.05)',
                  border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'}`,
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                }}
              >
                <ArrowLeft size={24} />
              </button>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900,
                  fontSize: '0.75rem',
                  letterSpacing: '0.4em',
                  color: 'var(--accent-primary)',
                  textTransform: 'uppercase',
                  opacity: 0.8,
                }}
              >
                MENU
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                flex: 1,
              }}
            >
              {links.map((l, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={l.path}
                >
                  <Link
                    to={l.path}
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    style={{
                      fontSize: '2.4rem',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      lineHeight: '1.1',
                      letterSpacing: '-0.04em',
                      display: 'block',
                    }}
                  >
                    {l.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <button
                  onClick={toggleTheme}
                  style={{
                    background:
                      theme === 'dark'
                        ? 'rgba(255,255,255,0.1)'
                        : 'rgba(0,0,0,0.05)',
                    border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'}`,
                    padding: '1.2rem 2rem',
                    borderRadius: '16px',
                    color: 'var(--text-primary)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                  }}
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun size={20} /> LIGHT MODE
                    </>
                  ) : (
                    <>
                      <Moon size={20} /> DARK MODE
                    </>
                  )}
                </button>
              </div>

              <Link
                to="/contact"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '0.75rem',
                  padding: '1rem',
                  borderRadius: '16px',
                  whiteSpace: 'nowrap'
                }}
              >
                HIRE US
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
// Base navigation layout
// Smooth mobile drawer
