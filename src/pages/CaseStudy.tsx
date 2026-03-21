/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react';

const CaseStudy: React.FC = () => {
  const { id } = useParams();

  const projects: Record<string, any> = {
    '1': {
      title: 'BITEDASH',
      category: 'MERN WEB ECOSYSTEM',
      tagline: 'Full-Stack Food Delivery Orchestration',
      overview: 'BiteDash is a high-performance food delivery platform connecting restaurants and customers with real-time order tracking and menu management. Engineered with the MERN stack for global scalability.',
      challenge: 'Ensuring real-time state synchronization for order lifecycles and menu updates across thousands of concurrent users.',
      solution: 'Developed a robust Node.js backend with Socket.io for live signaling. Implemented a reactive React frontend with optimized context management.',
      clientBenefits: [
        'Real-time order tracking accuracy',
        'Scalable multi-restaurant networking',
        'Hardened transactional security',
        'Automated menu synchronization',
        'Sub-second user interaction',
        'Enterprise deployment readiness',
      ],
      features: [
        'Order Sync: Real-time lifecycle management',
        'Merchant Hub: Deep restaurant orchestration',
        'Customer Portal: Fluid menu browsing',
        'Payment Core: Integrated secure processing',
        'Delivery Pulse: Live rider telemetry',
        'Analytics: Data-driven business insights',
      ],
      results: [
        { label: 'Uptime', value: '99.9%' },
        { label: 'Latency', value: 'Sub-50ms' },
        { label: 'Scaling', value: 'Elastic' },
        { label: 'Arch', value: 'MERN' },
      ],
      timeline: '12 weeks',
      platforms: 'Responsive Web Application',
      images: ['https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2832&auto=format&fit=crop'],
    },
    '2': {
      title: 'TRANSPOPILOT',
      category: 'AI LOGISTICS CONSOLE',
      tagline: 'AI-Powered Fleet Management',
      overview: 'TranspoPilot is an advanced logistics solution leveraging AI for real-time operation monitoring, predictive route optimization, and high-precision fleet management.',
      challenge: 'Processing massive telemetry streams to provide meaningful, AI-driven insights for route efficiency.',
      solution: 'Built with Next.js and Supabase, integrated with specialized AI models for operational automation.',
      clientBenefits: [
        'Predictive route efficiency gains',
        'Real-time fleet visibility',
        'AI-driven operational alerts',
        'Automated audit reporting',
        'Resource load balancing',
        'Technical stability at scale',
      ],
      features: [
        'AI Core: Predictive route optimization',
        'Fleet Hub: Real-time signal ingestion',
        'Supabase Sync: Real-time data persistence',
        'Dashboard: High-fidelity telemetry view',
        'Alert System: AI-driven notifications',
        'Report Engine: Automated compliance logs',
      ],
      results: [
        { label: 'Efficiency', value: '+25%' },
        { label: 'Sync', value: 'Real-time' },
        { label: 'Accuracy', value: '98%' },
        { label: 'Stack', value: 'Next.js' },
      ],
      timeline: '18 weeks',
      platforms: 'Enterprise Web Portal',
      images: ['https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2940&auto=format&fit=crop'],
    },
    '3': {
      title: 'MEDIFY',
      category: 'HEALTHCARE SAAS',
      tagline: 'Scalable Healthcare Architecture',
      overview: 'Medify is a professional healthcare platform designed for clinical scalability, handling patient records, doctor scheduling, and medical workflows.',
      challenge: 'Maintaining complex medical data structures while ensuring zero-latency accessibility.',
      solution: 'Engineered with React and Node.js using a modular architecture for easy maintenance and scalability.',
      clientBenefits: [
        'Secure patient lifecycle sync',
        'Efficient doctor orchestration',
        'Clean architectural foundation',
        'Minimal technical overhead',
        'Automated clinical workflows',
        'Hardened data privacy',
      ],
      features: [
        'Doctor Hub: Unified clinical scheduling',
        'Patient Vault: Secure health record sync',
        'Admin Pulse: Clinic orchestration center',
        'API Core: High-speed integration layers',
        'Security Guard: Multi-level encryption',
        'Report Hub: Automated medical analytics',
      ],
      results: [
        { label: 'Reliability', value: '99.99%' },
        { label: 'Sync', value: 'Sub-second' },
        { label: 'UI Speed', value: 'Instant' },
        { label: 'Code', value: 'Modular' },
      ],
      timeline: '14 weeks',
      platforms: 'Professional Web SaaS',
      images: ['https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2944&auto=format&fit=crop'],
    },
    '4': {
      title: 'PAKCHAT',
      category: 'NATIVE ANDROID APP',
      tagline: 'High-Efficiency Social Connectivity',
      overview: 'PakChat is a native Android messaging application optimized for low-end devices and restricted network environments.',
      challenge: 'Maintaining reliable real-time messaging on slow mobile data connections.',
      solution: 'Developed using Java and Firebase Realtime Database with aggressive local caching protocols.',
      clientBenefits: [
        'Pakistan-optimized social sync',
        'Zero-lag messaging on low data',
        'Offline message persistence',
        'Low battery consumption',
        'Secure Firebase backend',
        'Native Android fluidity',
      ],
      features: [
        'Signal Hub: Real-time messaging',
        'Offline Sync: Local persistence',
        'Firebase Core: Secure Auth & DB',
        'Media Compressor: Optimized sync',
        'UI Engine: Native performance',
        'Push Guard: Reliable notifications',
      ],
      results: [
        { label: 'Data Save', value: '+40%' },
        { label: 'Sync', value: '<50ms' },
        { label: 'Battery', value: 'Optimized' },
        { label: 'Rating', value: '4.8/5' },
      ],
      timeline: '10 weeks',
      platforms: 'Native Android (Java)',
      images: ['https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2940&auto=format&fit=crop'],
    },
    '5': {
      title: 'ATMOS',
      category: 'NEXT.JS DASHBOARD',
      tagline: 'High-Performance Weather Dash',
      overview: 'Atmos is a professional weather dashboard providing live environmental data, air quality metrics, and predictive visualizations.',
      challenge: 'Aggregating multiple weather API streams into a unified visualization dashboard.',
      solution: 'Leveraged Next.js and TypeScript with Tailwind CSS for high-speed rendering.',
      clientBenefits: [
        'Live weather telemetry accuracy',
        'Highly responsive data visuals',
        '7-day predictive insights',
        'Global location discovery',
        'Sub-second dashboard sync',
        'Technical precision',
      ],
      features: [
        'Pulse Hub: Live environmental polling',
        'Model Engine: Predictive visuals',
        'Geo Sync: Multi-location tracking',
        'Visual Core: React-based charts',
        'Alert Pulse: Real-time signals',
        'Export Hub: Historical snapshots',
      ],
      results: [
        { label: 'Rendering', value: 'Sub-100ms' },
        { label: 'Accuracy', value: 'High Precision' },
        { label: 'Fidelity', value: 'Premium' },
        { label: 'Stack', value: 'Next.js' },
      ],
      timeline: '8 weeks',
      platforms: 'Next.js Web Application',
      images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop'],
    },
    '6': {
      title: 'CUREVIRTUAL',
      category: 'MERN HEALTHCARE',
      tagline: 'Virtual Consultation ecosystem',
      overview: 'CureVirtual is a comprehensive healthcare platform connecting patients with doctors for real-time virtual consultations.',
      challenge: 'Developing a stable, secure real-time signaling layer for patient-doctor communications.',
      solution: 'Engineered with the MERN stack and Socket.io for live signaling.',
      clientBenefits: [
        'Seamless virtual consultations',
        'Real-time prescription delivery',
        'Hardened patient data privacy',
        'Effortless doctor scheduling',
        'Sub-second signaling layers',
        'Mobile-ready responsiveness',
      ],
      features: [
        'Signal Core: Real-time consultations',
        'Prescription Hub: Digital links',
        'Patient Hub: Electronic records',
        'Schedule Engine: Automated slots',
        'Payment Vault: Secure transactions',
        'Resource Center: Patient portal',
      ],
      results: [
        { label: 'Signaling', value: 'Real-time' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Capacity', value: 'Enterprise' },
        { label: 'UI/UX', value: 'Healthcare Grade' },
      ],
      timeline: '16 weeks',
      platforms: 'MERN Web Platform',
      images: ['https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2944&auto=format&fit=crop'],
    },
    '7': {
      title: 'STOCKPRO',
      category: 'JAVA DESKTOP ERP',
      tagline: 'Professional Inventory Orchestration',
      overview: 'StockPro is a robust Java Swing desktop application designed for high-precision inventory management and sales tracking.',
      challenge: 'Creating a zero-latency desktop environment for managing massive local datasets.',
      solution: 'Built with a high-performance Java core using JDBC and MySQL.',
      clientBenefits: [
        'Offline system resilience',
        'Zero-latency data interactions',
        'Automated fiscal reporting',
        'Secure local data persistence',
        'Professional admin control',
        'Mission-critical stability',
      ],
      features: [
        'Inventory Hub: Stock orchestration',
        'Report Engine: Automated auditing',
        'Employee Core: Personnel records',
        'Fiscal Pulse: Sales tracking',
        'Database Sync: JDBC pipelines',
        'Security Vault: Multi-level RBAC',
      ],
      results: [
        { label: 'Latency', value: 'Zero' },
        { label: 'Stability', value: 'Industrial' },
        { label: 'Data', value: 'SQL Driven' },
        { label: 'Stack', value: 'Java / Swing' },
      ],
      timeline: '12 weeks',
      platforms: 'Secure Desktop Console',
      images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop'],
    },
    '8': {
      title: 'RIDESHARE',
      category: 'NATIVE ANDROID APP',
      tagline: 'Real-Time Mobility Orchestration',
      overview: 'RideShare is a native Android mobility application featuring real-time GPS tracking and driver-rider matching.',
      challenge: 'Orchestrating complex real-time locations across thousands of nodes.',
      solution: 'Developed with Java and Google Maps API, using Firebase for real-time signaling.',
      clientBenefits: [
        'Sub-second location sync',
        'Accurate fare orchestration',
        'Native-grade user experience',
        'Secure driver verification',
        'Real-time mobility telemetry',
        'Technical scalability',
      ],
      features: [
        'Mapping Core: Maps orchestration',
        'Fare Engine: Predictive modeling',
        'Sync Hub: Driver telemetry',
        'Handshake Core: Secure matching',
        'Notification Pulse: Instant alerts',
        'Payment Link: Session billing',
      ],
      results: [
        { label: 'Tracking', value: 'Real-time' },
        { label: 'Latency', value: 'Sub-50ms' },
        { label: 'Arch', value: 'Native Java' },
        { label: 'Rating', value: '4.9/5' },
      ],
      timeline: '20 weeks',
      platforms: 'Native Android Mobile',
      images: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2944&auto=format&fit=crop'],
    },
    '9': {
      title: 'CLINICCORE',
      category: 'JAVA DESKTOP ERP',
      tagline: 'Enterprise Medical Orchestration',
      overview: 'ClinicCore is a professional JavaFX-based desktop application for managing comprehensive hospital operations.',
      challenge: 'Consolidating medical data streams into a unified, secure command center.',
      solution: 'Built with JavaFX and MySQL, focusing on relational data integrity.',
      clientBenefits: [
        'Centralized medical command',
        'Hardened session security',
        'Zero-error clinical booking',
        'Persistent medical history',
        'High-speed clinical reporting',
        'Mission-critical reliability',
      ],
      features: [
        'Patient Hub: History records',
        'Schedule Core: JavaFX dashboard',
        'Doctor Sync: Session auditing',
        'Billing Pulse: Fiscal records',
        'Auth Vault: Clinical security',
        'Persistence Core: JDBC layers',
      ],
      results: [
        { label: 'Handling', value: 'High Capacity' },
        { label: 'Security', value: 'Hardened' },
        { label: 'Stability', value: 'JavaFX Core' },
        { label: 'Sync', value: 'Atomic' },
      ],
      timeline: '16 weeks',
      platforms: 'Secure Desktop Application',
      images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop'],
    },
  };

  const project = projects[id || '1'] || projects['1'];

  return (
    <div className="case-study-page">
      <section style={{ padding: '120px 0 60px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-label">Case Study {id?.padStart(2, '0')}</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>{project.title}</h1>
            <p style={{ fontSize: '1.4rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{project.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Clock size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>TIMELINE</h4>
              <p style={{ fontWeight: 700 }}>{project.timeline}</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Zap size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>PLATFORMS</h4>
              <p style={{ fontWeight: 700 }}>{project.platforms}</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Shield size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>STATUS</h4>
              <p style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>Live</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="section-title">Overview</h2>
              <p className="text-text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{project.overview}</p>
            </div>
            <div className="glass-card" style={{ padding: 0, height: '400px', overflow: 'hidden' }}>
              <img src={project.images[0]} alt={project.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <div>
              <h3 className="accent-text" style={{ marginBottom: '1.5rem' }}>Challenge</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{project.challenge}</p>
            </div>
            <div>
              <h3 className="accent-text" style={{ marginBottom: '1.5rem' }}>Solution</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Key Features</h2>
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {project.features.map((f: string, i: number) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <CheckCircle size={20} style={{ color: 'var(--accent-primary)' }} />
                <p>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Results</h2>
          <div className="grid grid-4" style={{ gap: '1.5rem' }}>
            {project.results.map((r: any, i: number) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <TrendingUp size={24} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{r.value}</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
            <h2 className="section-title">Ready to scale?</h2>
            <p style={{ margin: '2rem auto 3rem', maxWidth: '600px' }}>Contact our technical team for a detailed consultation.</p>
            <a 
              href={`https://wa.me/923177760506?text=${encodeURIComponent(`Hello, I'm interested in ${project.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex', flexDirection: 'column', height: 'auto', gap: '0.4rem', padding: '1.5rem 3rem' }}
            >
              <span>SCHEDULE CONSULTATION</span>
              <span style={{ fontSize: '0.65rem', opacity: 0.8, fontWeight: 400 }}>Get more information via chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
