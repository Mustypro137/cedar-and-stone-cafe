'use strict';

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  document.documentElement.classList.add('js');
  toggle.hidden = false;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initMenuFilter() {
  const filters = document.querySelector('.menu-filters');
  const cards = document.querySelectorAll('.menu-card');
  const status = document.getElementById('menu-status');
  if (!filters || !cards.length) return;

  filters.hidden = false;

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-button');
    if (!button) return;

    const category = button.dataset.filter;
    filters.querySelectorAll('.filter-button').forEach((b) => {
      b.setAttribute('aria-pressed', String(b === button));
    });

    let shown = 0;
    cards.forEach((card) => {
      const match = category === 'all' || card.dataset.category === category;
      card.hidden = !match;
      if (match) shown += 1;
    });

    status.textContent = `Showing ${shown} ${shown === 1 ? 'item' : 'items'}${category === 'all' ? '' : ` in ${category}`}.`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Feature initialisers are added here, one per milestone.
  initNav();
  initMenuFilter();
});
