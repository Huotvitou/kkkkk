let editingId=null;
function logout(){ localStorage.removeItem('isLoggedIn'); location.href='./login.html'; }
function clearForm(){
  editingId=null;
  document.getElementById('name').value='';
  document.getElementById('price').value='';
  document.getElementById('image').value='';
  document.getElementById('tag').value='';
  document.getElementById('saveBtn').textContent='Save';
}
function renderAdminList(){
  const list=getProducts();
  const wrap=document.getElementById('adminList');
  if(!list.length){ wrap.innerHTML='<div class="empty">No data</div>'; return; }
  wrap.innerHTML=list.map(p=>`
    <div class="list-admin-item">
      <img src="${p.image||'../assets/icons/key.svg'}" alt="${p.name}"/>
      <div style="flex:1">
        <div><strong>${p.name}</strong></div>
        <div>$${money(p.price)} • <span class="badge">${p.tag||'Digital'}</span></div>
      </div>
      <div class="chips">
        <button class="btn btn-ghost" onclick="editProduct('${p.id}')">Edit</button>
        <button class="btn btn-warn" onclick="removeProduct('${p.id}')">Delete</button>
      </div>
    </div>`).join('');
}
function editProduct(id){
  const p=getProducts().find(x=>String(x.id)===String(id));
  if(!p) return;
  editingId=p.id;
  document.getElementById('name').value=p.name||'';
  document.getElementById('price').value=p.price||'';
  document.getElementById('image').value=p.image||'';
  document.getElementById('tag').value=p.tag||'';
  document.getElementById('saveBtn').textContent='Update';
  window.scrollTo({top:0,behavior:'smooth'});
}
function removeProduct(id){
  if(!confirm('Delete this product?')) return;
  saveProducts(getProducts().filter(x=>String(x.id)!==String(id)));
  renderAdminList();
}
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('prodForm').addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const price=parseFloat(document.getElementById('price').value||'0');
    const image=document.getElementById('image').value.trim();
    const tag=document.getElementById('tag').value.trim();
    if(!name||isNaN(price)){ alert('Fill name and valid price'); return; }
    let list=getProducts();
    if(editingId){ list=list.map(p=>String(p.id)===String(editingId)? {...p,name,price,image,tag}:p); }
    else{ list.push({id:Date.now(),name,price,image,tag}); }
    saveProducts(list); clearForm(); renderAdminList();
  });
  document.getElementById('resetBtn').addEventListener('click',clearForm);
  renderAdminList();
});
