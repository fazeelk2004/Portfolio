// Map a human-readable tech/skill label to an Iconify icon name
// (used by astro-icon). Returns null when no good logo exists.

const map: Record<string, string> = {
  // Frontend
  'html5': 'simple-icons:html5',
  'css3': 'simple-icons:css3',
  'javascript': 'simple-icons:javascript',
  'typescript': 'simple-icons:typescript',
  'react': 'simple-icons:react',
  'react native': 'simple-icons:react',
  'redux toolkit': 'simple-icons:redux',
  'redux': 'simple-icons:redux',
  'bootstrap': 'simple-icons:bootstrap',
  'bootstrap 5': 'simple-icons:bootstrap',
  'tailwind': 'simple-icons:tailwindcss',
  'tailwind css': 'simple-icons:tailwindcss',
  'vite': 'simple-icons:vite',
  'astro': 'simple-icons:astro',
  'next.js': 'simple-icons:nextdotjs',
  'three.js': 'simple-icons:threedotjs',
  'framer motion': 'simple-icons:framer',

  // Backend
  'node.js': 'simple-icons:nodedotjs',
  'node': 'simple-icons:nodedotjs',
  'express': 'simple-icons:express',
  'express.js': 'simple-icons:express',
  'ruby on rails': 'simple-icons:rubyonrails',
  'rails': 'simple-icons:rubyonrails',
  'jwt': 'simple-icons:jsonwebtokens',
  'jwt authentication': 'simple-icons:jsonwebtokens',
  'rest apis': 'lucide:plug',
  'rest api': 'lucide:plug',
  'mongoose': 'simple-icons:mongoose',

  // Database
  'mongodb': 'simple-icons:mongodb',
  'firebase': 'simple-icons:firebase',
  'sql': 'lucide:database',
  'postgresql': 'simple-icons:postgresql',
  'postgresql / supabase': 'simple-icons:supabase',
  'supabase': 'simple-icons:supabase',
  'local db': 'lucide:database',

  // Design
  'adobe photoshop': 'simple-icons:adobephotoshop',
  'photoshop': 'simple-icons:adobephotoshop',
  'ui / ux principles': 'lucide:sparkles',
  'ui/ux principles': 'lucide:sparkles',
  'responsive web design': 'lucide:smartphone',
  'visual content design': 'lucide:image',

  // Tools
  'git': 'simple-icons:git',
  'github': 'simple-icons:github',
  'vercel': 'simple-icons:vercel',
  'netlify': 'simple-icons:netlify',
  'render': 'simple-icons:render',
  'api integration': 'lucide:plug-2',
  'debugging': 'lucide:bug',
  'admin dashboard': 'lucide:layout-dashboard',
  'stripe': 'simple-icons:stripe',
  'python': 'simple-icons:python',
  'ai image apis': 'lucide:sparkles',
};

export function iconForTech(label: string): string | null {
  return map[label.trim().toLowerCase()] ?? null;
}
