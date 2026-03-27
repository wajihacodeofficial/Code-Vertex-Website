import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <span
            className="font-bold uppercase tracking-[0.4em] block mb-6"
            style={{ color: 'var(--accent-primary)', fontSize: '10px' }}
          >
            Ready to Scale?
          </span>
          <h2 className="section-title mb-10">
            Initiate <br />
            Development
          </h2>

          <div className="glass-card text-left">
            <form
              action="https://formsubmit.co/contact@codevertex.solutions"
              method="POST"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {/* CONFIG */}
              <input type="hidden" name="_cc" value="wajiha.codeofficial@gmail.com,rehancodeofficial@gmail.com" />
              <input type="hidden" name="_subject" value="New Protocol Initiation — Code Vertex" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                required
                placeholder="NAME"
                className="bg-transparent"
                style={{
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  padding: '1rem',
                  outline: 'none',
                  color: 'white',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                }}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="EMAIL"
                className="bg-transparent"
                style={{
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  padding: '1rem',
                  outline: 'none',
                  color: 'white',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                }}
              />
              <textarea
                name="message"
                required
                placeholder="PROJECT SCOPE"
                rows={4}
                style={{
                  gridColumn: 'span 2',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  padding: '1rem',
                  outline: 'none',
                  color: 'white',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  resize: 'none',
                }}
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ gridColumn: 'span 2', marginTop: '1.5rem' }}
              >
                Send Protocol
              </button>
            </form>
          </div>

          <footer
            className="flex justify-between items-center"
            style={{
              marginTop: '5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5em',
              color: 'var(--text-muted)',
            }}
          >
            <span>© 2026 CODE VERTEX</span>
            <div
              className="flex gap-4"
              style={{ display: 'flex', gap: '2rem' }}
            >
              <a
                href="https://www.linkedin.com/company/codevertex-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Code-Vertex"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Github
              </a>
            </div>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
