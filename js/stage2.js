/* Stage 2: accessible, bilingual client-side menu discovery. */
(() => { 'use strict';
 const isFa = () => localStorage.getItem('lang') === 'fa';
 document.addEventListener('DOMContentLoaded', () => {
   const search=document.getElementById('menuSearch'), count=document.getElementById('menuCount');
   if(!search || !count || typeof products === 'undefined') return;
   const buttons=[...document.querySelectorAll('[data-category]')];
   let category='all';
   const norm=s=>String(s).normalize('NFKC').toLocaleLowerCase().trim();
   const render=()=>{
     const q=norm(search.value);
     const matched=products.filter(p=>(category==='all'||p.cat===category)&&norm([p.n,p.en,p.d,p.de].join(' ')).includes(q));
     const box=document.getElementById('products');
     if(!box) return;
     // Render using the existing trusted catalog, never user-provided HTML.
     box.replaceChildren();
     for(const item of matched){
       const card=document.createElement('article');card.className='card';
       const link=document.createElement('a');link.href='product.html?id='+encodeURIComponent(item.id);
       const img=document.createElement('img');img.src=item.img;img.alt=isFa()?item.n:item.en;img.loading='lazy';link.append(img);
       const body=document.createElement('div');body.className='card-body';
       const heading=document.createElement('h3');heading.textContent=isFa()?item.n:item.en;
       const desc=document.createElement('p');desc.className='muted';desc.textContent=isFa()?item.d:item.de;
       const price=document.createElement('strong');price.className='price';price.textContent=money(item.p);
       const actions=document.createElement('div');actions.className='row';
       const details=document.createElement('a');details.className='btn alt';details.href=link.href;details.textContent=isFa()?'جزئیات':'Details';
       const add=document.createElement('button');add.type='button';add.className='btn';add.textContent=isFa()?'افزودن به سبد':'Add to cart';add.addEventListener('click',()=>addCart(item.id));
       actions.append(details,add);body.append(price,heading,desc,actions);card.append(link,body);box.append(card);
     }
     count.textContent=isFa()?`${matched.length} محصول یافت شد`:`${matched.length} items found`;
     if(!matched.length){const empty=document.createElement('p');empty.className='muted';empty.textContent=isFa()?'محصولی پیدا نشد.':'No matching products. Try another search.';box.append(empty)}
   };
   if(isFa()){
     document.getElementById('searchLabel').textContent='جست‌وجوی نوشیدنی و دسر';search.placeholder='نام یا مواد تشکیل‌دهنده…';
     const labels=['همه','قهوه','نوشیدنی سرد','دسر'];buttons.forEach((b,i)=>b.textContent=labels[i]);
   }
   search.addEventListener('input',render);
   buttons.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.category;buttons.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render()}));
   buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category==='all')));
   const date=document.getElementById('rdate');if(date){date.min=new Date().toLocaleDateString('en-CA')}
   render();
 });
})();
