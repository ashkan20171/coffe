/* Stage 3 progressive enhancement; no external dependencies. */
(()=>{'use strict';
const fa=()=>document.documentElement.lang==='fa';
function init(){
 const main=document.querySelector('main');if(main&&!main.id)main.id='main-content';
 const skip=document.createElement('a');skip.className='skip-link';skip.href='#main-content';skip.textContent=fa()?'رفتن به محتوای اصلی':'Skip to main content';if(main)document.body.prepend(skip);
 const nav=document.querySelector('.nav'),links=document.querySelector('.navlinks');
 if(nav&&links){const toggle=document.createElement('button');toggle.type='button';toggle.className='iconbtn mobile-menu-toggle';toggle.setAttribute('aria-controls','primary-nav');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label',fa()?'باز کردن منو':'Open navigation');toggle.textContent='☰';links.id='primary-nav';nav.insertBefore(toggle,links);toggle.addEventListener('click',()=>{const opened=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',fa()?(opened?'بستن منو':'باز کردن منو'):(opened?'Close navigation':'Open navigation'));});links.addEventListener('click',e=>{if(e.target.closest('a')){links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}})}
 document.querySelectorAll('img:not([loading])').forEach((img,i)=>{if(i>0)img.loading='lazy';img.decoding='async'});
 const date=document.querySelector('#rdate');if(date){const now=new Date(),local=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);date.min=local;}
 const cart=document.querySelector('#cartDrawer'),open=document.querySelector('#cartBtn'),close=document.querySelector('#closeCart');if(cart&&open&&close){cart.setAttribute('role','dialog');cart.setAttribute('aria-modal','true');cart.setAttribute('aria-label',fa()?'سبد خرید':'Shopping cart');open.setAttribute('aria-haspopup','dialog');open.setAttribute('aria-expanded','false');const sync=()=>open.setAttribute('aria-expanded',String(cart.classList.contains('open')));open.addEventListener('click',()=>{sync();close.focus()});close.addEventListener('click',()=>{sync();open.focus()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&cart.classList.contains('open')){cart.classList.remove('open');sync();open.focus()}})}
}
document.addEventListener('DOMContentLoaded',init);
})();
