/* Stage 11: progressive enhancement, no polling or DOM observers. */
(() => {
 'use strict';
 const words={en:{notice:'Demo storefront · Orders and reservations are not sent to a café.',top:'Back to top',table:'Table',hall:'Hall',terrace:'Terrace',unavailable:'Unavailable'},fa:{notice:'نسخه نمایشی · سفارش‌ها و رزروها به کافه ارسال نمی‌شوند.',top:'بازگشت به بالا',table:'میز',hall:'سالن',terrace:'تراس',unavailable:'غیرقابل رزرو'}};
 function update(){
  const lang=document.documentElement.lang==='fa'?'fa':'en';const w=words[lang];
  document.querySelectorAll('[data-s11-key]').forEach(el=>{const k=el.dataset.s11Key;if(w[k])el.textContent=w[k]});
  document.querySelectorAll('#tableMap .table-seat').forEach((el,i)=>{
   const n=i+1;const isTerrace=n%3===0;
   el.replaceChildren();const title=document.createElement('b');title.textContent=`${w.table} ${n}`;const small=document.createElement('small');small.textContent=isTerrace?w.terrace:w.hall;el.append(title,document.createElement('br'),small);
   if(el.classList.contains('busy'))el.setAttribute('aria-label',`${w.table} ${n} — ${w.unavailable}`);
  });
  const back=document.getElementById('s11-back');if(back)back.setAttribute('aria-label',w.top);
 }
 document.addEventListener('DOMContentLoaded',()=>{
  const banner=document.createElement('div');banner.className='s11-demo';banner.setAttribute('role','note');const span=document.createElement('span');span.dataset.s11Key='notice';banner.append(span);
  const header=document.querySelector('header.top');header?.after(banner);
  const back=document.createElement('button');back.id='s11-back';back.className='s11-back';back.type='button';back.textContent='↑';back.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));document.body.append(back);
  const onScroll=()=>back.classList.toggle('visible',window.scrollY>600);window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  update();document.addEventListener('cafe:languagechange',update);
 });
})();
