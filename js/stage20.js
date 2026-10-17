/* Stage 20: resilient navigation, lightweight loading diagnostics, and keyboard support. */
(()=>{'use strict';
 const init=()=>{
  const header=document.querySelector('header.top');
  const btn=document.getElementById('langBtn');
  if(header)header.dataset.stage20='ready';
  if(btn){btn.removeAttribute('aria-controls');btn.setAttribute('aria-label',document.documentElement.lang==='fa'?'Switch to English':'تغییر به فارسی');}
  const sync=()=>{
   document.querySelectorAll('nav a[href]').forEach(a=>{
    try{const u=new URL(a.getAttribute('href'),location.href);const current=u.pathname===location.pathname && (!u.hash || u.hash===location.hash);if(current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}catch{}
   });
   if(btn)btn.setAttribute('title',document.documentElement.lang==='fa'?'Switch to English':'تغییر به فارسی');
  };
  sync();document.addEventListener('cafe:languagechange',sync);
  const status=document.createElement('span');status.className='s20-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.textContent='';document.body.append(status);
  document.addEventListener('cafe:languagechange',()=>{status.textContent=document.documentElement.lang==='fa'?'زبان به فارسی تغییر کرد':'Language changed to English';});
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
