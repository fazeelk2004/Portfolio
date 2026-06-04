import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://fazeelkhan.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    react(),
    icon({
      include: {
        'simple-icons': ['*'],
        lucide: ['*'],
      },
    }),
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
      sitemap: true,
    }),
  ],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  build: { inlineStylesheets: 'auto' },
  vite: {
    ssr: {
      noExternal: ['three', '@react-three/fiber', '@react-three/drei', 'detect-gpu'],
    },
    optimizeDeps: {
      include: ['detect-gpu'],
    },
  },
});
