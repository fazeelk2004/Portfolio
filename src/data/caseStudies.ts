// Long-form case study content per project slug.
// Kept in TS rather than MDX for type-safe linking with projects.ts.

export interface CaseStudy {
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  contribution?: string[];
  learned: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  'golden-art-frames': {
    problem:
      'Photo-product businesses need a buying flow that lets customers customise prints, frames, and canvases before checkout — most off-the-shelf e-commerce templates don\'t support live product customisation or per-product dynamic pricing.',
    solution:
      'A full MERN platform with an in-browser product editor (upload, crop, frame preview), Stripe checkout, JWT-protected customer/admin areas, dynamic per-product pricing, and an admin dashboard covering orders, products, blog, and basic analytics.',
    features: [
      'Custom photo upload with crop and zoom controls',
      'Live preview for prints, framed, canvas, collage, and wedding products',
      'Cart with per-item customisation persisted across sessions',
      'Stripe-powered checkout',
      'JWT authentication for customers and admins',
      'Admin dashboard: orders, pricing, blog, and product management',
      'Dynamic pricing rules per product type and size',
    ],
    architecture: [
      'React + Tailwind frontend with Framer Motion micro-interactions',
      'Express REST API with route-level JWT middleware',
      'MongoDB via Mongoose for products, users, orders, and content',
      'Stripe for payment intents and webhook order finalisation',
      'Cloud image upload pipeline for customer photos',
    ],
    learned: [
      'Designing data models that survive customer customisation without bloating order documents.',
      'Webhook-driven order state vs. optimistic UI — getting both to agree.',
      'How much UX matters for an editor-style flow.',
    ],
  },

  'imagine-ai-fashion': {
    problem:
      'Fashion brands and creators need faster ways to generate product and model imagery without traditional photoshoot costs — that means workflows around prompts, image inputs, and configurable generation options.',
    solution:
      'A collaborative AI fashion platform with a prompt-driven generation UI, image upload pipeline, configurable model/pose/shot options, and a backend that orchestrates the AI image workflow and result storage.',
    features: [
      'AI image generation workflows with configurable inputs',
      'Image upload and preprocessing pipeline',
      'Prompt schema and parameter design for fashion outputs',
      'Frontend UI for generation controls and result gallery',
      'Backend API routes for generation jobs and asset retrieval',
    ],
    architecture: [
      'React frontend with form-driven generation controls',
      'Node.js / Express backend orchestrating AI image generation calls',
      'Storage layer for input photos and generated outputs',
      'Prompt and parameter schema shared between frontend and backend',
    ],
    contribution: [
      'Worked on frontend UI pieces for the generation flow and result gallery.',
      'Contributed to backend API routes and integration glue.',
      'Supported prompt/schema iteration and debugging across the stack.',
      'Part of a small collaborative team — not the sole owner of the platform.',
    ],
    learned: [
      'How to ship inside a team codebase you didn\'t start.',
      'Prompt design is product design — small wording changes shift output quality more than expected.',
      'Asynchronous AI jobs need clear UI states or the whole thing feels broken.',
    ],
  },

  'pos-desktop': {
    problem:
      'Small retail businesses still run on spreadsheets — products, prices, and stock spread across inconsistent files. They need a single, simple system to manage inventory and process sales.',
    solution:
      'A desktop point-of-sale application that centralises product data, stock levels, and a transaction workflow in one admin-style interface designed for daily use.',
    features: [
      'Product and category management',
      'Stock tracking with low-stock awareness',
      'Pricing and cost fields per product',
      'Sales / invoice workflow',
      'Admin-style dashboard for daily operations',
      'Desktop-first UI optimised for a counter workflow',
    ],
    architecture: [
      'JavaScript/TypeScript frontend with a desktop-friendly layout',
      'Local data layer for products, sales, and stock state',
      'Modular UI with reusable table, form, and modal primitives',
    ],
    learned: [
      'Building software for a counter is different from building for a browser tab.',
      'Inventory state is harder than it looks — race conditions show up fast.',
      'Boring UI is the right UI when the user is in a hurry.',
    ],
  },

  'pak-origin-export': {
    problem:
      'Export businesses need a credible online presence that communicates products, trust, and clear contact paths to international buyers — most generic templates don\'t carry that weight.',
    solution:
      'A clean, responsive business website with a strong landing page, structured product/category sections, a company overview, and conversion-focused contact paths.',
    features: [
      'Landing page with export-focused messaging',
      'Product and category sections',
      'Company overview and credibility content',
      'Responsive layout across all devices',
      'Contact form / clear contact pathways',
    ],
    architecture: [
      'React + Vite + Tailwind CSS frontend',
      'Component-driven page structure for easy content updates',
      'Static deployment ready for Vercel / Netlify',
    ],
    learned: [
      'Business sites live or die on hierarchy — fewer, clearer sections beat clever ones.',
      'How to write product copy that reads like a company, not a freelancer.',
    ],
  },

  nobleacres: {
    problem:
      'Renters and landlords need a focused space to list, browse, and manage properties without the noise of generic classifieds.',
    solution:
      'A real estate web app with JWT-authenticated accounts, protected listing creation, landlord/tenant interaction, and a responsive cross-device UI.',
    features: [
      'User signup / login with JWT',
      'Protected routes for listing management',
      'Listing creation, edit, and management',
      'Landlord ↔ tenant interaction',
      'Responsive UI across devices',
    ],
    architecture: [
      'React + Redux Toolkit frontend',
      'Firebase for auth and data',
      'JWT-based API protection',
    ],
    learned: [
      'Redux Toolkit makes auth state much less painful than rolling your own.',
      'Listing UX is mostly about scannability — get the cards right first.',
    ],
  },

  thinkboard: {
    problem:
      'Notes apps are everywhere, but writing one end-to-end is the cleanest way to internalise a CRUD workflow and a real REST API.',
    solution:
      'A MERN note-taking app with full CRUD, REST endpoints, toast feedback, and rate limiting on the API layer.',
    features: [
      'Create, read, update, delete notes',
      'REST API with consistent response shape',
      'Toast notifications for user feedback',
      'API rate limiting to prevent abuse',
      'Production-ready frontend served by the backend',
    ],
    architecture: [
      'React frontend (Vite)',
      'Express + Mongoose backend',
      'MongoDB for note storage',
      'Rate-limit middleware on write endpoints',
    ],
    learned: [
      'How to design API responses you don\'t hate consuming.',
      'Rate limiting is one line of code that saves a lot of pain.',
    ],
  },

  'school-dashboard': {
    problem:
      'School and admin tooling often inherits ugly legacy UI. A dashboard frontend with reusable primitives is a good base for any institution UI.',
    solution:
      'A clean, responsive school dashboard UI with sidebar navigation, analytics cards, data tables, and reusable component patterns.',
    features: [
      'Dashboard layout with sidebar navigation',
      'Analytics and stat cards',
      'Data tables for students/classes',
      'Reusable card and form primitives',
    ],
    architecture: [
      'TypeScript + React (Next.js)',
      'Tailwind CSS for layout and theme',
      'Component-driven structure for backend integration',
    ],
    learned: [
      'A few good primitives go further than a long component library.',
      'Dashboards are mostly about whitespace and alignment.',
    ],
  },

  'chatbot-ai': {
    problem:
      'Conversational interfaces are everywhere; building one from scratch is the cleanest way to understand how the pieces fit.',
    solution:
      'A Python chatbot exploring conversational flow and AI interaction patterns as a learning project.',
    features: [
      'Simple conversational interface',
      'AI interaction flow',
      'Extendable prompt/response loop',
    ],
    architecture: ['Python script with a conversation loop', 'Pluggable response handler'],
    learned: ['Where the boundaries between rule-based and AI-driven responses sit.'],
  },

  'lms-quiz-ai': {
    problem:
      'Quiz/LMS apps are a good way to practice content models, scoring, and AI-assisted content generation.',
    solution:
      'An LMS-style quiz app exploring AI-generated quiz content and a simple learning UI.',
    features: ['Quiz system', 'AI-generated quiz concept', 'Learning management UI'],
    architecture: ['JavaScript frontend', 'Question/answer model', 'Score tracking'],
    learned: ['How quiz scoring and progress feedback shape learner behaviour.'],
  },
};
