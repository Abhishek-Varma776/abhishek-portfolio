/* ═══════════════════════════════════════════════════════════
   script.js — Portfolio interactivity
   Handles: navbar scroll, mobile menu, scroll animations,
            active nav link highlighting
   ═══════════════════════════════════════════════════════════ */

'use strict';

// ── Navbar: add scrolled class ───────────────────────────────
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll(); // run once on load

// ── Mobile menu toggle ───────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ── Active nav link on scroll ────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkEls.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.35, rootMargin: '-64px 0px 0px 0px' }
);

sections.forEach(section => sectionObserver.observe(section));

// ── Scroll-reveal animations ─────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after reveal for performance
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
);

revealEls.forEach(el => revealObserver.observe(el));

// ── Smooth scroll polyfill fallback ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Subtle parallax on hero orbs ────────────────────────────
const orbs = document.querySelectorAll('.orb');

window.addEventListener('mousemove', (e) => {
  if (window.innerWidth < 768) return; // skip on mobile
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx; // -1 to 1
  const dy = (e.clientY - cy) / cy;

  orbs.forEach((orb, i) => {
    const factor = (i + 1) * 8;
    orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
  });
}, { passive: true });

// ── Typing cursor effect on hero tagline ────────────────────
// (subtle — just ensures the page feels alive on load)
const heroTagline = document.querySelector('.hero-tagline');
if (heroTagline) {
  heroTagline.style.borderRight = '2px solid transparent';
  setTimeout(() => {
    heroTagline.style.borderRight = 'none';
  }, 1800);
}

// ── Console easter egg ───────────────────────────────────────
console.log(
  '%c👋 Hey recruiter! Thanks for inspecting the code.',
  'color: #58a6ff; font-size: 14px; font-weight: bold;'
);
console.log(
  '%cThis portfolio was hand-crafted with vanilla HTML/CSS/JS — no framework overhead.',
  'color: #8b949e; font-size: 12px;'
);
console.log(
  '%c📧 pujalasnabhishek@gmail.com | 🔗 linkedin.com/in/pujala-snav',
  'color: #39d353; font-size: 12px;'
);
