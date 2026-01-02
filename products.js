/* ---------------------------------------------------------
   AVIRUCHI MASTER PRODUCT SCRIPT
   Clean Base File — Start From Here
--------------------------------------------------------- */

const PRODUCTS = [
  ...(window.pickles || []),
  ...(window.snacks || []),
  ...(window.sweets || []),
  ...(window.papadums || []),
  ...(window.podis || []),
  ...(window.mixes || []),
  ...(window.other || [])
];
 // <-- VERY IMPORTANT: Do NOT delete this bracket.

/* ---------------------------------------------------------
   AVIRUCHI PRODUCT ENGINE — FINAL VERSION (Sidebar Only)
--------------------------------------------------------- */

//////////////////////////////////////////////////////////////
// STATE
//////////////////////////////////////////////////////////////

let state = {
  products: PRODUCTS,
  filtered: PRODUCTS,
  category: "all",
  sort: "featured",
  search: "",
  basket: []
};

//////////////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////////////

function getSpiceClass(spice) {
  if (spice === "hot") return "hot";
  if (spice === "medium") return "medium";
  return "mild";
}

function getSpiceLabel(spice) {
  if (!spice) return "";
  return spice.charAt(0).toUpperCase() + spice.slice(1);
}

function formatPrice(value) {
  return `£${value.toFixed(2)}`;
}

function getCategoryLabel(p) {
  if (p.category === "Pickles" && p.subCategory) {
    return `Pickles (${p.subCategory})`;
  }
  if (p.category === "Snacks" && p.subCategory) {
    return `Snacks (${p.subCategory})`;
  }
  if (p.category === "Podis / Spice Powders" && p.subCategory) {
    return `Podis / Spice Powders (${p.subCategory})`;
  }
  return p.category;
}

//////////////////////////////////////////////////////////////
// RENDER PRODUCTS
//////////////////////////////////////////////////////////////

function renderProducts() {
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");
  const resultsCount = document.getElementById("results-count");
  const resultsContext = document.getElementById("results-context");

  const list = state.filtered || [];

  if (!list.length) {
    grid.innerHTML = "";
    emptyState.hidden = false;
    resultsCount.textContent = "0 products";
    resultsContext.textContent = "No matching results";
    return;
  }

  emptyState.hidden = true;

  resultsCount.textContent = `${list.length} products`;
  resultsContext.textContent =
    state.category === "all"
      ? "Showing all categories"
      : `Category: ${state.category}`;

  grid.innerHTML = list
    .map((p) => {
      const spiceClass = getSpiceClass(p.spice);
      const spiceLabel = getSpiceLabel(p.spice);
      const ratingStars =
        "★".repeat(Math.round(p.rating)) +
        "☆".repeat(5 - Math.round(p.rating));

      const mainPack = p.packSizes?.[0] || null;
      const unitPrice = mainPack ? mainPack.price : p.basePrice || 0;
      const unitText = p.unit || (mainPack ? mainPack.label : "");
      const categoryLabel = getCategoryLabel(p);

      const packSelectHtml = p.packSizes?.length
        ? `
          <select class="pack-select click-anim">
            ${p.packSizes
              .map(
                (ps) =>
                  `<option value="${ps.label}" data-price="${ps.price}">
                    ${ps.label} - ${formatPrice(ps.price)}
                  </option>`
              )
              .join("")}
          </select>
        `
        : `<div class="pack-unavailable">Pre-order only</div>`;

      return `
        <article class="product-card fade-in" data-id="${p.id}">
          <div class="product-body">
            <div class="product-name">${p.name}</div>
            <div class="product-category">${categoryLabel}</div>

            <div class="product-meta-row">
              <div class="product-spice">
                <span class="spice-dot ${spiceClass}"></span>
                <span>${spiceLabel}</span>
              </div>
              <div class="product-rating">
                <span class="star">${ratingStars}</span>
                <span>(${p.reviews})</span>
              </div>
            </div>

            <div class="product-price-row">
              <div class="price-main">
                <span class="price-current">${formatPrice(unitPrice)}</span>
              </div>
              ${
                unitText
                  ? `<div class="price-unit">Based on ${unitText}</div>`
                  : ""
              }
            </div>

            <div class="product-controls">
              ${packSelectHtml}

              <div class="qty-row">
                <span class="qty-label">Qty</span>
                <div class="qty-box">
                  <button class="qty-btn click-anim" data-change="-1">-</button>
                  <span class="qty-value">1</span>
                  <button class="qty-btn click-anim" data-change="1">+</button>
                </div>
              </div>

              <button class="add-btn click-anim" data-id="${p.id}">Add</button>
            </div>

            ${p.notes ? `<div class="product-notes">${p.notes}</div>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
  syncAllAddButtons();
} 

//////////////////////////////////////////////////////////////
// BASKET LOGIC
//////////////////////////////////////////////////////////////

function saveBasket() {
  localStorage.setItem("aviruchibasket", JSON.stringify(state.basket));
}

function loadBasket() {
  const saved = localStorage.getItem("aviruchibasket");
  if (saved) {
    state.basket = JSON.parse(saved);
  }
}

function getBasketKey(productId, selectedPack) {
  return productId + (selectedPack ? `_${selectedPack.label}` : "");
}

function isInBasket(productId, selectedPack) {
  const key = getBasketKey(productId, selectedPack);
  return state.basket.some((item) => item.key === key);
}

function syncCardAddButton(card) {
  if (!card) return;
  const id = card.getAttribute("data-id");
  const addBtn = card.querySelector(".add-btn");
  if (!addBtn) return;

  const select = card.querySelector(".pack-select");
  let selectedPack = null;

  if (select && select.options.length) {
    const opt = select.options[select.selectedIndex];
    selectedPack = { label: opt.value, price: parseFloat(opt.getAttribute("data-price")) };
  }

  const added = isInBasket(id, selectedPack);
  addBtn.textContent = added ? "Added" : "Add";
  addBtn.classList.toggle("added", added);
}

function syncAllAddButtons() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.querySelectorAll(".product-card").forEach(syncCardAddButton);
}

function addToBasket(product, qty, selectedPack) {
 const key = product.id + (selectedPack ? `_${selectedPack.label}` : "");
 const existing = state.basket.find((item) => item.key === key);

  if (existing) {
    existing.qty += qty;
  } else {
    state.basket.push({
      key,
      id: product.id,
      name: product.name,
      category: product.category,
      subCategory: product.subCategory || null,
      pack: selectedPack,
      qty
    });
  }

  saveBasket();
  updateBasketUI();
}

function updateBasketUI() {
  const countEl = document.getElementById("basket-count");
  const listEl = document.getElementById("basket-items");

  const totalItems = state.basket.reduce((sum, item) => sum + item.qty, 0);

  if (countEl) {
    countEl.textContent = totalItems;
  }

  if (listEl) {
    if (!state.basket.length) {
      listEl.innerHTML = `<p>Your basket is empty.</p>`;
      return;
    }

    listEl.innerHTML = state.basket
      .map((item) => {
        const packLabel = item.pack ? ` (${item.pack.label})` : "";
        return `
          <div class="basket-item fade-in">
            <span>${item.name}${packLabel}</span>
            <span>Qty: ${item.qty}</span>
          </div>
        `;
      })
      .join("");
  }
}

//////////////////////////////////////////////////////////////
// FILTERING & SORTING
//////////////////////////////////////////////////////////////

function applyFiltersAndSort() {
  let list = [...state.products];

  if (state.category !== "all") {
    list = list.filter((p) => p.category === state.category);
  }

  if (state.search.trim() !== "") {
    const q = state.search.toLowerCase();
    list = list.filter((p) => p.name.toLowerCase().includes(q));
  }

  if (state.sort === "price-asc") {
    list.sort((a, b) => {
      const pa = a.packSizes?.[0]?.price || 0;
      const pb = b.packSizes?.[0]?.price || 0;
      return pa - pb;
    });
  }

  if (state.sort === "price-desc") {
    list.sort((a, b) => {
      const pa = a.packSizes?.[0]?.price || 0;
      const pb = b.packSizes?.[0]?.price || 0;
      return pb - pa;
    });
  }

  if (state.sort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (state.sort === "name-desc") {
    list.sort((a, b) => b.name.localeCompare(a.name));
  }

  state.filtered = list;
  renderProducts();
}

//////////////////////////////////////////////////////////////
// CATEGORY HIGHLIGHT
//////////////////////////////////////////////////////////////

function highlightActiveCategory(catKey) {
  const buttons = document.querySelectorAll("[data-category]");
  buttons.forEach((btn) => {
    const key = btn.getAttribute("data-category");
    if (key === catKey) {
      btn.classList.add("active");
      btn.classList.add("click-anim");
    } else {
      btn.classList.remove("active");
    }
  });
}

//////////////////////////////////////////////////////////////
// EVENT WIRING
//////////////////////////////////////////////////////////////

function attachProductEvents() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.addEventListener("click", (e) => {
    const qtyBtn = e.target.closest(".qty-btn");
    if (qtyBtn) {
      qtyBtn.classList.add("clicked");
      setTimeout(() => qtyBtn.classList.remove("clicked"), 150);

      const change = parseInt(qtyBtn.getAttribute("data-change"), 10);
      const card = qtyBtn.closest(".product-card");
      const qtyValue = card.querySelector(".qty-value");
      let current = parseInt(qtyValue.textContent, 10) || 1;
      current += change;
      if (current < 1) current = 1;
      qtyValue.textContent = current;
      return;
    }

    const addBtn = e.target.closest(".add-btn");
    if (addBtn) {
      addBtn.classList.add("clicked");
      setTimeout(() => addBtn.classList.remove("clicked"), 150);

      const card = addBtn.closest(".product-card");
      const id = card.getAttribute("data-id");
      const product = state.products.find((p) => p.id === id);
      if (!product) return;

      const qtyValue = card.querySelector(".qty-value");
      const qty = parseInt(qtyValue.textContent, 10) || 1;

      const select = card.querySelector(".pack-select");
      let selectedPack = null;
      if (select && select.options.length) {
        const opt = select.options[select.selectedIndex];
        selectedPack = {
          label: opt.value,
          price: parseFloat(opt.getAttribute("data-price"))
        };
      }

      addToBasket(product, qty, selectedPack);
      syncCardAddButton(card);

      addBtn.textContent = "Added";
      addBtn.classList.add("added");
    }
  });
  
  grid.addEventListener("change", (e) => {
    const sel = e.target.closest(".pack-select");
    if (!sel) return;
    const card = sel.closest(".product-card");
    syncCardAddButton(card);
  });
}

function attachFilterEvents() {
  const categoryEls = document.querySelectorAll("[data-category]");
  categoryEls.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = el.getAttribute("data-category");
      highlightActiveCategory(cat);
      state.category = cat;
      applyFiltersAndSort();
    });
  });

  const sortSelect = document.getElementById("sort-filter");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      applyFiltersAndSort();
    });
  }

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.search = searchInput.value;
      applyFiltersAndSort();
    });
  }

  const clearBtn = document.getElementById("clear-filters-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      state.category = "all";
      state.sort = "featured";
      state.search = "";

      highlightActiveCategory("all");

      const searchInput = document.getElementById("search-input");
      if (searchInput) searchInput.value = "";

      const sortSelect = document.getElementById("sort-filter");
      if (sortSelect) sortSelect.value = "featured";

      applyFiltersAndSort();
    });
  }

  const emptyReset = document.getElementById("empty-reset-btn");
  if (emptyReset) {
    emptyReset.addEventListener("click", () => {
      state.category = "all";
      state.sort = "featured";
      state.search = "";

      highlightActiveCategory("all");

      const searchInput = document.getElementById("search-input");
      if (searchInput) searchInput.value = "";

      const sortSelect = document.getElementById("sort-filter");
      if (sortSelect) sortSelect.value = "featured";

      applyFiltersAndSort();
    });
  }
}

//////////////////////////////////////////////////////////////
// INIT
//////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const isProductsPage = document.getElementById("products-grid");

  if (isProductsPage) {
    // Load basket first
    loadBasket();
    updateBasketUI();

    // If a search query was passed in the URL (from header search), use it
    const params = new URLSearchParams(location.search);
    const urlSearch = params.get("search") || "";
    if (urlSearch) {
      state.search = decodeURIComponent(urlSearch);
      const searchInput = document.getElementById("search-input");
      if (searchInput) searchInput.value = state.search;
      const navSearch = document.getElementById("navSearchInput");
      if (navSearch) navSearch.value = state.search;
    }

    // Render products
    applyFiltersAndSort();

    // Attach all product + filter events
    attachProductEvents();
    attachFilterEvents();
  }
});

