'use strict';

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  const header = toggle.closest('.site-header');

  document.documentElement.classList.add('js');
  toggle.hidden = false;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    header.classList.toggle('is-menu-open', open);
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

function initHeader() {
  const header = document.querySelector('.site-header');
  const hero = document.getElementById('top');
  if (!header || !hero || !('IntersectionObserver' in window)) return;

  // Transparent only while the hero is still under the header; solid otherwise.
  const observer = new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-over-hero', entry.isIntersecting);
    // Fades are enabled only after the initial state is set, so nothing animates on load.
    requestAnimationFrame(() => header.classList.add('is-ready'));
  }, { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` });
  observer.observe(hero);
}

function initHoursChart() {
  const chart = document.querySelector('.hours-chart');
  if (!chart) return;

  const toHours = (clock) => {
    const [hours, minutes] = clock.split(':').map(Number);
    return hours + minutes / 60;
  };

  // Every mark and bar is placed on one shared scale, read from the markup.
  const start = toHours(chart.dataset.start);
  const span = toHours(chart.dataset.end) - start;
  const percent = (hours) => Math.min(100, Math.max(0, ((hours - start) / span) * 100));

  chart.querySelectorAll('.hours-axis [data-time]').forEach((mark) => {
    mark.style.setProperty('--left', `${percent(toHours(mark.dataset.time))}%`);
  });

  chart.querySelectorAll('tbody tr').forEach((row) => {
    const bar = row.querySelector('.hours-bar');
    const times = row.querySelectorAll('time');
    if (!bar || times.length < 2) return;

    const left = percent(toHours(times[0].dateTime));
    bar.style.setProperty('--left', `${left}%`);
    bar.style.setProperty('--width', `${percent(toHours(times[1].dateTime)) - left}%`);
  });

  chart.classList.add('is-scaled');

  if (!('IntersectionObserver' in window)) {
    chart.classList.add('is-visible');
    return;
  }

  // Draw the bars in once, when the chart first scrolls into view.
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    chart.classList.add('is-visible');
    observer.disconnect();
  }, { threshold: 0.4 });
  observer.observe(chart);
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

function initFaq() {
  document.querySelectorAll('.faq-item').forEach((item, index) => {
    const heading = item.querySelector('h3');
    const panel = item.querySelector('p');
    if (!heading || !panel) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'faq-question';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-panel-${index}`);
    button.textContent = heading.textContent;
    heading.replaceChildren(button);

    panel.id = `faq-panel-${index}`;
    panel.hidden = true;

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    });
  });
}

const FIELD_RULES = {
  name: (value) => (value ? '' : 'Please enter your name.'),
  email: (value) => {
    if (!value) return 'Please enter your email address.';
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address.';
  },
  message: (value) => {
    if (!value) return 'Please enter a message.';
    return value.length >= 10 ? '' : 'Your message should be at least 10 characters.';
  },
};

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  const validateField = (input) => {
    const error = FIELD_RULES[input.name](input.value.trim());
    input.setAttribute('aria-invalid', String(Boolean(error)));
    document.getElementById(`${input.id}-error`).textContent = error;
    return !error;
  };

  const inputs = [...form.querySelectorAll('input, textarea')];

  inputs.forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') validateField(input);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';

    const invalid = inputs.filter((input) => !validateField(input));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    // Demo only: nothing is sent anywhere.
    form.reset();
    status.textContent = 'Thanks! This is a demo form, so your message was not sent.';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Feature initialisers are added here, one per milestone.
  initNav();
  initHeader();
  initHoursChart();
  initMenuFilter();
  initFaq();
  initContactForm();
});
