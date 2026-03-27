import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Cpu, Layers, Search, LineChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Methodology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: 'Technical Consultation',
      id: '01',
      desc: 'Deep analysis of the business problem and existing infrastructure to define a clear technical roadmap.',
      icon: <Search size={32} />,
    },
    {
      title: 'Architectural Design',
      id: '02',
      desc: 'Defining the tech stack, data models, and cloud-scaling strategy using industry-leading patterns.',
      icon: <Layers size={32} />,
    },
    {
      title: 'Agile Implementation',
      id: '03',
      desc: 'Weekly sprints with continuous integration, unit testing, and stakeholder feedback loops.',
      icon: <Cpu size={32} />,
    },
    {
      title: 'Rigorous Validation',
      id: '04',
      desc: 'End-to-end testing, security penetration audits, and load testing to ensure production stability.',
      icon: <ShieldCheck size={32} />,
    },
    {
      title: 'Maintenance & Scale',
      id: '05',
      desc: 'Post-launch monitoring, routine security updates, and performance optimization for growing traffic.',
      icon: <LineChart size={32} />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.protocol-step').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="methodology-page" ref={sectionRef}>
      <section
        className="hero-section-padding"
        style={{ padding: 'var(--section-padding) 0' }}
      >
        <div className="container" style={{ maxWidth: '1000px' }}>
          <header style={{ marginBottom: '8rem', textAlign: 'center' }}>
            <span className="text-label">Expert Execution</span>
            <h1 className="section-title">
              Our <span className="accent-text">Deployment Protocol</span>
            </h1>
            <p
              className="text-text-secondary"
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                marginTop: '2rem',
              }}
            >
              We follow a strict, engineering-first methodology that turns
              ambitious ideas into stable, production-grade reality.
            </p>
          </header>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`glass-card protocol-step-grid protocol-step step-${i}`}
                style={{
                  padding: '4rem',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '4rem',
                  alignItems: 'center',
                }}
              >
                <div
                  className="protocol-step-number"
                  style={{
                    fontSize: 'clamp(3rem, 10vw, 4.5rem)',
                    fontWeight: 900,
                    opacity: 0.15,
                    color: 'var(--accent-primary)',
                    textAlign: 'center',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {step.id}
                </div>
                <div>
                  <div
                    className="protocol-step-header"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <span style={{ color: 'var(--accent-primary)' }}>
                      {step.icon}
                    </span>
                    <h3
                      style={{
                        fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.8',
                      fontSize: '1rem',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
        }}
        className="bg-tertiary"
      >
        <div className="container">
          <div
            className="grid grid-3"
            style={{ gap: '4rem', textAlign: 'center' }}
          >
            {[
              {
                title: 'Test-Driven',
                desc: 'Every feature is backed by rigorous unit and integration tests.',
              },
              {
                title: 'Clean Code',
                desc: 'Our codebase is modular, documented, and built for future developers.',
              },
              {
                title: 'Security-First',
                desc: 'Encryption and data protection are integrated into every layer.',
              },
            ].map((val, i) => (
              <div key={i}>
                <span
                  className="text-label"
                  style={{
                    marginBottom: '1rem',
                    padding: '0.4rem 1.2rem',
                    fontSize: '0.62rem',
                  }}
                >
                  {val.title}
                </span>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
