// Animation utilities — Lenis smooth scroll + GSAP scroll reveals + pinned story.
// Loaded only on the client. Respects prefers-reduced-motion.

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis: Lenis | null = null;
let rafId = 0;
let registered = false;

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function ensureRegistered() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function initLenis() {
  if (typeof window === 'undefined' || reduced()) return null;
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.05,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  ensureRegistered();
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function initScrollReveals() {
  if (typeof window === 'undefined') return;
  if (reduced()) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }
  ensureRegistered();
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  els.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => el.classList.add('is-visible'),
    });
  });
}

export function initPinnedStory() {
  if (typeof window === 'undefined' || reduced()) return;
  ensureRegistered();
  const root = document.querySelector<HTMLElement>('[data-story]');
  if (!root) return;
  const track = root.querySelector<HTMLElement>('[data-story-track]');
  if (!track) return;
  const panels = track.querySelectorAll<HTMLElement>('[data-story-panel]');
  if (!panels.length) return;

  const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

  const panelArray = Array.from(panels);
  const revealed = new Set<number>();

  const revealPanel = (i: number) => {
    if (revealed.has(i)) return;
    const panel = panelArray[i];
    if (!panel) return;
    const fades = panel.querySelectorAll<HTMLElement>('[data-story-fade]');
    if (!fades.length) return;
    revealed.add(i);
    gsap.to(fades, {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  panelArray.forEach((panel) => {
    const fades = panel.querySelectorAll<HTMLElement>('[data-story-fade]');
    if (fades.length) gsap.set(fades, { opacity: 0, y: 24 });
  });

  gsap.to(track, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
      trigger: root,
      pin: true,
      scrub: 0.6,
      start: 'top top',
      end: () => `+=${distance()}`,
      invalidateOnRefresh: true,
      onEnter: () => revealPanel(0),
      onUpdate: (self) => {
        const p = self.progress;
        const n = panelArray.length;
        for (let i = 1; i < n; i++) {
          if (p >= (i - 0.5) / (n - 1) - 0.05) revealPanel(i);
        }
      },
    },
  });
}

export function initMagneticButtons() {
  if (typeof window === 'undefined' || reduced()) return;
  const buttons = document.querySelectorAll<HTMLElement>('[data-magnetic]');
  buttons.forEach((btn) => {
    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    };
    const onLeave = () => (btn.style.transform = '');
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
  });
}

export function cleanup() {
  if (rafId) cancelAnimationFrame(rafId);
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
  if (registered) {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
}
