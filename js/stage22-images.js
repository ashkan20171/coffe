(()=>{'use strict';
const placeholder='images/coffee-3d-art.webp';
function check(root=document){root.querySelectorAll('img').forEach(img=>{
 if(img.dataset.s22Checked)return;img.dataset.s22Checked='1';
 if(img.closest('.hero')){img.loading='eager';img.fetchPriority='high';}
 img.addEventListener('error',()=>{if(img.dataset.imageError==='true')return;img.dataset.imageError='true';img.src=placeholder;},{once:true});
 if(img.complete&&img.naturalWidth===0&&img.getAttribute('src')){img.dispatchEvent(new Event('error'));}
 });}
function init(){check();document.addEventListener('cafe:languagechange',()=>check());document.addEventListener('cafe:contentupdated',e=>check(e.detail?.root||document));}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
