/* Stage 13: lightweight diagnostics and predictable language controls. */
(()=>{'use strict';
const labels={en:{status:'English · Left to right',reload:'Reload page',error:'A page feature encountered an error. Try reloading.'},fa:{status:'فارسی · راست به چپ',reload:'بارگذاری دوباره',error:'در اجرای بخشی از صفحه خطایی رخ داد. صفحه را دوباره بارگذاری کنید.'}};
function init(){
 const main=document.querySelector('main');if(!main)return;
 const banner=document.createElement('div');banner.className='s13-status';banner.setAttribute('role','status');banner.setAttribute('aria-live','polite');banner.innerHTML='<span class="s13-dot" aria-hidden="true"></span><span class="s13-status-label"></span>';
 main.prepend(banner);
 const update=()=>{const lang=document.documentElement.lang==='fa'?'fa':'en';banner.querySelector('.s13-status-label').textContent=labels[lang].status;};
 update();document.addEventListener('cafe:languagechange',update);
 const langButton=document.getElementById('langBtn');if(langButton){langButton.setAttribute('type','button');langButton.setAttribute('title','Change language / تغییر زبان');}
 const date=document.querySelector('#rdate');if(date){const now=new Date();const local=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);date.min=local;}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
