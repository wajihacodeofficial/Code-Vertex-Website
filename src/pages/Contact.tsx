import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    identity: '',
    email: '',
    scope: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error(
        'Contact Form Error: VITE_WEB3FORMS_ACCESS_KEY is missing.'
      );
      alert(
        'System configuration error. Please contact us via email directly.'
      );
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.identity,
          email: formData.email,
          message: formData.scope,
          subject: `Code Vertex Software | Web Message - New Inquiry from ${formData.identity}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(
          result.message ||
            'Transmission failed. Please try again or email us directly.'
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Protocol interrupted.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-page">
      <section
        style={{ padding: 'var(--section-padding) 0', paddingTop: '180px' }}
      >
        <div className="container">
          <div
            className="grid grid-2"
            style={{ gap: '8rem', alignItems: 'flex-start' }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-label">Get in Touch</span>
              <h1
                className="hero-title"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  lineHeight: '1.1',
                }}
              >
                Let's Build <br />
                <span className="accent-text">Something Great</span>
              </h1>
              <p
                className="text-text-secondary"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  marginTop: '2.5rem',
                  marginBottom: '4rem',
                  maxWidth: '550px',
                }}
              >
                Ready to start your next project? We're here to help you develop
                high-quality software that scales with your business.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '3rem',
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                      marginBottom: '1rem',
                      letterSpacing: '0.2em',
                    }}
                  >
                    EMAIL US
                  </h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                    support.codevertex@gmail.com
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                      marginBottom: '1rem',
                      letterSpacing: '0.2em',
                    }}
                  >
                    WHATSAPP
                  </h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                    +92 317 7760506
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                      marginBottom: '1rem',
                      letterSpacing: '0.2em',
                    }}
                  >
                    SOCIALS
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    {[
                      {
                        name: 'LinkedIn',
                        url: 'https://www.linkedin.com/company/codevertex-solutions/',
                      },
                      {
                        name: 'GitHub',
                        url: 'https://github.com/Code-Vertex',
                      },
                      {
                        name: 'Instagram',
                        url: 'https://www.instagram.com/codevertex_solutions/',
                      },
                      {
                        name: 'Facebook',
                        url: 'https://www.facebook.com/codevertexsolution/',
                      },
                      {
                        name: 'YouTube',
                        url: 'https://www.youtube.com/channel/UCxYATW_sz3dH2nBxot4Hamg',
                      },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="glass-card" style={{ padding: '4rem' }}>
              {!submitted ? (
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3rem',
                  }}
                  onSubmit={handleSubmit}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      Your Identity
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Engineering Lead / Company"
                      value={formData.identity}
                      onChange={(e) =>
                        setFormData({ ...formData, identity: e.target.value })
                      }
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid var(--card-border)',
                        padding: '1.2rem 0',
                        outline: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '1.1rem',
                        transition: 'border-color 0.3s ease',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      Signal Route (Email)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ops@enterprise.io"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid var(--card-border)',
                        padding: '1.2rem 0',
                        outline: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '1.1rem',
                        transition: 'border-color 0.3s ease',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      Architectural Scope
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your technical objectives..."
                      value={formData.scope}
                      onChange={(e) =>
                        setFormData({ ...formData, scope: e.target.value })
                      }
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid var(--card-border)',
                        padding: '1.2rem 0',
                        outline: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '1.1rem',
                        resize: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '1.5rem',
                      fontSize: '0.8rem',
                      marginTop: '1rem',
                      opacity: isSending ? 0.7 : 1,
                      cursor: isSending ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isSending
                      ? 'PROTOCOL INITIALIZING...'
                      : 'Initiate Secure Transfer'}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '4rem 0' }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'var(--accent-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      margin: '0 auto 2rem',
                      boxShadow: '0 0 30px var(--accent-glow)',
                    }}
                  >
                    ✓
                  </div>
                  <h2
                    style={{
                      fontSize: '2rem',
                      marginBottom: '1rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    Transfer <span className="accent-text">Initiated</span>
                  </h2>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                    }}
                  >
                    Our engineering team has received your signal. We will
                    review the architectural scope and coordinate a response
                    through your provided route.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                    style={{ marginTop: '3rem', padding: '1rem 3rem' }}
                  >
                    SEND ANOTHER SIGNAL
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
// Form submission handler
