/* ============================================================
   script.js — Fell Rose Anquillano Portfolio
   ============================================================ */

/* ── STARFIELD ── */
function initStars() {
  const starsEl = document.getElementById('stars');
  if (!starsEl) return;

  for (let i = 0; i < 120; i++) {
    const star = document.createElement('span');
    const size = Math.random() * 2 + 0.5;

    star.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${Math.random() * 100}%;
      top:    ${Math.random() * 100}%;
      --dur:  ${2 + Math.random() * 5}s;
      --op:   ${0.2 + Math.random() * 0.5};
      animation-delay: ${Math.random() * 5}s;
    `;

    starsEl.appendChild(star);
  }
}

/* ── SCROLL REVEAL ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* ── ACTIVE NAV HIGHLIGHT ON SCROLL ── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener(
    'scroll',
    () => {
      let current = '';

      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 140) {
          current = sec.id;
        }
      });

      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${current}`) {
          link.style.color = 'var(--blue-soft)';
        } else {
          link.style.color = '';
        }
      });
    },
    { passive: true }
  );
}

/* ── INIT ALL ── */
document.addEventListener('DOMContentLoaded', () => {
  initStars();
  initScrollReveal();
  initActiveNav();
});
