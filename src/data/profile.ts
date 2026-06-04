export const profile = {
  name: 'Fazeel Khan',
  title: 'Full-Stack Developer & Creative Technologist',
  shortTitle: 'Full-Stack Developer',
  location: 'Multan, Punjab, Pakistan',
  email: 'fazeelk2004@gmail.com',
  github: 'https://github.com/fazeelk2004',
  githubUsername: 'fazeelk2004',
  linkedin: 'https://www.linkedin.com/in/fazeel-khan-387ab5340',
  siteUrl: 'https://fazeelkhan.dev',
  availability: 'Available for internships, junior roles, freelance, and collaborations',
  summary:
    'Computer Science student and full-stack developer focused on building responsive, practical web applications with clean UI, secure authentication, API integration, and scalable project structure.',
  longSummary:
    'I build full-stack web applications using React, Node.js, Ruby on Rails, MongoDB, and Firebase. My focus is on practical product work — authentication, dashboards, e-commerce flows, REST APIs, and clean responsive UI. I also bring a graphic design background, which helps me ship interfaces that look considered, not generic.',
  stats: [
    { label: 'Design assets delivered', value: '50+' },
    { label: 'Engagement boost via design work', value: '30%' },
    { label: 'Frontend load speed improvement', value: '25%' },
    { label: 'Backend response-time improvement', value: '15%' },
  ],
} as const;

export type Profile = typeof profile;
