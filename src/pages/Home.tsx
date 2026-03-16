import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TechStrip from '../components/home/TechStrip';
import ProcessSection from '../components/home/ProcessSection';
import ValueProps from '../components/home/ValueProps';
import FeaturedWork from '../components/FeaturedWork';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  useEffect(() => {
    // Premium reveal for section headers
    gsap.utils.toArray('.section-reveal').forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <>
      <Hero />

      <TechStrip />

      {/* Unique Home Content */}
      <ValueProps />

      {/* Engineering Excellence Section */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <header className="section-reveal" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="text-label">Our Philosophy</span>
            <h2 className="section-title">
              Engineering <span className="accent-text">Excellence</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{ maxWidth: '600px', margin: '1.5rem auto 0' }}
            >
              We focus on building scalable, maintainable, and high-performance technical foundations
              that empower modern businesses to lead.
            </p>
          </header>

          <div className="grid grid-3" style={{ gap: '30px' }}>
            {[
              {
                title: 'High Performance',
                desc: 'Sub-second response times and optimized asset delivery for a seamless, conversion-driven user experience.'
              },
              {
                title: 'Clean Architecture',
                desc: 'Modular, well-documented codebases built on industry-leading design patterns for long-term scalability.'
              },
              {
                title: 'Hardened Security',
                desc: 'Production-grade security protocols integrated into every development sprint to safeguard your digital assets.'
              }
            ].map((value, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: '3rem', textAlign: 'center' }}
              >
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{value.title}</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deployments */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-primary)',
        }}
      >
        <div className="container">
          <header className="section-reveal" style={{ marginBottom: '8rem', textAlign: 'center' }}>
            <span className="text-label">Case Studies</span>
            <h2 className="section-title">
              Strategic <span className="accent-text">Technical Wins</span>
            </h2>
          </header>

          <FeaturedWork />
        </div>
      </section>

      {/* Deployment Process */}
      <ProcessSection />

      {/* CTA Section */}
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div
            className="glass-card section-reveal"
            style={{
              padding: '6rem',
              textAlign: 'center',
              background:
                'linear-gradient(135deg, rgba(255, 195, 0, 0.05) 0%, rgba(0, 207, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 195, 0, 0.2)',
            }}
          >
            <h2 className="hero-title" style={{ fontSize: '4rem' }}>
              RE-ENGINEER YOUR <br />
              <span className="accent-text">FUTURE</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '600px',
                margin: '2rem auto 4rem',
                fontSize: '1.25rem',
              }}
            >
              Join the elite businesses scaling with Code Vertex's
              high-performance architectures. Start your technical audit
              today.
            </p>
            <div
              className="cta-buttons"
              style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}
            >
              <button
                onClick={() => {
                  window.location.href = '/contact';
                  window.scrollTo(0, 0);
                }}
                className="btn btn-primary"
              >
                INITIATE PROPOSAL
              </button>
              <button
                onClick={() => {
                  window.location.href = '/methodology';
                  window.scrollTo(0, 0);
                }}
                className="btn btn-outline"
              >
                OUR METHODOLOGY
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
