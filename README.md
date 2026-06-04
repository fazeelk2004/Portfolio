# Fazeel Khan — Portfolio

Premium, performance-focused portfolio for **Fazeel Khan**, full-stack developer and creative technologist. Built with Astro, TypeScript, Tailwind, GSAP, Lenis, and React Three Fiber.

## Stack

- **Astro 4** — static-first, partial hydration, View Transitions
- **TypeScript** strict
- **Tailwind CSS** with a custom dark token palette
- **GSAP + ScrollTrigger** for scroll reveals and pinned story
- **Lenis** smooth scroll
- **React Three Fiber + drei** for the lazy-mounted hero 3D scene
- **Astro Sitemap + robots.txt**, JSON-LD, OG/Twitter, llms.txt

## Run locally

```bash
npm install
npm run dev          # http://localhost:4321
npm run build
npm run preview
```

Node 20+ recommended.

## File structure

```
src/
  components/
    layout/    # Nav, Footer
    sections/  # Hero, WhatIDo, FeaturedProjects, StoryScroll, Skills,
               # Experience, Education, GitHubProof, ContactCTA, FAQ
    seo/       # SEO.astro
    three/     # HeroScene.tsx + lazy wrapper
    ui/        # Button, Badge, ProjectCard
  data/        # profile, skills, experience, projects, caseStudies, faq
  layouts/     # Base.astro
  pages/       # index, about, contact, projects/index, projects/[slug], 404
  styles/      # global.css (Tailwind + tokens)
  utils/       # animations.ts, jsonld.ts
public/
  assets/      # hero, projects, seo, textures, icons (drop generated WebPs here)
  llms.txt
  manifest.webmanifest
  favicon.svg
ASSET_PROMPTS.md
astro.config.mjs · tailwind.config.mjs · tsconfig.json
netlify.toml · vercel.json
```

## Assets to generate

All image prompts live in [`ASSET_PROMPTS.md`](./ASSET_PROMPTS.md). Generate, save as `.webp`, and drop into the matching path under `public/assets/...`. The site renders fine with missing images (cards fall back to a soft gradient).

## Contact form

The form in `ContactCTA.astro` is wired for **Netlify Forms** out of the box.
- On Netlify: nothing else to do — submissions appear under Forms.
- To switch to **Formspree**: replace the form `action` with `https://formspree.io/f/YOUR_ID`, drop `data-netlify`, `name="contact"`, and the hidden `form-name` input.

## Deployment

### Netlify
1. Push to GitHub.
2. Connect the repo, build settings already in `netlify.toml`.

### Vercel
1. Push to GitHub.
2. Import — `vercel.json` handles the rest.

## SEO checklist (shipped)

- [x] Per-page `<title>`, `<meta description>`, canonical
- [x] OpenGraph + Twitter card on every page
- [x] JSON-LD: Person, WebSite, BreadcrumbList, SoftwareSourceCode (per project), FAQPage
- [x] `sitemap-index.xml` via `@astrojs/sitemap`
- [x] `robots.txt` via `astro-robots-txt`
- [x] `/llms.txt` for AI search engines
- [x] Manifest + theme color + favicon
- [x] Semantic HTML, alt text, heading hierarchy
- [x] Skip-to-content link, focus rings, `prefers-reduced-motion` fallbacks
- [x] Plain-text AEO summary on home page
- [x] FAQ section with structured data

## Notes / assumptions

- **Site URL** is set to `https://fazeelkhan.dev` in `astro.config.mjs` and `src/data/profile.ts`. Change both if you deploy elsewhere.
- **3D scene** is lazy-mounted only on desktop, non-reduced-motion, ≥4 GB RAM devices. Mobile and reduced-motion users see the CSS glassmorphism fallback automatically.
- **Project repos**: Live URLs were not provided per project, so only GitHub links are wired. Add `live: '...'` in `src/data/projects.ts` to surface live buttons.
- **Imagine AI Fashion** is consistently labelled as a collaborative project — wording, badge, contribution section, and JSON-LD all reflect contributor (not author) status.
- **MDX content collection** was scoped out: case studies are stored in `src/data/caseStudies.ts` for type-safe linking with `projects.ts`. Switching to MDX later is a small refactor.
- **Phone number** intentionally not exposed.


032476542