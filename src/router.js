// Tiny hash-based router. URLs look like /#/, /#/about, /#/projects, /#/contact.
// No deps — works on any static host (including GitHub Pages) with zero config.

import { home } from './routes/home.js';
import { about } from './routes/about.js';
import { projects } from './routes/projects.js';
import { contact } from './routes/contact.js';
import { notFound } from './routes/not-found.js';

const routes = {
  '/': home,
  '/about': about,
  '/projects': projects,
  '/contact': contact,
};

const SITE_TITLE = 'sagreen.xyz';

function parseHash() {
  // Normalize: '', '#', '#/', '#/about' → '/' or '/about'
  const raw = window.location.hash.replace(/^#/, '') || '/';
  return raw.startsWith('/') ? raw : `/${raw}`;
}

function render() {
  const path = parseHash();
  const route = routes[path] ?? notFound;
  const outlet = document.querySelector('#app');
  if (!outlet) return;

  outlet.innerHTML = route.template();
  document.title = route.title ? `${route.title} — ${SITE_TITLE}` : SITE_TITLE;

  // Mark the active link in any nav that uses [data-route] anchors.
  for (const link of document.querySelectorAll('a[data-route]')) {
    const linkPath = link.getAttribute('href').replace(/^#/, '') || '/';
    link.toggleAttribute('aria-current', linkPath === path);
  }

  // Reset scroll on navigation.
  window.scrollTo({ top: 0 });

  // Optional per-route hook for wiring up event listeners, etc.
  route.mount?.(outlet);
}

export function startRouter() {
  window.addEventListener('hashchange', render);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
}
