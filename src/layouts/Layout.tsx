import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ThreeBackground from '../components/ThreeBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContent: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  // Scroll to top on navigation or handle hash
  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div
      className="layout-root"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <ThreeBackground />
      {/* GLOBAL AMBIENT ORBS */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', background: 'var(--accent-glow)', borderRadius: '50%', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '500px', height: '500px', background: 'rgba(0,207,255,0.1)', borderRadius: '50%', filter: 'blur(120px)' }} />
      </div>
      <Navbar />

      <main
        style={{
          flex: 1,
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: 1, width: '100%' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Footer />
      </div>

      <WhatsAppButton />
      <CookieConsent />
      <ScrollToTopButton />
    </div>
  );
};

const Layout: React.FC<LayoutProps> = (props) => (
  <LayoutContent {...props} />
);

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/923177760506"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        zIndex: 9999,
        width: '60px',
        height: '60px',
        background: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        boxShadow: '0 10px 20px rgba(37, 211, 102, 0.3)',
        textDecoration: 'none',
        fontSize: '1.8rem',
      }}
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
};

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShow(true), 0);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      style={{
        position: 'fixed',
        bottom: '8rem',
        left: '2rem',
        zIndex: 9000,
        width: 'calc(100% - 4rem)',
        maxWidth: '320px',
      }}
    >
      <div
        className="glass-card"
        style={{
          padding: '1.2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderLeft: '4px solid var(--accent-primary)',
        }}
      >
        <p
          style={{
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.5',
          }}
        >
          We use cookies to enhance your experience. By continuing, you agree to
          our privacy settings.
        </p>
        <div style={{ display: 'flex', gap: '0.8rem' }}>
          <button
            onClick={handleAccept}
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.6rem',
              flex: 1,
              borderRadius: '8px',
            }}
          >
            Got it
          </button>
          <button
            onClick={handleAccept}
            className="btn btn-outline"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.6rem',
              flex: 1,
              borderRadius: '8px',
            }}
          >
            Settings
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <motion.button
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9000,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        background: 'var(--accent-gradient)',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 20px var(--accent-glow)',
      }}
    >
      ↑
    </motion.button>
  );
};

export default Layout;
