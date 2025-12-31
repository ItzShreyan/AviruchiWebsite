const CART_KEY = "aviruchi_cart_v9";
const CHECKOUT_GATE_KEY = "aviruchi_checkout_gate_v7";
const DELIVERY_FEE = 3.99;

const CATEGORIES = [
  "Snacks",
  "Sweets",
  "Podis / Spice Powders",
  "Pickles",
  "Papadums",
  "Mixes",
  "Other"
];

const DEFAULT_PACKS = [
  { label: "250g (TBD)", grams: 250, price: 0 },
  { label: "500g (TBD)", grams: 500, price: 0 },
  { label: "1kg (TBD)", grams: 1000, price: 0 }
];

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1604908554027-986b8a8b5b5b?q=80&w=1200&auto=format&fit=crop";

function mk(id, name, category, flags = {}) {
  return {
    id,
    name,
    category,
    packs: DEFAULT_PACKS,
    img: PLACEHOLDER_IMG,
    tags: `${name} ${category}`.toLowerCase(),
    festive: !!flags.festive,
    bestSeller: !!flags.bestSeller
  };
}

const PRODUCTS = [
  ...[
    ["Murukku",{bestSeller:true}],
    ["Mixture",{bestSeller:true}],
    ["Banana Chips",{festive:true}],
    ["Ribbon Pakoda",{}],
    ["Omapodi",{}],
    ["Kara Boondi",{}],
    ["Thattaai",{}],
    ["Nippattu",{}],
    ["Cornflakes Mixture",{}]
  ].map(([n,f],i)=>mk(`snacks-${i}`, n, "Snacks", f)),

  ...[
    ["Kaju Katli",{festive:true,bestSeller:true}],
    ["Gulab Jamun",{festive:true,bestSeller:true}],
    ["Rasgulla",{bestSeller:true}],
    ["Rasmalai",{festive:true}],
    ["Jalebi",{festive:true}],
    ["Ladoo",{festive:true}],
    ["Mysore Pak",{bestSeller:true}],
    ["Soan Papdi",{festive:true}],
    ["Badam Barfi",{festive:true}],
    ["Halwa",{}],
    ["Peda",{}],
    ["Kalakand",{}],
    ["Modak",{festive:true}]
  ].map(([n,f],i)=>mk(`sweets-${i}`, n, "Sweets", f)),

  ...[
    ["Idli Podi",{bestSeller:true}],
    ["Sambar Powder",{bestSeller:true}],
    ["Rasam Powder",{}],
    ["Puliyogare Powder",{}],
    ["Vangibath Powder",{}],
    ["Biryani Masala",{}],
    ["Garam Masala",{}],
    ["Chilli Powder",{}],
    ["Turmeric Powder",{}],
    ["Coriander Powder",{}]
  ].map(([n,f],i)=>mk(`podi-${i}`, n, "Podis / Spice Powders", f)),

  ...[
    ["Mango Pickle",{bestSeller:true}],
    ["Lime Pickle",{}],
    ["Mixed Veg Pickle",{}],
    ["Garlic Pickle",{}],
    ["Gongura Pickle",{bestSeller:true}],
    ["Tomato Pickle",{}],
    ["Amla Pickle",{}]
  ].map(([n,f],i)=>mk(`pickle-${i}`, n, "Pickles", f)),

  ...[
    ["Plain Papadums",{bestSeller:true}],
    ["Pepper Papadums",{}],
    ["Jeera Papadums",{}],
    ["Garlic Papadums",{}]
  ].map(([n,f],i)=>mk(`papad-${i}`, n, "Papadums", f)),

  ...[
    ["Dosa Mix",{bestSeller:true}],
    ["Idli Mix",{}],
    ["Vada Mix",{}],
    ["Upma Mix",{}],
    ["Pongal Mix",{festive:true}],
    ["Rava Dosa Mix",{}],
    ["Paniyaram Mix",{}]
  ].map(([n,f],i)=>mk(`mix-${i}`, n, "Mixes", f)),

  ...[
    ["Ghee",{festive:true}],
    ["Jaggery",{}],
    ["Filter Coffee Powder",{bestSeller:true}],
    ["Tea Masala",{}],
    ["Coconut Oil",{}],
    ["Tamarind",{}],
    ["Dal Pack",{}]
  ].map(([n,f],i)=>mk(`other-${i}`, n, "Other", f))
];

const money = n => Number(n).toFixed(2);
const qs = (s,r=document)=>r.querySelector(s);
const qsa = (s,r=document)=>[...r.querySelectorAll(s)];

function safe(fn){ try{ fn(); } catch(e){ console.error(e); } }

/* Cart */
function getCart(){ try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } }
function setCart(lines){ localStorage.setItem(CART_KEY, JSON.stringify(lines)); updateCartCount(); }
function updateCartCount(){
  const count = getCart().reduce((s,l)=>s+l.qty,0);
  qsa(".cart-count").forEach(el=> el.textContent = count);
}
function addToCart(productId, packIndex, qty){
  const lines = getCart();
  const existing = lines.find(l=> l.id===productId && l.packIndex===packIndex);
  if(existing) existing.qty += qty;
  else lines.push({id:productId, packIndex, qty});
  setCart(lines);
}
function detailedLines(){
  return getCart().map(l=>{
    const p = PRODUCTS.find(x=>x.id===l.id);
    const pack = p?.packs?.[l.packIndex] || DEFAULT_PACKS[0];
    return {...l, product:p, pack, lineTotal:(pack.price||0)*l.qty};
  });
}
function totals(){
  const lines = detailedLines();
  const items = lines.reduce((s,l)=>s+l.qty,0);
  const subtotal = lines.reduce((s,l)=>s+l.lineTotal,0);
  const delivery = lines.length ? DELIVERY_FEE : 0;
  return {items, subtotal, delivery, total: subtotal + delivery};
}

/* Nav */
function setupNav(){
  const btn = qs(".menu-btn");
  const nav = qs(".nav-links");
  if(btn && nav) btn.addEventListener("click", ()=> nav.classList.toggle("open"));

  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  qsa(".nav-links a").forEach(a=>{
    if((a.getAttribute("href")||"").toLowerCase()===current) a.classList.add("active");
  });
}

/* Search */
function setupHomeSearch(){
  const form = qs("#homeSearchForm");
  const input = qs("#homeSearchInput");
  if(!form || !input) return;
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const q = input.value.trim();
    location.href = q ? `products.html?search=${encodeURIComponent(q)}` : "products.html";
  });
}

/* Reveal */
function setupReveal(){
  const els = qsa(".reveal");
  if(!els.length) return;

  // If IntersectionObserver isn't available, just show everything
  if(!("IntersectionObserver" in window)) {
    els.forEach(el=> el.classList.add("is-visible"));
    return;
  }

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });

  els.forEach(el=> obs.observe(el));
}

/* Chips */
function renderCategoryChips(el, baseHref){
  if(!el) return;
  el.innerHTML = CATEGORIES
    .map(c=>`<a class="chip reveal" href="${baseHref}#${encodeURIComponent(c)}">${c}</a>`)
    .join("");
}

/* Product UI */
function productCard(p){
  const priced = p.packs.some(x=>x.price>0);
  const priceText = priced
    ? `£${money(Math.min(...p.packs.map(x=>x.price)))}+`
    : "Price: TBD";

  return `
  <article class="card product reveal" data-id="${p.id}" data-tags="${p.tags}">
    <img class="product-img" src="${p.img}" alt="${p.name}">
    <div class="product-body">
      <div class="product-top">
        <div>
          <div class="product-title">${p.name}</div>
          <div class="product-meta">${p.category}</div>
        </div>
        <div class="product-price">${priceText}</div>
      </div>
      <div class="pack">
        <select data-pack>
          ${p.packs.map((pk,i)=>`<option value="${i}">${pk.label}${pk.price>0?` — £${money(pk.price)}`:""}</option>`).join("")}
        </select>
      </div>
      <div class="qty-add">
        <div class="qty">
          <button type="button" data-dec>−</button>
          <input value="1" readonly>
          <button type="button" data-inc>+</button>
        </div>
        <button type="button" class="add" data-add>Add to basket</button>
      </div>
    </div>
  </article>`;
}

function wireProductGrid(grid){
  if(!grid) return;
  grid.addEventListener("click",(e)=>{
    const card = e.target.closest("[data-id]");
    if(!card) return;

    const qtyInput = card.querySelector(".qty input");
    const packSelect = card.querySelector("select[data-pack]");
    const addBtn = card.querySelector("button[data-add]");

    if(e.target.matches("[data-inc]")){
      qtyInput.value = String(Number(qtyInput.value)+1);
    } else if(e.target.matches("[data-dec]")){
      qtyInput.value = String(Math.max(1, Number(qtyInput.value)-1));
    } else if(e.target.matches("[data-add]")){
      addToCart(card.dataset.id, Number(packSelect.value), Number(qtyInput.value)||1);
      addBtn.classList.add("added");
      addBtn.textContent = "Added ✓";
      setTimeout(()=>{ addBtn.classList.remove("added"); addBtn.textContent="Add to basket"; }, 900);
    }
  });
}

/* Home picks */
function renderHomePicks(){
  const grid = qs("#favGrid");
  if(!grid) return;
  const picks = [
    PRODUCTS.find(p=>p.name==="Kaju Katli"),
    PRODUCTS.find(p=>p.name==="Murukku"),
    PRODUCTS.find(p=>p.name==="Mango Pickle"),
    PRODUCTS.find(p=>p.name==="Idli Podi")
  ].filter(Boolean);
  grid.innerHTML = picks.map(productCard).join("");
  wireProductGrid(grid);
}

/* Products page */
function renderRecommendations(){
  const festiveGrid = qs("#festiveGrid");
  const bestGrid = qs("#bestSellerGrid");

  if(festiveGrid){
    const festive = PRODUCTS.filter(p=>p.festive).slice(0,8);
    festiveGrid.innerHTML = festive.map(productCard).join("");
    wireProductGrid(festiveGrid);
  }
  if(bestGrid){
    const best = PRODUCTS.filter(p=>p.bestSeller).slice(0,8);
    bestGrid.innerHTML = best.map(productCard).join("");
    wireProductGrid(bestGrid);
  }
}

function renderProductsPage(){
  const wrap = qs("#productsWrap");
  const search = qs("#productsSearch");
  if(!wrap) return;

  const params = new URLSearchParams(location.search);
  const initial = params.get("search") || "";
  if(search) search.value = initial;

  function render(term=""){
    const q = term.trim().toLowerCase();
    wrap.innerHTML = CATEGORIES.map(cat=>{
      const items = PRODUCTS.filter(p=>p.category===cat).filter(p=>!q || p.tags.includes(q));
      if(!items.length) return "";
      return `
        <section id="${encodeURIComponent(cat)}" style="margin-bottom:22px">
          <div class="section-head">
            <h2>${cat}</h2>
            <div class="small">${items.length} items</div>
          </div>
          <div class="grid" data-grid>
            ${items.map(productCard).join("")}
          </div>
        </section>
      `;
    }).join("") || `<div class="card" style="padding:14px">No results.</div>`;

    qsa("[data-grid]", wrap).forEach(wireProductGrid);
    setupReveal();
  }

  render(initial);

  search?.addEventListener("input", ()=> render(search.value));
  qs("#productsFilterForm")?.addEventListener("submit",(e)=>{
    e.preventDefault();
    render(search?.value || "");
  });
}

/* Basket */
function renderBasketPage(){
  const listEl = qs("#basketList");
  if(!listEl) return;

  const emptyEl = qs("#basketEmpty");
  const sumItems = qs("#sumItems");
  const sumSub = qs("#sumSubtotal");
  const sumDel = qs("#sumDelivery");
  const sumTotal = qs("#sumTotal");
  const checkoutBtn = qs("#goCheckout");

  const lines = detailedLines();
  if(!lines.length){
    emptyEl.style.display="block";
    listEl.innerHTML="";
    checkoutBtn.disabled = true;
  } else {
    emptyEl.style.display="none";
    checkoutBtn.disabled = false;

    listEl.innerHTML = lines.map((l,idx)=>`
      <div class="basket-item reveal">
        <img class="basket-thumb" src="${l.product.img}" alt="${l.product.name}">
        <div>
          <div style="font-weight:900">${l.product.name}</div>
          <div class="small">${l.pack.label}</div>
          <div style="display:flex;gap:12px;align-items:center;margin-top:6px;flex-wrap:wrap">
            <div class="qty">
              <button type="button" data-bdec="${idx}">−</button>
              <input value="${l.qty}" readonly>
              <button type="button" data-binc="${idx}">+</button>
            </div>
            <button class="remove" type="button" data-brem="${idx}">Remove</button>
          </div>
        </div>
        <div style="font-weight:900">£${money(l.lineTotal)}</div>
      </div>
    `).join("");

    listEl.onclick = (e)=>{
      const dec = e.target.closest("[data-bdec]");
      const inc = e.target.closest("[data-binc]");
      const rem = e.target.closest("[data-brem]");

      if(dec){ changeQty(Number(dec.dataset.bdec),-1); renderBasketPage(); }
      if(inc){ changeQty(Number(inc.dataset.binc),+1); renderBasketPage(); }
      if(rem){ removeLine(Number(rem.dataset.brem)); renderBasketPage(); }
    };
  }

  const t = totals();
  sumItems.textContent = t.items;
  sumSub.textContent = money(t.subtotal);
  sumDel.textContent = money(t.delivery);
  sumTotal.textContent = money(t.total);

  checkoutBtn.onclick = ()=>{
    if(!detailedLines().length) return;
    sessionStorage.setItem(CHECKOUT_GATE_KEY,"1");
    location.href = "checkout.html";
  };

  setupReveal();

  function changeQty(index,delta){
    const lines = getCart();
    if(!lines[index]) return;
    lines[index].qty += delta;
    if(lines[index].qty<=0) lines.splice(index,1);
    setCart(lines);
  }
  function removeLine(index){
    const lines = getCart();
    lines.splice(index,1);
    setCart(lines);
  }
}

/* Checkout */
function renderCheckoutPage(){
  const form = qs("#checkoutForm");
  const summary = qs("#checkoutSummary");
  if(!form || !summary) return;

  if(sessionStorage.getItem(CHECKOUT_GATE_KEY)!=="1"){
    location.href = "basket.html";
    return;
  }

  const lines = detailedLines();
  if(!lines.length){ location.href="basket.html"; return; }

  const t = totals();
  summary.innerHTML = lines.map(l=>`
    <div style="display:flex;justify-content:space-between;margin:6px 0">
      <span>${l.qty}× ${l.product.name} (${l.pack.label})</span>
      <strong>£${money(l.lineTotal)}</strong>
    </div>
  `).join("") + `
    <div style="border-top:1px dashed var(--line);margin-top:10px;padding-top:10px">
      <div style="display:flex;justify-content:space-between"><span>Subtotal</span><strong>£${money(t.subtotal)}</strong></div>
      <div style="display:flex;justify-content:space-between"><span>Delivery</span><strong>£${money(t.delivery)}</strong></div>
      <div style="display:flex;justify-content:space-between;margin-top:8px"><span>Total</span><strong>£${money(t.total)}</strong></div>
    </div>
  `;

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    localStorage.removeItem(CART_KEY);
    sessionStorage.removeItem(CHECKOUT_GATE_KEY);
    alert("Order placed! (Demo)");
    location.href="index.html";
  });

  setupReveal();
}

/* INIT (runs even if defer missing) */
function init(){
  // enable JS-only effects
  document.documentElement.classList.add("js");

  setupNav();
  updateCartCount();

  setupHomeSearch();

  renderCategoryChips(qs("#categoryChips"), "products.html");
  renderCategoryChips(qs("#productsCategoryChips"), "");

  if(qs("#favGrid")) renderHomePicks();

  if(qs("#productsWrap")){
    renderRecommendations();
    renderProductsPage();
  }

  if(qs("#basketList")) renderBasketPage();
  if(qs("#checkoutForm")) renderCheckoutPage();

  setupReveal();
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", ()=> safe(init));
else safe(init);
