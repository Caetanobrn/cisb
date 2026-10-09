/* ============================================
   CISB — Lógica de interface
   Menu hamburguer · Fade-in ao rolar
   ============================================ */

(function () {
  'use strict';

  /* 1. Menu hamburguer */
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (event) {
      if (event.target.classList.contains('nav__link')) {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* 2. Fade-in das seções ao rolar */
  try {
    var reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      reveals.forEach(function (el) { observer.observe(el); });
    } else {
      // Fallback: sem suporte ao IntersectionObserver, conteúdo sempre visível
      document.documentElement.classList.add('no-io');
    }
  } catch (error) {
    document.documentElement.classList.add('no-io');
  }
})();