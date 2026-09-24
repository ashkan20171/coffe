'use strict';
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const menu=[
{n:'اسپرسو',d:'دبل شات، دانه منتخب روز',p:'۹۵',c:'coffee',i:'images/cofee.jpg'},
{n:'کاپوچینو',d:'اسپرسو، شیر با بافت مخملی',p:'۱۴۵',c:'coffee',i:'images/menu.jpg'},
{n:'لاته کارامل',d:'اسپرسو، شیر، کارامل دست‌ساز',p:'۱۶۵',c:'coffee',i:'images/menu2.jpg'},
{n:'V60',d:'دم‌آوری دستی با دانه تک‌خاستگاه',p:'۱۸۵',c:'coffee',i:'images/manu.jpg'},
{n:'آیس لاته',d:'اسپرسو، شیر سرد و یخ',p:'۱۶۰',c:'cold',i:'images/menu3.jpg'},
{n:'کولد برو',d:'عصاره‌گیری سرد ۱۸ ساعته',p:'۱۷۵',c:'cold',i:'images/hot.jpeg'},
{n:'لیموناد نعنا',d:'لیمو تازه، نعنا و سودا',p:'۱۴۰',c:'cold',i:'images/menu4.jpg'},
{n:'چیزکیک روز',d:'بافت لطیف با سس فصلی',p:'۱۸۰',c:'dessert',i:'images/delight.jpg'},
{n:'کیک شکلاتی',d:'شکلات تلخ و گاناش تازه',p:'۱۹۵',c:'dessert',i:'images/delighttwo.jpg'},
{n:'کروسان',d:'کره‌ای، تازه و سبک',p:'۱۲۰',c:'dessert',i:'images/manu2.jpg'}];
let expanded=false, filter='all';
function renderMenu(){let items=menu.filter(x=>filter==='all'||x.c===filter);if(!expanded)items=items.slice(0,6);$('#menuGrid').innerHTML=items.map(x=>`<article class="menu-item"><img src="${x.i}" alt="${x.n}" loading="lazy"><div><h3>${x.n}</h3><p>${x.d}</p></div><strong>${x.p} هزار</strong></article>`).join('');$('#showMore').textContent=expanded?'نمایش کمتر':'نمایش همه آیتم‌ها'}renderMenu();
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;expanded=true;renderMenu()});$('#showMore').onclick=()=>{expanded=!expanded;renderMenu()};
const header=$('.site-header');addEventListener('scroll',()=>{header.classList.toggle('sticky',scrollY>100);$('#toTop').classList.toggle('show',scrollY>600)});$('#toTop').onclick=()=>scrollTo({top:0,behavior:'smooth'});
$('#menuBtn').onclick=()=>{const n=$('#nav'),b=$('#menuBtn');n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'))};$$('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('cafe-theme',document.body.classList.contains('dark')?'dark':'light')};if(localStorage.getItem('cafe-theme')==='dark')document.body.classList.add('dark');
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});$$('.reveal').forEach(x=>observer.observe(x));
const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());$('input[type=date]').min=today.toISOString().split('T')[0];$('#reserveForm').onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));localStorage.setItem('cafe-last-reservation',JSON.stringify(data));$('#formMsg').textContent=`✓ ${data.name} عزیز، درخواست رزرو شما در این نسخه نمایشی ثبت شد.`;e.target.reset()};
$('#newsletter').onsubmit=e=>{e.preventDefault();$('#newsMsg').textContent='✓ عضویت شما در نسخه نمایشی ثبت شد.';e.target.reset()};$('#year').textContent=new Date().getFullYear();
const lightbox=$('#lightbox');$$('.gallery-grid button').forEach(b=>b.onclick=()=>{lightbox.classList.add('open');$('img',lightbox).src=$('img',b).src});$('button',lightbox).onclick=()=>lightbox.classList.remove('open');lightbox.onclick=e=>{if(e.target===lightbox)lightbox.classList.remove('open')};
const chat=$('#chat'), body=$('#chatBody'), input=$('#chatInput');function toggleChat(open){chat.classList.toggle('open',open);chat.setAttribute('aria-hidden',!open);if(open)setTimeout(()=>input.focus(),100)}$('#chatFab').onclick=()=>toggleChat(true);$('#chatClose').onclick=()=>toggleChat(false);
function answer(q){q=q.toLowerCase();if(/ساعت|باز|کاری/.test(q))return'هر روز از ساعت ۸ صبح تا ۲۳ در خدمتتون هستیم. ☕';if(/رزرو|میز/.test(q))return'برای رزرو، به بخش «رزرو میز» همین صفحه برید و نام، تاریخ و ساعت رو انتخاب کنید.';if(/پیشنهاد|چی بخور|چی سفارش/.test(q))return'اگر طعم متعادل دوست دارید کاپوچینو، برای قهوه شفاف V60 و برای گزینه خنک آیس‌لاته رو پیشنهاد می‌کنم. کنارشان چیزکیک هم عالیه!';if(/قیمت|منو/.test(q))return'منوی محبوب‌ها و قیمت نمونه هر آیتم در بخش «منو» قرار گرفته. با فیلترها هم می‌تونید قهوه، سرد یا دسر رو جدا ببینید.';if(/آدرس|کجا/.test(q))return'آدرس فعلاً نمونه است و باید پیش از انتشار سایت با آدرس واقعی کافه جایگزین شود.';if(/سلام|درود/.test(q))return'سلام! خوش اومدی 🌿 امروز بیشتر هوس قهوه گرم داری یا یک نوشیدنی خنک؟';return'می‌تونم درباره منو، پیشنهاد نوشیدنی، ساعات کاری و رزرو راهنمایی‌تون کنم. برای پاسخ‌های واقعاً هوشمند و آنلاین، این رابط آماده اتصال به API هوش مصنوعی در بک‌اند است.'}
function send(q){if(!q.trim())return;body.insertAdjacentHTML('beforeend',`<div class="user-msg">${escapeHtml(q)}</div>`);setTimeout(()=>{body.insertAdjacentHTML('beforeend',`<div class="bot-msg">${answer(q)}</div>`);body.scrollTop=body.scrollHeight},350);body.scrollTop=body.scrollHeight}function escapeHtml(s){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}$('#chatForm').onsubmit=e=>{e.preventDefault();send(input.value);input.value=''};$$('.quick button').forEach(b=>b.onclick=()=>send(b.textContent));

// Enhanced discovery, personalization and loyalty features
const favKey='cafe-favorites';
const getFavs=()=>JSON.parse(localStorage.getItem(favKey)||'[]');
const saveFavs=v=>localStorage.setItem(favKey,JSON.stringify(v));
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
const oldRender=renderMenu;
renderMenu=function(){oldRender();const favs=getFavs();$$('.menu-item').forEach((card,idx)=>{const name=$('h3',card).textContent;const b=document.createElement('button');b.className='fav-btn'+(favs.includes(name)?' active':'');b.setAttribute('aria-label','افزودن به علاقه‌مندی‌ها');b.textContent=favs.includes(name)?'♥':'♡';b.onclick=()=>toggleFav(name);card.appendChild(b)});renderFavs()};renderMenu();
function toggleFav(name){let f=getFavs();f=f.includes(name)?f.filter(x=>x!==name):[...f,name];saveFavs(f);renderMenu();toast(f.includes(name)?'به علاقه‌مندی‌ها اضافه شد':'از علاقه‌مندی‌ها حذف شد')}
function renderFavs(){const box=$('#favoritesList');if(!box)return;const f=getFavs();box.innerHTML=f.length?f.map(x=>`<button data-fav="${x}">♥ ${x}</button>`).join(''):'<span>هنوز آیتمی ذخیره نشده.</span>';$$('[data-fav]',box).forEach(b=>b.onclick=()=>toggleFav(b.dataset.fav))}
const tasteMap={strong:['اسپرسو','V60'],milky:['کاپوچینو','لاته کارامل'],cold:['کولد برو','آیس لاته'],sweet:['چیزکیک روز','کیک شکلاتی']};
$$('[data-taste]').forEach(b=>b.onclick=()=>{const names=tasteMap[b.dataset.taste], picks=menu.filter(x=>names.includes(x.n));$('#tasteResult').innerHTML=`پیشنهاد امروز: <strong>${picks.map(x=>x.n).join(' یا ')}</strong> — ${picks[0].d}`});
const searchModal=$('#searchModal'),searchInput=$('#menuSearch');
function doSearch(q=''){q=q.trim().toLowerCase();const items=q?menu.filter(x=>(x.n+' '+x.d+' '+x.c).toLowerCase().includes(q)):menu.slice(0,5);$('#searchResults').innerHTML=items.length?items.map(x=>`<div class="search-result"><img src="${x.i}" alt=""><div><strong>${x.n}</strong><p>${x.d}</p></div><b>${x.p} هزار</b></div>`).join(''):'<p>نتیجه‌ای پیدا نشد.</p>'}
$('#searchBtn').onclick=()=>{searchModal.classList.add('open');searchModal.setAttribute('aria-hidden','false');doSearch();setTimeout(()=>searchInput.focus(),50)};$('#searchClose').onclick=()=>searchModal.classList.remove('open');searchModal.onclick=e=>{if(e.target===searchModal)searchModal.classList.remove('open')};searchInput.oninput=e=>doSearch(e.target.value);addEventListener('keydown',e=>{if(e.key==='Escape')searchModal.classList.remove('open');if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();$('#searchBtn').click()}});
const stampKey='cafe-stamps';function drawStamps(){const n=Math.min(8,+localStorage.getItem(stampKey)||0);$('#stampCount').textContent=`${n.toLocaleString('fa-IR')} / ۸`;$('#stamps').innerHTML=Array.from({length:8},(_,i)=>`<span class="stamp-dot ${i<n?'on':''}">${i<n?'☕':''}</span>`).join('');$('#rewardText').textContent=n>=8?'🎁 تبریک! در نسخه واقعی، جایزه شما آماده است.':'با ۸ خرید، یک نوشیدنی مهمان ما باشید.'}drawStamps();$('#addStamp').onclick=()=>{let n=Math.min(8,(+localStorage.getItem(stampKey)||0)+1);localStorage.setItem(stampKey,n);drawStamps();toast('یک مهر به کارت وفاداری اضافه شد')};
addEventListener('online',()=>toast('اتصال اینترنت برقرار شد'));addEventListener('offline',()=>toast('شما آفلاین هستید؛ بخش‌های اصلی همچنان قابل مشاهده‌اند'));
