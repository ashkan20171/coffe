/* Stage 19: lightweight, opt-in diagnostics and reliable localization controls. */
(()=>{'use strict';
const enabled=new URLSearchParams(location.search).has('diagnostics');
const errors=[];
if(enabled){
 window.addEventListener('error',e=>{errors.push(String(e.message||'Unknown error'));render();});
 window.addEventListener('unhandledrejection',e=>{errors.push(String(e.reason||'Promise rejected'));render();});
}
let panel;
function render(){if(!panel)return;const lang=document.documentElement.lang;
 panel.querySelector('[data-s19-lang]').textContent=lang.toUpperCase()+' / '+document.documentElement.dir.toUpperCase();
 panel.querySelector('[data-s19-errors]').textContent=errors.length?errors.slice(-3).join(' | '):'No captured errors';}
function init(){
 const btn=document.getElementById('langBtn');if(btn){btn.type='button';btn.setAttribute('aria-controls','primary-navigation');}
 if(!enabled)return;
 panel=document.createElement('aside');panel.className='s19-diagnostics';panel.setAttribute('aria-label','Development diagnostics');
 panel.innerHTML='<strong>Developer diagnostics</strong><div>Language: <span data-s19-lang></span></div><div>Errors: <span data-s19-errors></span></div><button type="button" data-s19-toggle>Toggle language</button><button type="button" data-s19-close>Close</button>';
 document.body.append(panel);
 panel.querySelector('[data-s19-toggle]').addEventListener('click',()=>window.cafeI18n?.setLanguage(document.documentElement.lang==='en'?'fa':'en'));
 panel.querySelector('[data-s19-close]').addEventListener('click',()=>panel.remove());
 document.addEventListener('cafe:languagechange',render);render();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
