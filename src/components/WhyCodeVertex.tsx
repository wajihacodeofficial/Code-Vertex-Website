import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatCounter = ({
  value,
  label,
  suffix = '',
}: {
  value: number;
  label: string;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center group">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-heading font-bold mb-2 text-accent-gradient group-hover:scale-110 transition-transform duration-300"
      >
        {isInView ? value : 0}
        {suffix}
      </motion.div>
      <p className="text-sm font-bold uppercase tracking-widest text-text-secondary">
        {label}
      </p>
    </div>
  );
};

const WhyCodeVertex: React.FC = () => {
  return (
    <section className="section-padding bg-secondary relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Built for{' '}
              <span className="text-accent-primary">Scale & Stability</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
              We deliver software that solves complex business problems. 
              Code Vertex is your dedicated engineering partner for building 
              resilient, maintainable, and high-performance digital infrastructure.
            </p>
            <div className="space-y-6">
              {[
                'Hardened Enterprise Foundations',
                'User-Centric Architecture Focus',
                'End-to-End Technical Support',
                'Clean & Scalable Codebases',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 glass p-12 rounded-3xl border border-border-color">
            <StatCounter value={12} label="Expert Sprints" suffix="+" />
            <StatCounter value={4} label="Modern Tech Stacks" />
            <StatCounter value={2} label="Expert Architects" />
            <StatCounter value={24} label="Uptime Monitoring" suffix="/7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCodeVertex;
