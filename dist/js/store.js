const TELEGRAM_USERNAME='Vitouhuot';
function render(list){
  const grid=document.getElementById('grid');
  if(!list.length){ grid.innerHTML='<div class="empty">No products yet</div>'; return; }
  grid.innerHTML=list.map(p=>`
    <article class="card">
      <img class="thumb" src="${p.image||'./assets/icons/key.svg'}" alt="${p.name}"/>
      <div class="body">
        <span class="badge">${p.tag||'Digital'}</span>
        <h3>${p.name}</h3>
        <div class="price">$${money(p.price)}</div>
        <button class="btn btn-primary" onclick="buy('${encodeURIComponent(p.name)}','${money(p.price)}')">Buy on Telegram</button>
      </div>
    </article>`).join('');
}
function buy(name,price){
  const text=encodeURIComponent(`Hello, I want to buy: ${decodeURIComponent(name)} ($${price})`);
  window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${text}`,'_blank');
}
function init(){
  const q=document.getElementById('search');
  const f=document.getElementById('filter');
  const data=getProducts();
  render(data);
  function apply(){
    const s=(q.value||'').toLowerCase();
    const t=(f.value||'').toLowerCase();
    render(getProducts().filter(p=>{
      const hit=(p.name||'').toLowerCase().includes(s)||(p.tag||'').toLowerCase().includes(s);
      const ok=t? (String(p.tag||'').toLowerCase()===t):true;
      return hit&&ok;
    }));
  }
  q.addEventListener('input',apply); f.addEventListener('change',apply);
}
document.addEventListener('DOMContentLoaded',init);
