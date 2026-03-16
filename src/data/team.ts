export interface TeamMember {
  name: string;
  role: string;
  email: string;
  bio: string;
  img: string;
  github: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    name: 'MUHAMMAD REHAN HUSSAIN',
    role: 'Co-Founder & Lead Backend Architect',
    email: 'rehancodeofficial@gmail.com',
    bio: 'Muhammad Rehan Hussain is a high-performance Backend Engineer specializing in scalable web and mobile systems. With deep expertise in API design, microservices architecture, and performance optimization, he builds the robust foundations that power modern enterprise applications.',
    img: '/team/rehan.png',
    github: 'https://github.com/rehancodeofficial',
    linkedin: 'https://www.linkedin.com/in/rehancodeofficial/',
  },
  {
    name: 'WAJIHA ZEHRA',
    role: 'Co-Founder & Full-Stack Engineer',
    email: 'wajihacodeofficial@gmail.com',
    bio: 'Wajiha Zehra is a frontend-focused Full-Stack Engineer dedicated to building high-performance SaaS products across web, mobile, and desktop. She specializes in translating complex technical requirements into seamless, accessible, and ultra-responsive user experiences.',
    img: '/team/wajiha.png',
    github: 'https://github.com/wajihacodeofficial',
    linkedin: 'https://www.linkedin.com/in/wajihacodeofficial/',
  },
];
