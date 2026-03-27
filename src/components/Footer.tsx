import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-secondary"
      style={{
        borderTop: '1px solid var(--card-border)',
        padding: 'var(--section-padding) 0 4rem',
      }}
    >
      <div className="container">
        <div
          className="grid grid-5 footer-grid flex-footer"
          style={{ marginBottom: '5rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr', gap: '2rem' }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
              }}
            >
              <Logo size={36} />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                CODE{' '}
                <span style={{ color: 'var(--accent-primary)' }}>VERTEX</span>
              </span>
            </Link>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
              }}
            >
              Specialized Engineering & Digital Strategy. Building
              high-performance Web, Mobile, and Desktop solutions with
              uncompromised quality and reliability.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: 'var(--accent-primary)',
                marginBottom: '1.5rem',
              }}
            >
              SERVICES
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <li>
                <Link
                  to="/services#web-design"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                  className="footer-link"
                >
                  Web Design & UI/UX
                </Link>
              </li>
              <li>
                <Link
                  to="/services#web-app"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                  className="footer-link"
                >
                  Web App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#mobile"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                  className="footer-link"
                >
                  Android Applications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>LEGAL KIT</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="/document-templates/master-service-agreement-msa.html" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Master Services Agreement</a></li>
              <li><a href="/document-templates/non-disclosure-agreement-nda.html" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Non-Disclosure Agreement</a></li>
              <li><a href="/document-templates/ip-assignment-agreement.html" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">IP Assignment Protocol</a></li>
              <li><a href="/document-templates/payment-terms-agreement.html" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Payment Terms Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>OPS FORMS</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="/document-templates/form-onboarding.html" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Project Onboarding</a></li>
              <li><a href="/document-templates/form-change.html" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Change Request</a></li>
              <li><a href="/document-templates/form-milestone.html" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Milestone Sign-Off</a></li>
              <li><a href="/document-templates/form-feedback.html" target="_blank" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Client NPS Survey</a></li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: 'var(--accent-primary)',
                marginBottom: '1.5rem',
              }}
            >
              RESOURCES
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="https://codevertex.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Official Site
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/protocol"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Methodology Protocol
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: 'var(--accent-primary)',
                marginBottom: '1.5rem',
              }}
            >
              CONNECT
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <li>
                <a
                  href="https://www.linkedin.com/company/codevertex-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Code-Vertex"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/codevertex_solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/codevertexsolution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCxYATW_sz3dH2nBxot4Hamg"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  YouTube
                </a>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/tech-stack"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: 'var(--accent-primary)',
                marginBottom: '1.5rem',
              }}
            >
              SUPPORT
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <li>
                <a
                  href="https://wa.me/923177760506"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  Get a Quote →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="footer-bottom"
          style={{
            borderTop: '1px solid var(--card-border)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              fontWeight: 800,
              letterSpacing: '0.1em',
            }}
          >
            © 2026 CODE VERTEX SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <p
            style={{
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              fontWeight: 800,
              letterSpacing: '0.1em',
            }}
          >
            BUILDING THE FUTURE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// Sticky footer
