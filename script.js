// Always open at the top of the page — clears any leftover #section hash from a
// previous nav click still sitting in the address bar (browsers auto-scroll to a
// matching id on reload otherwise). In-page nav clicks during the session still
// work normally since this only runs once, on initial load.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal for sections
const revealTargets = document.querySelectorAll(
  '.about-lead, .domain-row, .ledger-col, .case-feature, .case-secondary, .exhibit, .tl-row, .credentials-col, .contact-inner'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => observer.observe(el));

// Active nav link highlight on scroll
const navLinks = document.querySelectorAll('.site-nav nav a[href^="#"]');
const sections = Array.from(navLinks)
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = '#' + entry.target.id;
    const link = document.querySelector(`.site-nav nav a[href="${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.style.color = '');
      link.style.color = 'var(--gold-bright)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => navObserver.observe(sec));

// Exhibit lightbox — click a dashboard screenshot to view it full-size with its explanation
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxText = document.getElementById('lightbox-text');
let lastFocused = null;

function openLightbox(exhibit) {
  const img = exhibit.querySelector('img');
  const tag = exhibit.querySelector('.exhibit-tag');
  const text = exhibit.querySelector('figcaption p');
  if (!img) return;

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt || '';
  lightboxTitle.textContent = tag ? tag.textContent : '';
  lightboxText.textContent = text ? text.textContent : '';

  lastFocused = document.activeElement;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('.exhibit-frame').forEach(frame => {
  frame.setAttribute('tabindex', '0');
  frame.setAttribute('role', 'button');
  const exhibit = frame.closest('.exhibit');
  const label = exhibit ? exhibit.querySelector('.exhibit-tag') : null;
  frame.setAttribute('aria-label', label ? `View full size — ${label.textContent}` : 'View full size');

  frame.addEventListener('click', () => openLightbox(exhibit));
  frame.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(exhibit);
    }
  });
});

lightbox.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', closeLightbox);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

// SQL code viewer — click a NexaBank investigation title to see its query
const codebox = document.getElementById('codebox');
const codeboxTitle = document.getElementById('codebox-title');
const codeboxCode = document.getElementById('codebox-code');
const codeboxCopyBtn = document.getElementById('codebox-copy');
let lastFocusedCode = null;

function openCodebox(queryId, label) {
  if (typeof sqlQueries === 'undefined' || !sqlQueries[queryId]) return;
  const entry = sqlQueries[queryId];
  codeboxTitle.textContent = label || entry.title;
  codeboxCode.textContent = entry.code;
  codeboxCopyBtn.textContent = 'Copy';
  codeboxCopyBtn.classList.remove('copied');

  lastFocusedCode = document.activeElement;
  codebox.hidden = false;
  document.body.style.overflow = 'hidden';
  codebox.querySelector('.codebox-close').focus();
}

function closeCodebox() {
  codebox.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedCode) lastFocusedCode.focus();
}

document.querySelectorAll('.cq').forEach(card => {
  const queryId = card.getAttribute('data-query');
  if (!queryId) return;
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  const titleEl = card.querySelector('.cq-t');
  card.setAttribute('aria-label', titleEl ? `View SQL — ${titleEl.textContent}` : 'View SQL');

  const label = titleEl ? titleEl.textContent : '';
  card.addEventListener('click', () => openCodebox(queryId, label));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openCodebox(queryId, label);
    }
  });
});

codebox.querySelectorAll('[data-close-code]').forEach(el => {
  el.addEventListener('click', closeCodebox);
});

codeboxCopyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(codeboxCode.textContent);
    codeboxCopyBtn.textContent = 'Copied ✓';
    codeboxCopyBtn.classList.add('copied');
    setTimeout(() => {
      codeboxCopyBtn.textContent = 'Copy';
      codeboxCopyBtn.classList.remove('copied');
    }, 1800);
  } catch (err) {
    codeboxCopyBtn.textContent = 'Select & copy';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !codebox.hidden) closeCodebox();
});
