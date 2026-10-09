/* Stage 9: accessible, responsive navigation and bilingual controls. */
(() => {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('#primary-navigation');
    if (!toggle || !nav) return;
    let fa = document.documentElement.lang === 'fa';
    document.addEventListener('cafe:languagechange', e => { fa=e.detail.lang==='fa'; close(); });
    const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label', fa ? 'باز کردن منو' : 'Open navigation'); };
    toggle.setAttribute('aria-label', fa ? 'باز کردن منو' : 'Open navigation');
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? (fa ? 'بستن منو' : 'Close navigation') : (fa ? 'باز کردن منو' : 'Open navigation'));
    });
    nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    document.addEventListener('click', e => { if (!nav.contains(e.target) && !toggle.contains(e.target)) close(); });
    const mq = window.matchMedia('(min-width: 861px)');
    mq.addEventListener?.('change', e => { if (e.matches) close(); });
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main-content';
    const skip = document.createElement('a'); skip.href = '#main-content'; skip.className = 'skip-to-content';
    skip.textContent = fa ? 'رفتن به محتوای اصلی' : 'Skip to main content';
    document.body.prepend(skip);
  });
})();
