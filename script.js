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
  initMenuFilter();
  initFaq();
  initContactForm();
});
