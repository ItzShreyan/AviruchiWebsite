// Shared script for all pages

const CART_KEY = "aviruchi_cart_v4";
const CHECKOUT_GATE_KEY = "aviruchi_checkout_gate_v2";
const DELIVERY_FEE = 3.99;

// --- Product catalogue (replace/extend with your full list) ---
const PRODUCTS = [
  {
    id: "snacks-murukku",
    name: "Crispy Murukku",
    category: "Snacks",
    baseSizes: [
      { label: "200g", grams: 200, price: 3.99 },
      { label: "400g", grams: 400, price: 6.99 }
    ],
    img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    tags: "murukku crunchy savoury snack"
  },
  {
    id: "sweets-kaju",
    name: "Kaju Katli",
    category: "Sweets",
    baseSizes: [
      { label: "250g", grams: 250, price: 7.99 },
      { label: "500g", grams: 500, price: 14.99 },
      { label: "1kg", grams: 1000, price: 27.99 }
    ],
    img: "https://images.unsplash.com/photo-1608031833506-a3f60bd7a0c5?q=80&w=800&auto=format&fit=crop",
    tags: "kaju katli cashew sweet barfi"
  },
  {
    id: "sweets-gulab",
    name: "Gulab Jamun",
    category: "Sweets",
    baseSizes: [
      { label: "6 pcs", grams: 250, price: 4.99 },
      { label: "12 pcs", grams: 500, price: 8.99 }
    ],
    img: "https://images.unsplash.com/photo-1626204574812-fd2f6d5b3e2c?q=80&w=800&auto=format&fit=crop",
    tags: "gulab jamun syrup dessert"
  },
  {
    id: "sweets-rasgulla",
    name: "Rasgulla",
    category: "Sweets",
    baseSizes: [
      { label: "10 pcs", grams: 400, price: 7.49 }
    ],
    img: "https://images.unsplash.com/photo-1668236548746-8e59b9a5b1d7?q=80&w=800&auto=format&fit=crop",
    tags: "rasgulla sponge cheese sweet"
  },
  {
    id: "podi-idli",
    name: "Idli Podi",
    category: "Podis / Spice Powders",
    baseSizes: [
      { label: "200g", grams: 200, price: 3.49 },
      { label: "500g", grams: 500, price: 7.99 }
    ],
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    tags: "idli podi spice powder"
  },
  {
    id: "pickle-mango",
    name: "Spicy Mango Pickle",
    category: "Pickles",
    baseSizes: [
      { label: "250g", grams: 250, price: 3.99 },
      { label: "500g", grams: 500, price: 6.99 }
    ],
    img: "https://images.unsplash.com/photo-1592997572835-2c087c87ac9d?q=80&w=800&auto=format&fit=crop",
    tags: "mango pickle achar"
  },
  {
    id: "papadums-plain",
    name: "Plain Papadums",
    category: "Papadums",
    baseSizes: [
      { label: "200g", grams: 200, price: 2.99 }
    ],
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
    tags: "papad pappad papadum"
  },
  {
    id: "mix-dosa",
    name: "Instant Dosa Mix",
    category: "Mixes",
    baseSizes: [
      { label: "500g", grams: 500, price: 4.99 },
      { label: "1kg", grams: 1000, price: 8.99 }
    ],
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
    tags: "dosa mix batter"
  },
  {
    id: "other-namkeen",
    name: "Special Namkeen Mix",
    category: "Other",
    baseSizes: [
      { label: "400g", grams: 400, price: 5.99 }
    ],
    img: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=800&auto=format&fit=crop",
    tags: "namkeen mixture snack"
  }
];

// categories from spec [file:73]
const CATEGORIES = [
  "All",
  "Snacks",
  "Sweets",
  "Podis / Spice Powders",
  "Pickles",
  "Papadums",
  "Mixes",
  "Other"
];

const money = n => Number(n).toFixed(2);
const qs = (s, r=document) => r.querySelector(s);
const qsa = (s, r=document) => [...r.querySelectorAll(s)];

/* Cart helpers */
function getCart(){
  try{return JSON.parse(localStorage.getItem(CART_KEY)) || [];}catch{return [];}
}
function setCart(items){
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartCount();
}
function updateCartCount(){
  const totalQty = getCart().reduce((s,i)=>s+i.qty,0);
  qsa(".cart-count").forEach(el=> el.textContent = totalQty);
}
function addLine(itemId, sizeIndex, qty){
  const items = getCart();
  const existing = items.find(i=> i.id===itemId && i.sizeIndex===sizeIndex);
  if(existing) existing.qty += qty;
  else items.push({id:itemId,sizeIndex,qty});
  setCart(items);
}
function removeLine(index){
  const items = getCart();
  items.splice(index,1);
  setCart(items);
}
function changeLineQty(index, delta){
  const items = getCart();
  if(!items[index]) return;
  items[index].qty += delta;
  if(items[index].qty <=0) items.splice(index,1);
  setCart(items);
}
function cartLinesDetailed(){
  const lines = getCart();
  return lines.map(line=>{
    const p = PRODUCTS.find(x=>x.id===line.id);
    const size = p?.baseSizes[line.sizeIndex];
    return {
      ...line,
      product: p,
      size,
      linePrice: size ? size.price * line.qty : 0
    };
  });
}

/* Rendering products with Amazon-style category + filters */
function buildProductCard(p){
  const size0 = p.baseSizes[0];
  return `
  <article class="card" data-id="${p.id}" data-category="${p.category}" data-tags="${p.tags}">
    <img class="product-img" src="${p.img}" alt="${p.name}">
    <div class="card-body">
      <div class="product-title">${p.name}</div>
      <div class="product-size">${p.category}</div>
      <div class="product-pack">
        <select data-pack>
          ${p.baseSizes.map((s,i)=>`<option value="${i}">${s.label} — £${money(s.price)}</option>`).join("")}
        </select>
      </div>
      <div class="qty-row">
        <div class="qty-control">
          <button type="button" data-qty-dec>−</button>
          <input type="text" value="1" readonly>
          <button type="button" data-qty-inc>+</button>
        </div>
        <button type="button" class="add-btn" data-add>Add to basket</button>
      </div>
    </div>
  </article>`;
}

function renderProductsPage(){
  const grid = qs("#productsGrid");
  const sidebar = qs("#categoryList");
  if(!grid || !sidebar) return;

  // render categories
  sidebar.innerHTML = CATEGORIES.map(cat=>`
    <li><button type="button" data-cat="${cat}">${cat}</button></li>
  `).join("");

  // handle category + search
  const searchInput = qs("#productsSearch");
  let currentCategory = "All";

  function applyFilters(){
    const term = (searchInput?.value || "").trim().toLowerCase();
    grid.innerHTML = PRODUCTS
      .filter(p => currentCategory==="All" || p.category===currentCategory)
      .filter(p => !term || (p.name + " " + p.tags).toLowerCase().includes(term))
      .map(buildProductCard).join("") || `<div style="padding:12px">No products found.</div>`;
  }

  applyFilters();
  updateCartCount();

  sidebar.addEventListener("click", e=>{
    const btn = e.target.closest("button[data-cat]");
    if(!btn) return;
    currentCategory = btn.dataset.cat;
    qsa("button[data-cat]", sidebar).forEach(b=>b.classList.toggle("active", b===btn));
    applyFilters();
  });
  const params = new URLSearchParams(location.search);
  const q = params.get("search");
  if(q && searchInput){ searchInput.value = q; }

  if(searchInput){
    searchInput.addEventListener("input", applyFilters);
    qs("#productsFilterForm")?.addEventListener("submit", e=>{
      e.preventDefault(); applyFilters();
    });
  }

  // delegate add / qty buttons
  grid.addEventListener("click", e=>{
    const card = e.target.closest(".card");
    if(!card) return;
    const qtyInput = card.querySelector(".qty-control input");
    if(e.target.matches("[data-qty-inc]")){
      qtyInput.value = String(Number(qtyInput.value)+1);
    }else if(e.target.matches("[data-qty-dec]")){
      qtyInput.value = String(Math.max(1, Number(qtyInput.value)-1));
    }else if(e.target.matches("[data-add]")){
      const productId = card.dataset.id;
      const sizeIndex = Number(card.querySelector("[data-pack]").value);
      const qty = Number(qtyInput.value) || 1;
      addLine(productId,sizeIndex,qty);
      e.target.classList.add("added");
      e.target.textContent = "Added ✓";
      setTimeout(()=>{ e.target.classList.remove("added"); e.target.textContent="Add to basket"; }, 900);
    }
  });
}

/* Basket page */
function renderBasketPage(){
  const listEl = qs("#basketList");
  if(!listEl) return;

  const emptyEl = qs("#basketEmpty");
  const sumItems = qs("#sumItems");
  const sumSub = qs("#sumSubtotal");
  const sumDel = qs("#sumDelivery");
  const sumTotal = qs("#sumTotal");
  const goCheckout = qs("#goCheckout");

  const lines = cartLinesDetailed();
  if(!lines.length){
    emptyEl.style.display="block";
    listEl.innerHTML = "";
    if(goCheckout) goCheckout.disabled = true;
  } else {
    emptyEl.style.display="none";
    if(goCheckout) goCheckout.disabled = false;

    listEl.innerHTML = lines.map((line,idx)=>`
      <div class="basket-item">
        <img class="basket-thumb" src="${line.product.img}" alt="${line.product.name}">
        <div>
          <strong>${line.product.name}</strong>
          <div style="font-size:13px;color:var(--muted)">${line.size.label}</div>
          <div style="margin-top:6px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
            <div class="qty-control">
              <button type="button" data-bdec="${idx}">−</button>
              <input value="${line.qty}" readonly>
              <button type="button" data-binc="${idx}">+</button>
            </div>
            <button class="btn-danger" type="button" data-bremove="${idx}">Remove</button>
          </div>
        </div>
        <div style="font-weight:800">£${money(line.linePrice)}</div>
      </div>
    `).join("");

    listEl.onclick = (e)=>{
      const dec = e.target.closest("[data-bdec]");
      const inc = e.target.closest("[data-binc]");
      const rem = e.target.closest("[data-bremove]");
      if(dec){ changeLineQty(Number(dec.dataset.bdec),-1); renderBasketPage(); }
      if(inc){ changeLineQty(Number(inc.dataset.binc),+1); renderBasketPage(); }
      if(rem){ removeLine(Number(rem.dataset.bremove)); renderBasketPage(); }
    };
  }

  const totals = cartTotals();
  if(sumItems) sumItems.textContent = totals.count;
  if(sumSub) sumSub.textContent = money(totals.subtotal);
  if(sumDel) sumDel.textContent = money(totals.delivery);
  if(sumTotal) sumTotal.textContent = money(totals.total);

  if(goCheckout){
    goCheckout.onclick = ()=>{
      if(!cartLinesDetailed().length) return;
      sessionStorage.setItem(CHECKOUT_GATE_KEY,"1");
      location.href = "checkout.html";
    };
  }
}

/* Checkout page */
function renderCheckoutPage(){
  const form = qs("#checkoutForm");
  const summary = qs("#checkoutSummary");
  if(!form || !summary) return;

  if(sessionStorage.getItem(CHECKOUT_GATE_KEY)!=="1"){
    location.href = "basket.html";
    return;
  }
  const lines = cartLinesDetailed();
  if(!lines.length){
    location.href = "basket.html";
    return;
  }

  const totals = cartTotals();
  summary.innerHTML = lines.map(l=>`
    <div style="display:flex;justify-content:space-between;margin:4px 0;font-size:14px">
      <span>${l.qty}× ${l.product.name} (${l.size.label})</span>
      <strong>£${money(l.linePrice)}</strong>
    </div>
  `).join("") + `
    <div style="border-top:1px dashed var(--line);margin-top:8px;padding-top:8px;font-size:14px">
      <div style="display:flex;justify-content:space-between"><span>Subtotal</span><strong>£${money(totals.subtotal)}</strong></div>
      <div style="display:flex;justify-content:space-between"><span>Delivery</span><strong>£${money(totals.delivery)}</strong></div>
      <div style="display:flex;justify-content:space-between;margin-top:6px"><span>Total</span><strong>£${money(totals.total)}</strong></div>
    </div>
  `;

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    localStorage.removeItem(CART_KEY);
    sessionStorage.removeItem(CHECKOUT_GATE_KEY);
    alert("Order submitted. Thank you for choosing Aviruchi!");
    location.href = "index.html";
  });
}

/* global header behaviours */
function setupNav(){
  const menuBtn = qs(".menu-btn");
  const nav = qs(".nav-links");
  if(menuBtn && nav){
    menuBtn.addEventListener("click", ()=> nav.classList.toggle("open"));
  }
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  qsa(".nav-links a").forEach(a=>{
    if((a.getAttribute("href")||"").toLowerCase()===file){
      a.classList.add("active");
    }
  });
}

/* Home search */
function setupHomeSearch(){
  const form = qs("#homeSearchForm");
  const input = qs("#homeSearchInput");
  if(!form || !input) return;
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const q = input.value.trim();
    if(q) location.href = `products.html?search=${encodeURIComponent(q)}`;
    else location.href = "products.html";
  });
}

/* Init */
document.addEventListener("DOMContentLoaded",()=>{
  setupNav();
  updateCartCount();
  setupHomeSearch();
  if(qs("#productsGrid")) renderProductsPage();
  if(qs("#basketList")) renderBasketPage();
  if(qs("#checkoutForm")) renderCheckoutPage();

  // Home favourites (first 3 items)
  const favGrid = qs("#favGrid");
  if(favGrid){
    favGrid.innerHTML = PRODUCTS.slice(0,3).map(buildProductCard).join("");
    favGrid.addEventListener("click", (e)=>{
      const card = e.target.closest(".card");
      if(!card) return;
      const qtyInput = card.querySelector(".qty-control input");
      if(e.target.matches("[data-qty-inc]")){
        qtyInput.value = String(Number(qtyInput.value)+1);
      }else if(e.target.matches("[data-qty-dec]")){
        qtyInput.value = String(Math.max(1,Number(qtyInput.value)-1));
      }else if(e.target.matches("[data-add]")){
        const id = card.dataset.id;
        const sizeIndex = Number(card.querySelector("[data-pack]").value);
        const qty = Number(qtyInput.value)||1;
        addLine(id,sizeIndex,qty);
        e.target.classList.add("added");
        e.target.textContent="Added ✓";
        setTimeout(()=>{e.target.classList.remove("added");e.target.textContent="Add to basket";},900);
      }
    });
  }
});
