/* Stage 21: lightweight navigation and language quality-of-life; no polling or observers. */
(()=>{'use strict';
const ready=()=>{
 const page=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('header nav a').forEach(a=>{try{const url=new URL(a.getAttribute('href'),location.href);if(url.pathname.split('/').pop()===page)a.setAttribute('aria-current','page');}catch{}});
 const header=document.querySelector('header');if(!header)return;
 const lang=document.getElementById('langBtn');
 const update=()=>{const fa=document.documentElement.lang==='fa';if(lang){lang.title=fa?'Switch to English':'تغییر به فارسی';lang.setAttribute('aria-label',fa?'Switch to English':'Switch to Persian');}document.documentElement.style.scrollPaddingTop=(header.getBoundingClientRect().height+12)+'px';};
 update();document.addEventListener('cafe:languagechange',update);
 const nav=document.getElementById('primary-navigation');const toggle=document.querySelector('.mobile-menu-toggle');
 if(toggle&&nav){toggle.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus();}});}
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();
