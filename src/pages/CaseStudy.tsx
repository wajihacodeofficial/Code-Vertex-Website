import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react';

const CaseStudy: React.FC = () => {
  const { id } = useParams();

  // Client-focused case studies with comprehensive business details
  const projects: Record<string, any> = {
    '1': {
      title: 'BITEDASH',
      category: 'FOOD DELIVERY PLATFORM',
      tagline: 'Revolutionizing Multi-Restaurant Food Delivery',
      overview:
        'BiteDash is a comprehensive food delivery management platform that connects restaurants, customers, and delivery drivers in a seamless ecosystem. Built for scalability and real-time performance, it handles everything from order placement to delivery tracking.',
      challenge:
        'The client needed a robust platform to manage multiple restaurants simultaneously while providing real-time order tracking, automated kitchen notifications, and seamless payment processing. The system had to handle peak hours with thousands of concurrent users without performance degradation.',
      solution:
        'We designed and deployed a full-stack web application with real-time WebSocket integration, enabling instant order updates across all stakeholders. The platform features an intelligent order routing system, automated kitchen display integration, and a comprehensive admin dashboard for multi-location management.',
      clientBenefits: [
        'Real-time order tracking with live map integration',
        'Automated kitchen notification system reducing prep time by 30%',
        'Multi-restaurant management from a single dashboard',
        'Integrated payment processing with Stripe and local gateways',
        'Advanced analytics for sales, customer behavior, and delivery performance',
        'Mobile-responsive design for customers on any device',
      ],
      features: [
        'Customer Web Portal: Browse menus, place orders, track deliveries',
        'Restaurant Dashboard: Manage menu, inventory, and incoming orders',
        'Driver App Integration: Real-time dispatch and route optimization',
        'Admin Panel: Complete oversight of all operations and analytics',
        'Automated Email/SMS notifications for order status',
        'Multi-language and multi-currency support',
      ],
      results: [
        { label: 'Order Processing Speed', value: 'Sub-second response time' },
        { label: 'Daily Orders Handled', value: '4,000+ across 12 locations' },
        { label: 'Customer Satisfaction', value: '4.8/5 average rating' },
        { label: 'System Uptime', value: '99.99% availability' },
      ],
      timeline: '12 weeks from concept to launch',
      platforms: 'Web Application (Desktop & Mobile Responsive)',
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2832&auto=format&fit=crop', // Main food delivery image
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop', // Desktop view
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2944&auto=format&fit=crop', // Mobile responsive
      ],
    },
    '2': {
      title: 'MEDIFY',
      category: 'PHARMACY MANAGEMENT SYSTEM',
      tagline: 'Intelligent Healthcare Inventory Management',
      overview:
        'Medify is a comprehensive pharmacy management solution that automates inventory tracking, prescription management, and regulatory compliance. Designed for modern pharmacies, it reduces operational overhead while ensuring medication safety and availability.',
      challenge:
        'Manual inventory management was causing critical stockouts, medication expiration waste, and compliance risks. The pharmacy needed an intelligent system that could predict demand, automate reordering, and maintain complete audit trails for regulatory requirements.',
      solution:
        'We developed a web-based management system with predictive inventory analytics, automated procurement workflows, and integrated POS functionality. The system includes barcode scanning, expiry tracking, and complete prescription management with patient history.',
      clientBenefits: [
        'Automated inventory reordering based on consumption patterns',
        'Real-time stock alerts and expiry notifications',
        'Complete prescription history and patient record management',
        'Integrated billing system with insurance claim processing',
        'Regulatory compliance reports generated automatically',
        'Multi-branch inventory synchronization',
      ],
      features: [
        'Smart Inventory System: Auto-reorder, expiry tracking, batch management',
        'Prescription Management: Digital records with doctor verification',
        'POS Integration: Fast checkout with multiple payment options',
        'Patient Portal: Prescription refills and order history online',
        'Analytics Dashboard: Sales trends, popular medications, profit margins',
        'Supplier Management: Automated purchase orders and invoice tracking',
      ],
      results: [
        {
          label: 'Inventory Waste Reduction',
          value: '40% decrease in expired stock',
        },
        {
          label: 'Procurement Efficiency',
          value: '3x faster ordering process',
        },
        { label: 'Accuracy Rate', value: '99.8% in stock management' },
        { label: 'Time Saved', value: '15+ hours per week in admin tasks' },
      ],
      timeline: '10 weeks development + 2 weeks training',
      platforms: 'Web Application (Desktop & Tablet Optimized)',
      images: [
        'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2944&auto=format&fit=crop', // Pharmacy/medical
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop', // Dashboard view
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2944&auto=format&fit=crop', // Tablet usage
      ],
    },
    '3': {
      title: 'CLINIC MANAGEMENT SYSTEM',
      category: 'HEALTHCARE DIGITAL PLATFORM',
      tagline: 'Streamlining Patient Care Operations',
      overview:
        'A complete digital healthcare solution designed for multi-specialty clinics. This system manages patient registration, appointment scheduling, electronic medical records, billing, and reporting in one unified platform.',
      challenge:
        'The clinic was operating with disconnected legacy systems causing patient data fragmentation, long wait times, and billing errors. They needed a centralized solution that would improve patient experience while reducing administrative burden.',
      solution:
        'We built an integrated clinic management platform with real-time appointment scheduling, electronic health records (EHR), and automated billing workflows. The system includes patient portals, doctor dashboards, and comprehensive reporting for administrators.',
      clientBenefits: [
        'Unified patient records accessible across departments',
        'Online appointment booking reducing phone call volume',
        'Automated insurance verification and claim processing',
        'Digital prescription generation with pharmacy integration',
        'Complete audit trail for regulatory compliance',
        'Patient engagement through SMS reminders and follow-ups',
      ],
      features: [
        'Patient Portal: Book appointments, view records, download prescriptions',
        'Doctor Dashboard: Access patient history, write digital prescriptions',
        'Reception Module: Quick check-in, appointment management, billing',
        'Laboratory Integration: Test orders and results tracking',
        'Pharmacy Integration: E-prescription forwarding',
        'Financial Reports: Revenue, insurance claims, outstanding payments',
      ],
      results: [
        { label: 'Wait Time Reduction', value: '60% decrease in average wait' },
        { label: 'Data Accuracy', value: '100% with digital records' },
        {
          label: 'Patient Throughput',
          value: '50% increase in daily capacity',
        },
        { label: 'Billing Errors', value: '95% reduction in mistakes' },
      ],
      timeline: '14 weeks including data migration',
      platforms: 'Web Application (Cross-device Responsive)',
      images: [
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2944&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2940&auto=format&fit=crop',
      ],
    },
    '4': {
      title: 'E-COMMERCE PLATFORM',
      category: 'ONLINE RETAIL SOLUTION',
      tagline: 'Next-Generation Digital Marketplace',
      overview:
        'A scalable e-commerce platform built for high-volume retail operations. Features include advanced product catalog management, personalized shopping experiences, multi-vendor support, and comprehensive order fulfillment tracking.',
      challenge:
        "The client's previous platform crashed during peak sales events, losing thousands in revenue. They needed a robust system that could handle traffic spikes, provide personalized recommendations, and integrate with their existing warehouse management system.",
      solution:
        'We architected a microservices-ready e-commerce platform with horizontal scaling capabilities, intelligent caching, and real-time inventory synchronization. The platform includes AI-powered product recommendations, advanced search, and seamless payment gateway integration.',
      clientBenefits: [
        'Handles 10,000+ concurrent users without performance issues',
        'AI-powered product recommendations increasing average order value',
        'Real-time inventory sync preventing overselling',
        'Multiple payment gateway options (Stripe, PayPal, local banks)',
        'Automated order fulfillment and shipment tracking',
        'Customer loyalty program with points and rewards',
      ],
      features: [
        'Customer Experience: Advanced search, wish lists, one-click checkout',
        'Vendor Dashboard: Product management, sales analytics, payouts',
        'Admin Control: User management, promotions, comprehensive analytics',
        'Mobile Shopping: Fully responsive design for mobile commerce',
        'Email Marketing: Automated campaigns for cart abandonment, promotions',
        'Multi-currency and Multi-language Support',
      ],
      results: [
        { label: 'Conversion Rate Increase', value: '35% improvement' },
        { label: 'Page Load Time', value: '800ms average' },
        { label: 'Peak Capacity', value: '10,000+ concurrent users' },
        { label: 'Revenue Growth', value: '2.5x in first year' },
      ],
      timeline: '16 weeks full platform development',
      platforms: 'Web Application (Desktop, Tablet, Mobile Responsive)',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', // Desktop analytics
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop', // Mobile shopping
      ],
    },
    '5': {
      title: 'LMS PLATFORM',
      category: 'LEARNING MANAGEMENT SYSTEM',
      tagline: 'Interactive Education for the Digital Age',
      overview:
        'An immersive learning management system designed for educational institutions and corporate training. Features include video lessons, interactive quizzes, progress tracking, certifications, and live virtual classrooms.',
      challenge:
        'Static course content was failing to engage students, resulting in high dropout rates. The institution needed an interactive platform with multimedia support, real-time assessments, and detailed analytics to track student progress and identify struggling learners.',
      solution:
        'We created a dynamic LMS with video streaming, interactive assessments, gamification elements, and AI-powered progress tracking. The platform includes live class integration, discussion forums, and automated certificate generation upon course completion.',
      clientBenefits: [
        'Interactive content with videos, quizzes, and assignments',
        'Live virtual classroom integration (Zoom/Google Meet)',
        'Automated grading and instant feedback on assessments',
        'Personalized learning paths based on student performance',
        'Download certificates and course completion badges',
        'Mobile app for learning on the go',
      ],
      features: [
        'Course Builder: Drag-and-drop content creation with multimedia',
        'Student Portal: Access courses, track progress, earn certificates',
        'Instructor Dashboard: Grade assignments, view analytics, message students',
        'Discussion Forums: Peer-to-peer learning and Q&A',
        'Quiz Engine: Multiple question types with auto-grading',
        'Analytics: Course completion rates, student engagement metrics',
      ],
      results: [
        { label: 'Student Engagement', value: '120% increase' },
        { label: 'Course Completion', value: '85% vs 45% previously' },
        { label: 'Student Retention', value: '40% improvement' },
        { label: 'Instructor Efficiency', value: '60% time saved on grading' },
      ],
      timeline: '12 weeks platform development',
      platforms: 'Web Application (Fully Responsive across all devices)',
      images: [
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2832&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2940&auto=format&fit=crop',
      ],
    },
    '6': {
      title: 'ON-DEMAND SERVICE APP',
      category: 'GIG ECONOMY MARKETPLACE',
      tagline: 'Connecting Service Providers with Customers',
      overview:
        'A location-based mobile application that connects customers with on-demand service providers for home repairs, cleaning, beauty services, and more. Real-time matching, route optimization, and secure payments create a seamless experience.',
      challenge:
        'The client needed a scalable solution to match service providers with customers based on location, availability, and ratings. The system required real-time tracking, secure payment processing, and dispute resolution mechanisms.',
      solution:
        'Built with Flutter for cross-platform consistency, the app uses Firebase for real-time geospatial queries and instant notifications. We implemented an intelligent matching algorithm, in-app chat, and a comprehensive rating system.',
      clientBenefits: [
        'Real-time GPS tracking for service transparency',
        'Automated matching based on location and availability',
        'Secure in-app payments with escrow protection',
        'Two-way rating system ensuring quality',
        'In-app messaging for customer-provider communication',
        'Dispute resolution and refund management',
      ],
      features: [
        'Customer App: Browse services, book providers, track in real-time',
        'Provider App: Accept jobs, navigation, earnings dashboard',
        'Admin Panel: User management, dispute resolution, analytics',
        'Payment Processing: Multiple options including wallet, cards, cash',
        'Push Notifications: Job updates, messages, promotional offers',
        'Background Verification: Automated checks for service providers',
      ],
      results: [
        { label: 'Match Time', value: 'Under 5 seconds' },
        { label: 'Provider Churn', value: '30% reduction' },
        { label: 'Customer Rating', value: '4.8/5 average' },
        { label: 'Monthly Bookings', value: '15,000+ transactions' },
      ],
      timeline: '14 weeks mobile app development',
      platforms: 'iOS & Android (Native Flutter)',
      images: [
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2944&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2944&auto=format&fit=crop',
      ],
    },
    '7': {
      title: 'FINANCE TRACKER',
      category: 'PERSONAL WEALTH MANAGEMENT',
      tagline: 'Smart Financial Insights at Your Fingertips',
      overview:
        'A personal finance mobile app that helps users track expenses, categorize spending, set budgets, and visualize financial health through interactive charts and AI-powered insights.',
      challenge:
        'Users struggled to understand spending patterns due to manual tracking and complex bank statements. They needed an automated solution that could categorize transactions, provide actionable insights, and help achieve savings goals.',
      solution:
        'We developed an intelligent finance tracker with automated transaction categorization, customizable budgets, and visual analytics. The app includes receipt scanning, bank sync capabilities, and personalized saving recommendations.',
      clientBenefits: [
        'Automatic transaction categorization using AI',
        'Visual spending analytics with charts and trends',
        'Budget tracking with real-time alerts',
        'Receipt scanning and digital storage',
        'Goal setting with progress tracking',
        'Export reports for tax purposes',
      ],
      features: [
        'Expense Tracking: Add transactions manually or auto-sync with banks',
        'Budget Management: Set category budgets with overspending alerts',
        'Visual Analytics: Interactive charts showing spending patterns',
        'Bill Reminders: Never miss a payment with smart notifications',
        'Multi-account Support: Track checking, savings, credit cards',
        'Data Export: CSV/PDF reports for accountants',
      ],
      results: [
        { label: 'User Savings Increase', value: '15% average improvement' },
        { label: 'Daily Active Users', value: '25% growth rate' },
        { label: 'Transaction Processing', value: 'Under 20ms parsing' },
        { label: 'User Retention', value: '78% after 3 months' },
      ],
      timeline: '8 weeks mobile app development',
      platforms: 'iOS & Android (Flutter)',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2944&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop',
      ],
    },
    '8': {
      title: 'CLOUD KITCHEN MANAGER',
      category: 'FOOD TECH OPERATIONS',
      tagline: 'Optimizing Ghost Kitchen Operations',
      overview:
        'A specialized kitchen management system built for cloud kitchens operating multiple brands from a single location. Real-time order synchronization, kitchen display systems, and inventory management streamline operations.',
      challenge:
        'Managing multiple brand orders simultaneously led to kitchen chaos, missed orders, and food waste. The client needed a system to synchronize orders from various aggregators, optimize prep workflows, and track inventory across brands.',
      solution:
        'We built a real-time kitchen display system with Socket.io for instant order sync from Uber Eats, DoorDash, and other platforms. The system includes intelligent order routing, prep time tracking, and cross-brand inventory management.',
      clientBenefits: [
        'Unified dashboard for all delivery platform orders',
        'Real-time kitchen display with priority sorting',
        'Automated prep time estimates and staff alerts',
        'Cross-brand inventory tracking and alerts',
        'Performance analytics for each virtual brand',
        'Integration with existing POS systems',
      ],
      features: [
        'Order Aggregation: All platforms in one unified view',
        'Kitchen Display: Large screen with color-coded priorities',
        'Prep Tracking: Time stamps and performance metrics',
        'Inventory Management: Real-time stock levels across brands',
        'Menu Sync: Update menus across all platforms simultaneously',
        'Analytics Dashboard: Sales by brand, peak hours, popular items',
      ],
      results: [
        { label: 'Prep Time Reduction', value: '25% faster kitchen flow' },
        { label: 'Order Accuracy', value: '99.5% error-free' },
        { label: 'Sync Speed', value: 'Under 10ms order display' },
        { label: 'Food Waste', value: '18% reduction' },
      ],
      timeline: '10 weeks including integrations',
      platforms: 'Mobile App + Web Dashboard + Kitchen Display',
      images: [
        'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2832&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2944&auto=format&fit=crop',
      ],
    },
    '9': {
      title: 'ORGANIZER PRO',
      category: 'PRODUCTIVITY SUITE',
      tagline: 'All-in-One Workspace for Power Users',
      overview:
        'A desktop productivity application that combines task management, note-taking, calendar integration, and project planning in a unified workspace. Built with Electron for cross-platform consistency and offline capability.',
      challenge:
        'Creative professionals and teams were juggling multiple web applications, leading to context switching, lost productivity, and fragmented workflows. They needed a unified solution that works offline and integrates with popular services.',
      solution:
        'We developed a desktop-first productivity suite with offline support, cloud sync, and deep integration with Google Calendar, GitHub, and Slack. The app features a customizable workspace, keyboard shortcuts, and data export capabilities.',
      clientBenefits: [
        'Unified workspace reducing app switching',
        'Offline-first with cloud synchronization',
        'Integration with Google Calendar, GitHub, Slack',
        'Customizable layouts and themes',
        'Keyboard shortcuts for power users',
        'Data export in multiple formats (CSV, JSON, PDF)',
      ],
      features: [
        'Task Management: Kanban boards, lists, tags, due dates',
        'Note Taking: Rich text editor with markdown support',
        'Calendar: Sync with Google/Outlook calendars',
        'Project Planning: Gantt charts and milestones',
        'Time Tracking: Built-in timer with reports',
        'Search: Lightning-fast full-text search across all data',
      ],
      results: [
        { label: 'Task Completion', value: '30% increase' },
        { label: 'Context Switching', value: '50% reduction' },
        { label: 'Memory Usage', value: '40% lower than browser tabs' },
        { label: 'User Satisfaction', value: '4.7/5 rating' },
      ],
      timeline: '12 weeks desktop app development',
      platforms: 'Windows, macOS, Linux (Electron)',
      images: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2944&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop',
      ],
    },
    '10': {
      title: 'HRMS ENTERPRISE',
      category: 'HUMAN RESOURCE MANAGEMENT',
      tagline: 'Complete Workforce Management Solution',
      overview:
        'An enterprise-grade HR management system handling employee lifecycles from recruitment to retirement. Features include payroll processing, attendance tracking, leave management, performance reviews, and compliance reporting.',
      challenge:
        'A growing organization was managing HR through spreadsheets, leading to payroll errors, compliance risks, and inefficient processes. They needed a secure, centralized system with role-based access and audit trails.',
      solution:
        'We architected a secure enterprise HRMS with Spring Boot backend and React frontend. The system includes biometric attendance integration, automated payroll calculation, and comprehensive reporting for regulatory compliance.',
      clientBenefits: [
        'Automated payroll with tax calculations and deductions',
        'Biometric attendance integration',
        'Self-service portal for employees',
        'Leave management with approval workflows',
        'Performance review and goal tracking',
        'Compliance reports for labor laws',
      ],
      features: [
        'Employee Management: Complete profiles with document storage',
        'Payroll Processing: Automated salary calculation with tax compliance',
        'Attendance System: Biometric integration with shift management',
        'Leave Tracker: Request, approve, and track all leave types',
        'Performance Module: 360° reviews and KPI tracking',
        'Reports: Custom reports for management and compliance',
      ],
      results: [
        { label: 'Payroll Errors', value: '0% with automation' },
        { label: 'Admin Time Saved', value: '70% reduction' },
        { label: 'Compliance Audits', value: '100% pass rate' },
        { label: 'Employee Satisfaction', value: '40% improvement' },
      ],
      timeline: '16 weeks including migration',
      platforms: 'Web Application (Enterprise Desktop & Mobile)',
      images: [
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2944&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2944&auto=format&fit=crop',
      ],
    },
  };

  const project = projects[id || '1'] || projects['1'];

  return (
    <div className="case-study-page">
      {/* Hero Section */}
      <section
        style={{
          padding: '180px 0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label">
              Case Study {id?.padStart(2, '0')}
            </span>
            <h1
              className="hero-title"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                marginBottom: '1rem',
              }}
            >
              {project.title}
            </h1>
            <p
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                marginBottom: '2rem',
              }}
            >
              {project.tagline}
            </p>
            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.4em',
                }}
              >
                {project.category}
              </span>
              <div
                style={{
                  height: '1px',
                  flex: 1,
                  background: 'var(--card-border)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            <div
              className="glass-card"
              style={{ padding: '2rem', textAlign: 'center' }}
            >
              <Clock
                size={32}
                style={{
                  color: 'var(--accent-primary)',
                  margin: '0 auto 1rem',
                }}
              />
              <h4
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.2em',
                }}
              >
                TIMELINE
              </h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                {project.timeline}
              </p>
            </div>
            <div
              className="glass-card"
              style={{ padding: '2rem', textAlign: 'center' }}
            >
              <Zap
                size={32}
                style={{
                  color: 'var(--accent-primary)',
                  margin: '0 auto 1rem',
                }}
              />
              <h4
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.2em',
                }}
              >
                PLATFORMS
              </h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                {project.platforms}
              </p>
            </div>
            <div
              className="glass-card"
              style={{ padding: '2rem', textAlign: 'center' }}
            >
              <Users
                size={32}
                style={{
                  color: 'var(--accent-primary)',
                  margin: '0 auto 1rem',
                }}
              />
              <h4
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.2em',
                }}
              >
                STATUS
              </h4>
              <p
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                }}
              >
                Live & Operational
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview & Images */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div
            className="grid grid-2"
            style={{ gap: '6rem', alignItems: 'center' }}
          >
            <div>
              <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
                Project <span className="accent-text">Overview</span>
              </h2>
              <p
                className="text-text-secondary"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  margin: '2rem 0',
                }}
              >
                {project.overview}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: 0, height: '500px', overflow: 'hidden' }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <div className="grid grid-2" style={{ gap: '8rem' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
                The <span className="accent-text">Challenge</span>
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                }}
              >
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
                Our <span className="accent-text">Solution</span>
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                }}
              >
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <h2
            className="section-title"
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            Client <span className="accent-text">Benefits</span>
          </h2>
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {project.clientBenefits.map((benefit: string, i: number) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: '2rem', display: 'flex', gap: '1.5rem' }}
              >
                <CheckCircle
                  size={24}
                  style={{ color: 'var(--accent-primary)', flexShrink: 0 }}
                />
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.6',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <h2
            className="section-title"
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            Key <span className="accent-text">Features</span>
          </h2>
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {project.features.map((feature: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: '2.5rem' }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--accent-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.2rem',
                    fontWeight: 900,
                  }}
                >
                  {i + 1}
                </div>
                <p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <h2
            className="section-title"
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            Measurable <span className="accent-text">Results</span>
          </h2>
          <div className="grid grid-4" style={{ gap: '2rem' }}>
            {project.results.map((m: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: '3rem 2rem', textAlign: 'center' }}
              >
                <TrendingUp
                  size={32}
                  style={{
                    color: 'var(--accent-primary)',
                    margin: '0 auto 1.5rem',
                  }}
                />
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'var(--accent-primary)',
                    marginBottom: '1rem',
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    opacity: 0.7,
                    letterSpacing: '0.1rem',
                  }}
                >
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{ padding: '6rem 4rem', textAlign: 'center' }}
          >
            <Shield
              size={48}
              style={{ color: 'var(--accent-primary)', margin: '0 auto 2rem' }}
            />
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>
              Ready to Build Your{' '}
              <span className="accent-text">Success Story?</span>
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: '0 auto 3rem',
                lineHeight: '1.8',
              }}
            >
              Let's discuss how we can create a custom solution tailored to your
              business needs. Get in touch with our technical team for a
              detailed consultation.
            </p>
            <a
              href={`https://wa.me/923177760506?text=${encodeURIComponent(`Hello RapidWave Technical Team, I'm interested in learning more about building a solution similar to ${project.title}. Could we schedule a consultation?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '1.5rem 4rem', fontSize: '0.8rem' }}
            >
              SCHEDULE CONSULTATION
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
// Project breakdown
