const LS_KEY='neon_products_v1';
function getProducts(){ try{return JSON.parse(localStorage.getItem(LS_KEY))||[]}catch{return[]} }
function saveProducts(list){ localStorage.setItem(LS_KEY, JSON.stringify(list)); }
function money(n){ const num=Number(n||0); return num%1===0? String(num) : num.toFixed(2); }
(function seed(){
  const data=getProducts();
  if(!data.length){
    saveProducts([
      {id:1,name:'Steam Key – GTA V',price:25,tag:'Steam',image:'./assets/icons/key.svg'},
      {id:2,name:'Steam Key – Red Dead Redemption 2',price:30,tag:'Steam',image:'./assets/icons/key.svg'},
      {id:3,name:'Steam DLC – Cyberpunk 2077: Phantom Liberty',price:20,tag:'DLC',image:'./assets/icons/key.svg'},
      {id:4,name:'Steam Wallet $10',price:9.5,tag:'Wallet',image:'./assets/icons/card.svg'},
      {id:5,name:'Steam Wallet $50',price:47,tag:'Wallet',image:'./assets/icons/card.svg'},
      {id:6,name:'Xbox Gift Card $25',price:24,tag:'Gift Card',image:'./assets/icons/card.svg'},
      {id:7,name:'PlayStation Store Card $50',price:46,tag:'Gift Card',image:'./assets/icons/card.svg'},
      {id:8,name:'Nintendo eShop $20',price:19,tag:'Gift Card',image:'./assets/icons/card.svg'},
      {id:9,name:'Xbox Game Pass Ultimate – 1 Month',price:10,tag:'Subscription',image:'./assets/icons/sub.svg'},
      {id:10,name:'EA Play – 12 Months',price:30,tag:'Subscription',image:'./assets/icons/sub.svg'},
      {id:11,name:'Windows 11 Pro Key',price:12,tag:'Software',image:'./assets/icons/software.svg'},
      {id:12,name:'Microsoft Office 2021',price:20,tag:'Software',image:'./assets/icons/software.svg'},
      {id:13,name:'Adobe Photoshop CC – 1 Year',price:45,tag:'Software',image:'./assets/icons/software.svg'},
      {id:14,name:'Riot Points 1380',price:10,tag:'Gift Card',image:'./assets/icons/card.svg'},
      {id:15,name:'Blizzard Balance $20',price:18.5,tag:'Gift Card',image:'./assets/icons/card.svg'},
      {id:16,name:'Epic Games Gift Card $25',price:24,tag:'Gift Card',image:'./assets/icons/card.svg'},
      {id:17,name:'Netflix Premium – 1 Month',price:8,tag:'Subscription',image:'./assets/icons/sub.svg'},
      {id:18,name:'Spotify Premium – 1 Month',price:5,tag:'Subscription',image:'./assets/icons/sub.svg'},
      {id:19,name:'Ubisoft Key – Assassin’s Creed',price:19,tag:'Steam',image:'./assets/icons/key.svg'},
      {id:20,name:'Origin Key – Battlefield V',price:16,tag:'Steam',image:'./assets/icons/key.svg'}
    ]);
  }
})();