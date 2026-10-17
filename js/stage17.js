/* Stage 17: progressive enhancements, no polling or DOM observers. */
(()=>{'use strict';
const copy={en:{home:'Home',menu:'Menu',events:'Events',journal:'Journal',gift:'Gift Cards',account:'My Account',cart:'Cart',skip:'Skip to main content'},fa:{home:'خانه',menu:'منو',events:'رویدادها',journal:'مجله',gift:'کارت هدیه',account:'پنل من',cart:'سبد',skip:'رفتن به محتوای اصلی'}};
function update(){const lang=document.documentElement.lang==='fa'?'fa':'en';const t=copy[lang];
 const nav=document.querySelector('#primary-navigation');if(nav){const labels=[t.menu,t.events,t.journal,t.gift,t.account];nav.querySelectorAll('a').forEach((a,i)=>{if(labels[i])a.textContent=labels[i]});}
 const brand=document.querySelector('a.brand');if(brand)brand.setAttribute('aria-label',t.home+' — Ashkan Café');
 const skip=document.querySelector('.skip-to-content, .stage12-skip');if(skip)skip.textContent=t.skip;
 const cart=document.querySelector('#cartBtn');if(cart){const count=cart.querySelector('#cartCount');if(count){const n=count.textContent;cart.replaceChildren(document.createTextNode(t.cart+' '),count);count.textContent=n;}}
 const date=document.querySelector('#rdate');if(date){const d=new Date();const today=[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');date.min=today;}
}
function init(){update();document.addEventListener('cafe:languagechange',update);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
