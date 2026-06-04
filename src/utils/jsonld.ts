import { profile } from '@/data/profile';

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  image: `${profile.siteUrl}/assets/hero/fazeel-3d-avatar.webp`,
  jobTitle: profile.title,
  description: profile.summary,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Multan',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    'React', 'Node.js', 'Ruby on Rails', 'MongoDB', 'Firebase',
    'TypeScript', 'Tailwind CSS', 'REST APIs', 'Authentication',
    'E-commerce', 'UI/UX Design',
  ],
  alumniOf: 'Bahauddin Zakariya University, Multan',
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: profile.siteUrl,
  name: `${profile.name} — Portfolio`,
  description: profile.summary,
  author: { '@type': 'Person', name: profile.name },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export interface ProjectSchemaInput {
  name: string;
  description: string;
  url: string;
  github?: string;
  live?: string;
  image: string;
  tech: string[];
  ownership: 'Owned Project' | 'Collaborative Project';
}

export const softwareSchema = (p: ProjectSchemaInput) => {
  const isCollab = p.ownership === 'Collaborative Project';
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: p.name,
    description: p.description,
    url: p.url,
    codeRepository: p.github,
    image: p.image,
    programmingLanguage: p.tech,
    [isCollab ? 'contributor' : 'author']: { '@type': 'Person', name: profile.name },
  };
};

export const faqSchema = (faqs: readonly { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
