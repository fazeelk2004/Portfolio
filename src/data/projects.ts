export type ProjectCategory =
  | 'Full-Stack'
  | 'Frontend'
  | 'AI'
  | 'Business Software'
  | 'E-commerce'
  | 'Collaborative';

export type Ownership = 'Owned Project' | 'Collaborative Project';

export interface Project {
  slug: string;
  title: string;
  type: string;
  ownership: Ownership;
  year: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  role: string;
  summary: string;
  description: string;
  tech: string[];
  categories: ProjectCategory[];
  highlights: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
  featuredOrder?: number;
}

export const projects: Project[] = [
  {
    slug: 'golden-art-frames',
    title: 'Golden Art Frames',
    type: 'Full-Stack MERN E-commerce Platform',
    ownership: 'Owned Project',
    year: '2025',
    complexity: 'Advanced',
    role: 'Full-Stack Developer',
    summary:
      'Custom photo product e-commerce platform with in-browser editor, Stripe checkout, and admin dashboard.',
    description:
      'A full-stack MERN e-commerce platform for custom photo products — prints, frames, canvas, collages, and wedding products. Includes image upload, live customisation, cart, Stripe checkout, order management, dynamic pricing, blog management, and an analytics-aware admin dashboard.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'Tailwind CSS', 'Framer Motion', 'JWT', 'Mongoose'],
    categories: ['Full-Stack', 'E-commerce'],
    highlights: [
      'Live in-browser product editor',
      'Stripe checkout flow',
      'Admin dashboard with order + pricing controls',
      'Dynamic per-product pricing',
      'Blog and analytics modules',
    ],
    github: 'https://github.com/fazeelk2004',
    image: '/assets/projects/golden-art-frames-mockup.webp',
    featured: true,
    featuredOrder: 1,
  },
  {
    slug: 'imagine-ai-fashion',
    title: 'Imagine AI Fashion Platform',
    type: 'Collaborative AI Fashion / Image-Generation Platform',
    ownership: 'Collaborative Project',
    year: '2025',
    complexity: 'Advanced',
    role: 'Contributor — Frontend & Backend',
    summary:
      'Collaborative AI platform for fashion image generation and virtual photoshoot workflows. Contributed to frontend and backend features.',
    description:
      'A collaborative AI-powered fashion platform involving image generation, virtual photoshoot workflows, frontend interfaces, backend services, and prompt-driven image processing. Contributed to UI implementation, API routes, and integration work — not the sole owner.',
    tech: ['React', 'Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'AI image APIs'],
    categories: ['AI', 'Full-Stack', 'Collaborative'],
    highlights: [
      'AI image generation workflows',
      'Prompt and schema design',
      'Image upload and processing pipeline',
      'Frontend UI for generation controls',
      'Backend API and integration support',
    ],
    github: 'https://github.com/NVGEN/imagine-frontend',
    image: '/assets/projects/imagine-ai-fashion-mockup.webp',
    featured: true,
    featuredOrder: 2,
  },
  {
    slug: 'pos-desktop',
    title: 'POS Desktop',
    type: 'Desktop Point-of-Sale / Inventory Management System',
    ownership: 'Owned Project',
    year: '2025',
    complexity: 'Intermediate',
    role: 'Developer',
    summary:
      'A desktop POS system for small retail businesses to manage products, sales, stock, pricing, and daily transactions.',
    description:
      'A desktop point-of-sale system designed for small retail businesses to manage products, sales, stock, pricing, and day-to-day transactions from a simple local business interface.',
    tech: ['JavaScript', 'React', 'ElectronJS', 'Local DB'],
    categories: ['Business Software', 'Full-Stack'],
    highlights: [
      'Product and category management',
      'Stock tracking with low-stock awareness',
      'Sales / invoice workflow',
      'Admin-style dashboard',
      'Desktop-first UI',
    ],
    github: 'https://github.com/fazeelk2004/POS-Desktop',
    image: '/assets/projects/pos-desktop-mockup.webp',
    featured: true,
    featuredOrder: 3,
  },
  {
    slug: 'pak-origin-export',
    title: 'Pak Origin Export',
    type: 'Export / Business Website',
    ownership: 'Owned Project',
    year: '2025',
    complexity: 'Intermediate',
    role: 'Frontend Developer',
    summary:
      'Professional export-business website presenting products, company info, and contact pathways for international buyers.',
    description:
      'A professional export-business website built to present products, company information, and contact pathways for international buyers. Focused on clean responsive frontend, business-credible structure, and conversion-friendly contact paths.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Responsive Web Design'],
    categories: ['Frontend'],
    highlights: [
      'Landing page and company overview',
      'Product / category sections',
      'Export-focused messaging',
      'Responsive layout',
      'Contact form and conversion paths',
    ],
    github: 'https://github.com/fazeelk2004/pakoriginexport',
    image: '/assets/projects/pak-origin-export-mockup.webp',
    featured: true,
    featuredOrder: 4,
  },
  {
    slug: 'nobleacres',
    title: 'NobleAcres',
    type: 'Real Estate Web Application',
    ownership: 'Owned Project',
    year: '2024',
    complexity: 'Intermediate',
    role: 'Full-Stack Developer',
    summary:
      'Real estate platform with JWT authentication, listings management, and landlord/tenant interaction.',
    description:
      'A real estate web application where users can sign up, create listings, manage properties, and connect with landlords. Built with React, Redux Toolkit, Firebase, and JWT authentication.',
    tech: ['React', 'Redux Toolkit', 'Firebase', 'JWT', 'JavaScript'],
    categories: ['Full-Stack'],
    highlights: [
      'Secure JWT authentication',
      'Protected listing management',
      'Landlord / tenant interaction',
      'Responsive cross-device UI',
    ],
    github: 'https://github.com/fazeelk2004',
    image: '/assets/projects/nobleacres-mockup.webp',
    featured: true,
    featuredOrder: 5,
  },
  {
    slug: 'thinkboard',
    title: 'ThinkBoard',
    type: 'MERN Notes Application',
    ownership: 'Owned Project',
    year: '2024',
    complexity: 'Beginner',
    role: 'Full-Stack Developer',
    summary:
      'MERN note-taking app with full CRUD, REST API, toast notifications, and rate limiting.',
    description:
      'A MERN note-taking application with full CRUD operations, RESTful APIs, responsive UI, toast notifications, and rate limiting on the API layer.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'REST API'],
    categories: ['Full-Stack'],
    highlights: ['Full CRUD on notes', 'REST API workflow', 'Toast feedback', 'API rate limiting'],
    github: 'https://github.com/fazeelk2004',
    image: '/assets/projects/thinkboard-mockup.webp',
    featured: true,
    featuredOrder: 6,
  },
  {
    slug: 'school-dashboard',
    title: 'NeuraLearn (School Dashboard UI)',
    type: 'Dashboard UI Project',
    ownership: 'Owned Project',
    year: '2025',
    complexity: 'Intermediate',
    role: 'Frontend Developer',
    summary:
      'A modern school/admin dashboard interface — sidebar navigation, analytics cards, and data tables.',
    description:
      'A school management dashboard UI focused on a clean admin layout, responsive tables, navigation, and reusable card components — built as a frontend system to plug into a real backend.',
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    categories: ['Frontend'],
    highlights: [
      'Admin dashboard layout',
      'Reusable data cards and tables',
      'Responsive sidebar navigation',
    ],
    github: 'https://github.com/fazeelk2004',
    image: '/assets/projects/school-dashboard-mockup.webp',
    featured: false,
  },
  {
    slug: 'chatbot-ai',
    title: 'Chatbot AI',
    type: 'Python AI Chatbot',
    ownership: 'Owned Project',
    year: '2024',
    complexity: 'Beginner',
    role: 'Developer',
    summary:
      'A Python-based chatbot project exploring conversational interaction flow.',
    description:
      'A Python-based chatbot exploring AI interaction flow and a simple conversational interface — used as a learning project for AI integration patterns.',
    tech: ['Python'],
    categories: ['AI'],
    highlights: ['Conversational interface', 'AI interaction flow'],
    github: 'https://github.com/fazeelk2004',
    image: '/assets/projects/chatbot-ai-mockup.webp',
    featured: false,
  },
  {
    slug: 'lms-quiz-ai',
    title: 'LMS Quiz AI Generated',
    type: 'LMS / Quiz Application',
    ownership: 'Owned Project',
    year: '2024',
    complexity: 'Beginner',
    role: 'Developer',
    summary:
      'A quiz / LMS application exploring AI-generated quiz content and learning UI.',
    description:
      'An LMS-style quiz app exploring AI-generated questions and a simple learning management UI.',
    tech: ['JavaScript'],
    categories: ['AI', 'Frontend'],
    highlights: ['Quiz system', 'AI-generated quiz concept', 'Learning management UI'],
    github: 'https://github.com/fazeelk2004',
    image: '/assets/projects/lms-quiz-mockup.webp',
    featured: false,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export const projectCategories: ProjectCategory[] = [
  'Full-Stack',
  'Frontend',
  'AI',
  'Business Software',
  'E-commerce',
  'Collaborative',
];
