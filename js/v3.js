const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
const products=[
{id:1,n:'اسپرسو اسپشیالتی',en:'Specialty Espresso',p:89000,img:'images/hot.jpeg',cat:'coffee',d:'دبل شات با دانه ۱۰۰٪ عربیکا، رُست متوسط',de:'Double shot with 100% Arabica beans and a medium roast',rate:4.9},
{id:2,n:'لاته کارامل',en:'Caramel Latte',p:135000,img:'images/menu.jpg',cat:'coffee',d:'اسپرسو، شیر بافت‌دار و کارامل دست‌ساز',de:'Espresso, textured milk, and house-made caramel',rate:4.8},
{id:3,n:'کولد برو',en:'Cold Brew',p:128000,img:'images/menu2.jpg',cat:'cold',d:'عصاره‌گیری سرد ۱۸ ساعته، نرم و شفاف',de:'18-hour cold extraction with a smooth, clean finish',rate:4.7},
{id:4,n:'آیس موکا',en:'Iced Mocha',p:145000,img:'images/menu3.jpg',cat:'cold',d:'شکلات تلخ، اسپرسو و شیر سرد',de:'Dark chocolate, espresso, and chilled milk',rate:4.8},
{id:5,n:'چیزکیک قهوه',en:'Coffee Cheesecake',p:168000,img:'images/delight.jpg',cat:'dessert',d:'چیزکیک خامه‌ای با عطر قهوه',de:'Creamy cheesecake with an aromatic coffee note',rate:4.9},
{id:6,n:'کروسان بادام',en:'Almond Croissant',p:149000,img:'images/delighttwo.jpg',cat:'dessert',d:'کروسان کره‌ای با کرم بادام',de:'Buttery croissant filled with almond cream',rate:4.6}
];
const money=n=>new Intl.NumberFormat(document.body.classList.contains('en')?'en-US':'fa-IR').format(n)+(document.body.classList.contains('en')?' Toman':' تومان');
const get=(k,d)=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d)); const set=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
function toast(t){let e=$('#toast');if(!e){e=document.createElement('div');e.id='toast';e.className='toast';document.body.append(e)}e.textContent=t;e.style.display='block';setTimeout(()=>e.style.display='none',2200)}
function renderProducts(){const box=$('#products');if(!box)return;box.innerHTML=products.map(x=>`<article class="card"><a href="product.html?id=${x.id}"><img loading="lazy" src="${x.img}" alt="${x.n}"></a><div class="card-body"><div class="row between"><span class="badge">★ ${x.rate}</span><span class="price">${money(x.p)}</span></div><h3>${document.body.classList.contains('en')?x.en:x.n}</h3><p class="muted">${document.body.classList.contains('en')?x.de:x.d}</p><div class="row"><a class="btn alt" href="product.html?id=${x.id}">${document.body.classList.contains('en')?'Details':'جزئیات'}</a><button class="btn" onclick="addCart(${x.id})">${document.body.classList.contains('en')?'Add to cart':'افزودن به سبد'}</button></div></div></article>`).join('')}
function addCart(id){let c=get('ac_cart',[]),i=c.find(x=>x.id===id);i?i.q++:c.push({id,q:1});set('ac_cart',c);renderCart();toast(localStorage.lang==='fa'?'به سبد خرید اضافه شد':'Added to cart')}
function renderCart(){let c=get('ac_cart',[]),b=$('#cartItems'),count=$('#cartCount');if(count)count.textContent=c.reduce((a,x)=>a+x.q,0);if(!b)return;let total=0;b.innerHTML=c.map(x=>{let p=products.find(z=>z.id===x.id);total+=p.p*x.q;return `<div class="cart-item"><img src="${p.img}"><div><b>${document.body.classList.contains('en')?p.en:p.n}</b><div class="muted">${money(p.p)} × ${x.q}</div><div class="row"><button class="iconbtn" onclick="qty(${x.id},1)">+</button><button class="iconbtn" onclick="qty(${x.id},-1)">−</button></div></div><button class="iconbtn" onclick="removeCart(${x.id})">×</button></div>`}).join('')||'<p class="muted">سبد خرید خالی است.</p>';let t=$('#cartTotal');if(t)t.textContent=money(total)}
function qty(id,d){let c=get('ac_cart',[]),i=c.find(x=>x.id===id);if(i)i.q+=d;c=c.filter(x=>x.q>0);set('ac_cart',c);renderCart()} function removeCart(id){set('ac_cart',get('ac_cart',[]).filter(x=>x.id!==id));renderCart()}
function initShell(){
 const cartBtn=$('#cartBtn'),drawer=$('#cartDrawer'),close=$('#closeCart');
 if(cartBtn&&drawer)cartBtn.addEventListener('click',()=>drawer.classList.add('open'));
 if(close&&drawer)close.addEventListener('click',()=>drawer.classList.remove('open'));
 const theme=$('#themeBtn');if(theme){theme.addEventListener('click',()=>{document.body.classList.toggle('dark');try{localStorage.theme=document.body.classList.contains('dark')?'dark':'light'}catch(e){}});try{if(localStorage.theme==='dark')document.body.classList.add('dark')}catch(e){}}

 document.body.classList.toggle('en',document.documentElement.lang!=='fa');
 try{renderCart()}catch(e){console.warn('Cart initialization skipped',e)}
}
document.addEventListener('DOMContentLoaded',()=>{initShell();try{renderProducts()}catch(e){console.warn('Products unavailable',e)}if('serviceWorker' in navigator)navigator.serviceWorker.getRegistrations().then(regs=>regs.forEach(reg=>reg.unregister())).catch(()=>{})});
