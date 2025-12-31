/* Aviruchi Products page engine (search + basket) */

const BASKET_KEY = "aviruchibasket";

const PRODUCTS = [
  // PICKLES (VEG)
  { id: "pickles_avakaya", name: "Avakaya", category: "Pickles", subCategory: "Veg", spice: "hot", rating: 4.8, reviews: 120, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 4.50 }, { label: "500g", price: 8.50 }, { label: "1kg", price: 16.00 }] },
  { id: "pickles_chintakaya", name: "Chintakaya", category: "Pickles", subCategory: "Veg", spice: "hot", rating: 4.6, reviews: 80, unit: "250g+", notes: "Pre order required", packSizes: [{ label: "250g", price: 4.50 }, { label: "500g", price: 8.50 }, { label: "1kg", price: 16.00 }] },
  { id: "pickles_amla", name: "Amla Pickle", category: "Pickles", subCategory: "Veg", spice: "medium", rating: 4.7, reviews: 75, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 4.50 }, { label: "500g", price: 8.50 }, { label: "1kg", price: 16.00 }] },
  { id: "pickles_mango_turumu", name: "Mango Turumu Pickle", category: "Pickles", subCategory: "Veg", spice: "hot", rating: 4.7, reviews: 82, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 4.00 }, { label: "500g", price: 7.50 }, { label: "1kg", price: 14.50 }] },
  { id: "pickles_tomato", name: "Tomato Pickle", category: "Pickles", subCategory: "Veg", spice: "medium", rating: 4.8, reviews: 90, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 4.50 }, { label: "500g", price: 8.50 }, { label: "1kg", price: 16.00 }] },
  { id: "pickles_mango", name: "Mango Pickle", category: "Pickles", subCategory: "Veg", spice: "hot", rating: 4.9, reviews: 130, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 4.50 }, { label: "350g", price: 5.50 }, { label: "500g", price: 8.50 }, { label: "1kg", price: 16.00 }] },
  { id: "pickles_gongura", name: "Gongura Pickle", category: "Pickles", subCategory: "Veg", spice: "hot", rating: 4.9, reviews: 140, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 4.50 }, { label: "350g", price: 5.50 }, { label: "500g", price: 8.50 }, { label: "1kg", price: 16.00 }] },
  { id: "pickles_allam_pachadi", name: "Allam Pachadi", category: "Pickles", subCategory: "Veg", spice: "medium", rating: 4.7, reviews: 88, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 4.50 }, { label: "500g", price: 8.50 }, { label: "1kg", price: 16.00 }] },

  // SNACKS (HOT)
  { id: "snacks_mixture", name: "Mixture", category: "Snacks", subCategory: "Hot Snacks", spice: "medium", rating: 4.8, reviews: 200, unit: "125/150g+", notes: "", packSizes: [{ label: "125g", price: 2.50 }, { label: "250g", price: 4.00 }, { label: "500g", price: 7.50 }, { label: "1kg", price: 15.00 }] },
  { id: "snacks_chegodi", name: "Chegodi", category: "Snacks", subCategory: "Hot Snacks", spice: "medium", rating: 4.9, reviews: 180, unit: "125/150g+", notes: "", packSizes: [{ label: "125g", price: 2.50 }, { label: "250g", price: 4.00 }, { label: "500g", price: 7.50 }, { label: "1kg", price: 15.00 }] },

  // SWEETS
  { id: "sweets_kaju_katli", name: "Kaju Katli", category: "Sweets", subCategory: "Cashew", spice: "mild", rating: 4.9, reviews: 160, unit: "250g+", notes: "Pre-order only", packSizes: [{ label: "250g", price: 4.50 }, { label: "500g", price: 9.00 }, { label: "1kg", price: 17.50 }] },
  { id: "sweets_palakova", name: "Pala Kova", category: "Sweets", subCategory: "Milk", spice: "mild", rating: 4.8, reviews: 135, unit: "250g+", notes: "Pre-order only", packSizes: [{ label: "250g", price: 5.00 }, { label: "500g", price: 9.50 }, { label: "1kg", price: 18.00 }] },

  // PODIS / SPICE POWDERS
  { id: "podi_idly_spice", name: "Idly Spice Mix Powder", category: "Podis / Spice Powders", subCategory: "Chutney Powders", spice: "medium", rating: 4.8, reviews: 48, unit: "125/150g+", notes: "", packSizes: [{ label: "125g", price: 2.00 }, { label: "250g", price: 4.50 }, { label: "500g", price: 8.50 }, { label: "1kg", price: 16.00 }] },
  { id: "podi_sambar", name: "Sambar Powder", category: "Podis / Spice Powders", subCategory: "Cooking Powders", spice: "medium", rating: 4.8, reviews: 58, unit: "125/150g+", notes: "", packSizes: [{ label: "125g", price: 2.00 }, { label: "250g", price: 4.00 }, { label: "500g", price: 7.50 }, { label: "1kg", price: 14.00 }] },

  // MIXES
  { id: "mix_pulihora", name: "Pulihora Mix (Tamarind Rice Mix)", category: "Mixes", subCategory: "Rice Mixes", spice: "medium", rating: 4.8, reviews: 90, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 3.50 }, { label: "500g", price: 6.50 }, { label: "1kg", price: 12.50 }] },
  { id: "mix_biryani", name: "Biryani Mix", category: "Mixes", subCategory: "Rice Mixes", spice: "hot", rating: 4.9, reviews: 110, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 4.00 }, { label: "500g", price: 7.50 }, { label: "1kg", price: 14.00 }] },

  // MISC (Other)
  { id: "misc_ghee", name: "Pure Cow Ghee", category: "Misc", subCategory: "Ghee", spice: "mild", rating: 5.0, reviews: 120, unit: "250g+", notes: "", packSizes: [{ label: "250g", price: 6.50 }, { label: "500g", price: 12.00 }, { label: "1kg", price: 23.00 }] },
];

const money = (n) => Number(n || 0).toFixed(2);

const state = {
  products: PRODUCTS,
  filtered: PRODUCTS,
  category: "all",
  sort: "featured",
  search: "",
  basket: []
};

function getSpiceClass(spice){
  if(spice === "hot") return "hot";
  if(spice === "medium") return "medium";
  return "mild";
}

function getSpiceLabel(spice){
  if(!spice) return "";
  return spice.charAt(0).toUpperCase() + spice.slice(1);
}

function getCategoryLabel(p){
  if(p.subCategory) return `${p.category} • ${p.subCategory}`;
  return p.category;
}

/* Basket storage shared with Basket page */
function loadBasket(){
  try{
    const raw = localStorage.getItem(BASKET_KEY);
    state.basket = raw ? JSON.parse(raw) : [];
  }catch{
    state.basket = [];
  }
}

function saveBasket(){
  localStorage.setItem(BASKET_KEY, JSON.stringify(state.basket));
}

function updateBasketCount(){
  const totalItems = state.basket.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
  const el = document.getElementById("basket-count");
  if(el) el.textContent = totalItems;
}

function addToBasket(product, qty, selectedPack){
  // Keep structure compatible with basket.html/script.js
  const key = `${product.id}__${selectedPack?.label || ""}`;
  const existing = state.basket.find(item => item.key === key);

  if(existing) existing.qty += qty;
  else {
    state.basket.push({
      key,
      id: product.id,
      name: product.name,
      category: product.category,
      subCategory: product.subCategory || null,
      pack: selectedPack || null,
      qty
    });
  }

  saveBasket();
  updateBasketCount();
}

/* Filtering + sorting */
function applyFiltersAndSort(){
  let list = [...state.products];

  if(state.category !== "all"){
    list = list.filter(p => p.category === state.category);
  }

  const q = state.search.trim().toLowerCase();
  if(q){
    list = list.filter(p => {
      const hay = `${p.name} ${p.category} ${p.subCategory || ""} ${p.spice || ""}`.toLowerCase();
      return hay.includes(q);
    });
  }

  if(state.sort === "price-asc"){
    list.sort((a,b) => (a.packSizes?.[0]?.price || 0) - (b.packSizes?.[0]?.price || 0));
  }else if(state.sort === "price-desc"){
    list.sort((a,b) => (b.packSizes?.[0]?.price || 0) - (a.packSizes?.[0]?.price || 0));
  }else if(state.sort === "name-asc"){
    list.sort((a,b) => a.name.localeCompare(b.name));
  }else if(state.sort === "name-desc"){
    list.sort((a,b) => b.name.localeCompare(a.name));
  }

  state.filtered = list;
  renderProducts();
}

function renderProducts(){
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");
  const resultsCount = document.getElementById("results-count");
  const resultsContext = document.getElementById("results-context");

  const list = state.filtered;

  if(resultsCount) resultsCount.textContent = `${list.length} products`;
  if(resultsContext) resultsContext.textContent = state.category === "all" ? "Showing all categories" : `Category: ${state.category}`;

  if(!list.length){
    if(grid) grid.innerHTML = "";
    if(emptyState) emptyState.hidden = false;
    return;
  }

  if(emptyState) emptyState.hidden = true;

  grid.innerHTML = list.map(p => {
    const spiceClass = getSpiceClass(p.spice);
    const spiceLabel = getSpiceLabel(p.spice);
    const mainPack = p.packSizes?.[0] || null;
    const unitPrice = mainPack ? mainPack.price : 0;
    const unitText = p.unit || (mainPack ? mainPack.label : "");
    const categoryLabel = getCategoryLabel(p);

    const alreadyAdded = state.basket.some(item => item.id === p.id);

    const packSelectHtml = (p.packSizes && p.packSizes.length)
      ? `
        <select class="pack-select click-anim">
          ${p.packSizes.map(ps => `<option value="${ps.label}" data-price="${ps.price}">${ps.label} - £${money(ps.price)}</option>`).join("")}
        </select>
      `
      : "";

    return `
      <article class="product-card fade-in" data-id="${p.id}">
        <div class="product-image-wrapper">
          <span class="product-tag">Aviruchi</span>
        </div>

        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <div class="product-category">${categoryLabel}</div>

          <div class="product-meta-row">
            <div class="product-spice">
              <span class="spice-dot ${spiceClass}"></span>
              <span>${spiceLabel}</span>
            </div>
            <div class="product-rating">
              <span class="star">★</span>
              <span>${p.rating}</span>
              <span>(${p.reviews})</span>
            </div>
          </div>

          <div class="product-price-row">
            <div class="price-main">
              <span class="price-current">£${money(unitPrice)}</span>
            </div>
            ${unitText ? `<div class="price-unit">Based on ${unitText}</div>` : ``}
          </div>

          <div class="product-controls">
            ${packSelectHtml}

            <div class="qty-row">
              <span class="qty-label">Qty</span>
              <div class="qty-box">
                <button class="qty-btn click-anim" type="button" data-change="-1">-</button>
                <span class="qty-value">1</span>
                <button class="qty-btn click-anim" type="button" data-change="1">+</button>
              </div>
            </div>

            <button class="add-btn click-anim ${alreadyAdded ? "added" : ""}" type="button">
              ${alreadyAdded ? "Added" : "Add"}
            </button>

            ${p.notes ? `<div class="product-notes" style="color:#7a6a5f;font-size:0.85rem;margin-top:6px">${p.notes}</div>` : ``}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* UI helpers */
function highlightActiveCategory(catKey){
  document.querySelectorAll(".sidebar-link").forEach(btn => {
    const key = btn.getAttribute("data-category");
    btn.classList.toggle("active", key === catKey);
  });
}

function attachProductEvents(){
  const grid = document.getElementById("products-grid");
  if(!grid) return;

  grid.addEventListener("click", (e) => {
    const clickAnimEl = e.target.closest(".click-anim");
    if(clickAnimEl){
      clickAnimEl.classList.add("clicked");
      setTimeout(() => clickAnimEl.classList.remove("clicked"), 150);
    }

    const qtyBtn = e.target.closest(".qty-btn");
    if(qtyBtn){
      const card = qtyBtn.closest(".product-card");
      const qtyValue = card.querySelector(".qty-value");
      const change = parseInt(qtyBtn.getAttribute("data-change"), 10);
      let current = parseInt(qtyValue.textContent, 10) || 1;
      current = Math.max(1, current + change);
      qtyValue.textContent = current;
      return;
    }

    const addBtn = e.target.closest(".add-btn");
    if(addBtn){
      const card = addBtn.closest(".product-card");
      const id = card.getAttribute("data-id");
      const product = state.products.find(p => p.id === id);
      if(!product) return;

      const qty = parseInt(card.querySelector(".qty-value")?.textContent, 10) || 1;

      const select = card.querySelector(".pack-select");
      let selectedPack = null;
      if(select && select.options.length){
        const opt = select.options[select.selectedIndex];
        selectedPack = { label: opt.value, price: parseFloat(opt.getAttribute("data-price")) };
      }else if(product.packSizes?.length){
        selectedPack = product.packSizes[0];
      }

      addToBasket(product, qty, selectedPack);

      // Keep "Added" permanently (no timeout)
      addBtn.textContent = "Added";
      addBtn.classList.add("added");
      return;
    }
  });

  // If user changes pack, keep button state consistent
  grid.addEventListener("change", (e) => {
    const sel = e.target.closest(".pack-select");
    if(!sel) return;
    const card = sel.closest(".product-card");
    const id = card.getAttribute("data-id");
    const addBtn = card.querySelector(".add-btn");
    if(!addBtn) return;

    const alreadyAdded = state.basket.some(item => item.id === id);
    addBtn.textContent = alreadyAdded ? "Added" : "Add";
    addBtn.classList.toggle("added", alreadyAdded);
  });
}

function attachFilterEvents(){
  // Category clicks
  document.querySelectorAll(".sidebar-link").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = btn.getAttribute("data-category") || "all";
      state.category = cat;
      highlightActiveCategory(cat);
      applyFiltersAndSort();
    });
  });

  // Sort
  const sortSelect = document.getElementById("sort-filter");
  if(sortSelect){
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      applyFiltersAndSort();
    });
  }

  // Search (live)
  const form = document.getElementById("navSearchForm");
  const input = document.getElementById("navSearchInput");

  if(form) form.addEventListener("submit", (e) => e.preventDefault());

  if(input){
    input.addEventListener("input", () => {
      state.search = input.value;
      applyFiltersAndSort();
    });
  }

  // Clear filters
  const clearBtn = document.getElementById("clear-filters-btn");
  if(clearBtn){
    clearBtn.addEventListener("click", () => {
      state.category = "all";
      state.sort = "featured";
      state.search = "";

      highlightActiveCategory("all");

      if(sortSelect) sortSelect.value = "featured";
      if(input) input.value = "";

      applyFiltersAndSort();
    });
  }

  const emptyReset = document.getElementById("empty-reset-btn");
  if(emptyReset){
    emptyReset.addEventListener("click", () => {
      state.category = "all";
      state.sort = "featured";
      state.search = "";

      highlightActiveCategory("all");

      if(sortSelect) sortSelect.value = "featured";
      if(input) input.value = "";

      applyFiltersAndSort();
    });
  }
}

function initFromUrl(){
  const url = new URL(location.href);
  const q = url.searchParams.get("search");
  if(q){
    state.search = q;
    const input = document.getElementById("navSearchInput");
    if(input) input.value = q;
  }
}

function init(){
  loadBasket();
  updateBasketCount();

  initFromUrl();

  applyFiltersAndSort();
  attachProductEvents();
  attachFilterEvents();
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
