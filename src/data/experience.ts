import type { ExperienceItem } from '../types/portfolio'

export const experiences: ExperienceItem[] = [
  {
    title: 'Front-End Developer',
    company: 'GobernAI LLC',
    period: 'November 2025 - Present',
    description: [
      'Led the frontend implementation of an AI-powered multi-agent chat system, leveraging the A2A protocol to enable seamless communication, debate, and collaboration between autonomous agents.',
      'Partnered closely with the design team to enhance the product UI and UX, building scalable, reusable components and delivering a responsive, consistent experience across desktop and mobile devices.',
    ],
    technologies: ['React', 'TypeScript', 'A2A Protocol', 'AI Agents'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Exologic LLC',
    period: 'January 2025 - Present',
    description: [
      'Designed and built a complete and secure RESTful API using the Next.js App Router and API Routes, defining endpoints for CRUD operations, user management, and complex business logic.',
      'Developed and implemented full-stack features for a Next.js application, taking full ownership from the initial concept and database design through the implementation of a responsive user interface.',
      'Implemented a comprehensive authentication and authorization system using Supabase Auth, securing pages, API routes, and server actions.',
      'Integrated AI agents and advanced features using the Vercel AI SDK, enabling intelligent content generation within the application.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Vercel AI SDK'],
  },
  {
    title: 'Quality Assurance Contractor',
    company: 'Chicks Gold Inc.',
    period: 'February 2024 - October 2024',
    description: [
      'Developed and executed comprehensive test plans, test cases, and test scripts for web applications.',
      'Performed functional, regression, integration, and smoke testing to ensure software quality.',
      'Developed and maintained automated test scripts using Cypress.',
      'Reported and communicated testing progress, results, and quality metrics to the QA team.',
      'Worked closely with developers and product managers to clarify requirements and ensure adequate test coverage.',
    ],
    technologies: ['Cypress', 'Test Automation', 'QA'],
  },
  {
    title: 'Web Developer',
    company: 'Same As Cash',
    period: 'January 2020 - May 2023',
    description: [
      'Developed full-stack features for a CRM and messaging platform.',
      'Integrated third-party webhooks and REST APIs.',
      'Developed custom WordPress themes and plugins.',
      'Built corporate websites.',
      'Managed and administered WordPress installations.',
      'Created technical documentation and provided technical support to clients and operators.',
      'Performed MySQL database migrations and queries.',
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'REST APIs'],
  },
]
