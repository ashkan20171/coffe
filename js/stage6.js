'use strict';
(()=>{
 const fa=()=>document.documentElement.lang==='fa';
 const words={en:{title:'Explore our signature cup',hint:'Drag to rotate · use arrow keys · reset anytime',reset:'Reset view',theme:'Toggle color theme',motion:'Animated experience',still:'Reduced motion'},fa:{title:'فنجان ویژه ما را کشف کنید',hint:'برای چرخاندن بکشید · از کلیدهای جهت‌دار استفاده کنید',reset:'بازنشانی نما',theme:'تغییر تم رنگی',motion:'نمایش متحرک',still:'حرکت کمتر'}};
 const t=k=>words[fa()?'fa':'en'][k];
 function cup(){const hero=document.querySelector('.hero-grid');if(!hero)return;const art=hero.querySelector('img');if(!art)return;
 const wrap=document.createElement('div');wrap.className='s6-showcase';const stage=document.createElement('div');stage.className='s6-stage';stage.tabIndex=0;stage.setAttribute('role','img');stage.setAttribute('aria-label',fa()?'مدل سه‌بعدی نمایشی فنجان قهوه، قابل چرخش':'Interactive CSS 3D coffee cup, rotatable');
 const scene=document.createElement('div');scene.className='s6-scene';scene.innerHTML='<div class="s6-saucer"></div><div class="s6-handle"></div><div class="s6-cup"><div class="s6-rim"><div class="s6-coffee"><span class="s6-latte">✦</span></div></div><div class="s6-logo">A<span>✦</span>C</div></div><div class="s6-shadow"></div>';
 stage.append(scene);const info=document.createElement('div');info.className='s6-info';const heading=document.createElement('h3');heading.textContent=t('title');const hint=document.createElement('p');hint.textContent=t('hint');const reset=document.createElement('button');reset.className='btn alt';reset.type='button';reset.textContent=t('reset');info.append(heading,hint,reset);wrap.append(stage,info);art.insertAdjacentElement('afterend',wrap);art.classList.add('s6-fallback-art');
 let rx=-15,ry=-25,down=false,lastX=0,lastY=0;const render=()=>scene.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;render();
 stage.addEventListener('pointerdown',e=>{down=true;lastX=e.clientX;lastY=e.clientY;stage.setPointerCapture(e.pointerId)});
 stage.addEventListener('pointermove',e=>{if(!down)return;ry+=(e.clientX-lastX)*.45;rx=Math.max(-45,Math.min(35,rx-(e.clientY-lastY)*.35));lastX=e.clientX;lastY=e.clientY;render()});
 stage.addEventListener('pointerup',()=>down=false);stage.addEventListener('pointercancel',()=>down=false);
 stage.addEventListener('keydown',e=>{const v={ArrowLeft:[0,-12],ArrowRight:[0,12],ArrowUp:[-8,0],ArrowDown:[8,0]};if(!v[e.key])return;e.preventDefault();rx=Math.max(-45,Math.min(35,rx+v[e.key][0]));ry+=v[e.key][1];render()});reset.addEventListener('click',()=>{rx=-15;ry=-25;render();stage.focus()});
 }
 function toolbar(){const bar=document.createElement('div');bar.className='s6-toolbar';const theme=document.createElement('button');theme.type='button';theme.className='s6-toggle';theme.setAttribute('aria-label',t('theme'));const light=localStorage.getItem('ac_theme')==='light';document.body.classList.toggle('s6-light',light);theme.textContent=light?'☾':'☀';theme.addEventListener('click',()=>{const next=!document.body.classList.contains('s6-light');document.body.classList.toggle('s6-light',next);localStorage.setItem('ac_theme',next?'light':'dark');theme.textContent=next?'☾':'☀'});bar.append(theme);document.body.append(bar)}
 function reveal(){if(!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('s6-visible');io.unobserve(e.target)}}),{threshold:.07});document.querySelectorAll('main section:not(.hero) .container').forEach(el=>{el.classList.add('s6-reveal');io.observe(el)})}
 document.addEventListener('DOMContentLoaded',()=>{cup();toolbar();reveal()});
})();
