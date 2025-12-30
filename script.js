/* --- Global Cart State --- */
const CART_KEY = 'aviruchi_cart_v2';

// 1. Load Cart on Page Load
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setupMobileMenu();
  setupSearch();
  highlightActivePage();
  
  // Page specific renderers
  if (document.getElementById('basket-list')) renderBasket();
  if (document.getElementById('checkout-summary')) renderCheckout();
  if (document.getElementById('products-grid')) renderProducts();
});

// 2. Mobile Menu
function setupMobileMenu() {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

// 3. Smart Search (Redirects to Products page if not already there)
function setupSearch() {
  const form = document.getElementById('search-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = form.querySelector('input').value.trim();
    if (query) {
      // Go to products page with search term
      window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
  });
}

// 4. Highlight Active Nav Link
function highlightActivePage() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href.includes(path) && path !== '/') link.classList.add('active');
  });
}

/* --- Cart Logic --- */
function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || {};
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(btn) {
  const item = {
    id: btn.dataset.id,
    name: btn.dataset.name,
    price: parseFloat(btn.dataset.price),
    img: btn.dataset.img,
    qty: 1
  };
  
  const cart = getCart();
  if (cart[item.id]) {
    cart[item.id].qty++;
  } else {
    cart[item.id] = item;
  }
  
  saveCart(cart);
  
  // Feedback
  const originalText = btn.textContent;
  btn.textContent = "Added ✓";
  btn.style.background = "#2f7d31";
  btn.style.color = "#fff";
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = "";
    btn.style.color = "";
  }, 1500);
}

function updateCartCount() {
  const cart = getCart();
  const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

/* --- Products Page Logic --- */
function renderProducts() {
  const params = new URLSearchParams(window.location.search);
  const search = params.get('search')?.toLowerCase();
  
  if (search) {
    const title = document.getElementById('page-title');
    const input = document.getElementById('page-search');
    if(title) title.textContent = `Results for "${search}"`;
    if(input) input.value = search;
    
    // Filter cards
    document.querySelectorAll('.card').forEach(card => {
      const text = (card.dataset.name + ' ' + card.dataset.tags).toLowerCase();
      card.style.display = text.includes(search) ? 'flex' : 'none';
    });
  }
}

/* --- Basket Page Logic --- */
function renderBasket() {
  const container = document.getElementById('basket-list');
  const cart = getCart();
  const items = Object.values(cart);
  
  if (items.length === 0) {
    container.innerHTML = '<div style="text-align:center; padding:40px; color:#888;">Your basket is empty.</div>';
    document.getElementById('checkout-btn').disabled = true;
    updateTotals(0);
    return;
  }

  container.innerHTML = items.map(item => `
    <div style="display:grid; grid-template-columns: 60px 1fr auto; gap:15px; align-items:center; border-bottom:1px dashed #ccc; padding:15px 0;">
      <img src="${item.img}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
      <div>
        <div style="font-weight:700;">${item.name}</div>
        <div style="font-size:0.9rem; color:#666;">£${item.price.toFixed(2)}</div>
        <button onclick="removeFromCart('${item.id}')" style="background:none; border:none; color:#b71c1c; font-size:0.8rem; padding:0; cursor:pointer;">Remove</button>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button onclick="changeQty('${item.id}', -1)" style="width:25px; height:25px; border-radius:50%; border:1px solid #ccc; background:#fff;">-</button>
        <span style="font-weight:600; width:20px; text-align:center;">${item.qty}</span>
        <button onclick="changeQty('${item.id}', 1)" style="width:25px; height:25px; border-radius:50%; border:1px solid #ccc; background:#fff;">+</button>
      </div>
    </div>
  `).join('');

  const subtotal = items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  updateTotals(subtotal);
  document.getElementById('checkout-btn').disabled = false;
}

function changeQty(id, delta) {
  const cart = getCart();
  if (cart[id]) {
    cart[id].qty += delta;
    if (cart[id].qty <= 0) delete cart[id];
    saveCart(cart);
    renderBasket();
  }
}

function removeFromCart(id) {
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
  renderBasket();
}

function updateTotals(subtotal) {
  const delivery = subtotal > 0 ? 3.99 : 0;
  document.getElementById('subtotal').textContent = `£${subtotal.toFixed(2)}`;
  document.getElementById('total').textContent = `£${(subtotal + delivery).toFixed(2)}`;
}

/* --- Checkout Logic --- */
function renderCheckout() {
  const cart = getCart();
  const items = Object.values(cart);
  
  if (items.length === 0) {
    alert("Your basket is empty!");
    window.location.href = 'basket.html';
    return;
  }

  const list = document.getElementById('checkout-summary');
  const total = items.reduce((sum, i) => sum + (i.price * i.qty), 0) + 3.99;
  
  list.innerHTML = items.map(i => `
    <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem;">
      <span>${i.qty}x ${i.name}</span>
      <span>£${(i.price * i.qty).toFixed(2)}</span>
    </div>
  `).join('') + `
    <div style="border-top:1px solid #ddd; margin-top:10px; padding-top:10px; display:flex; justify-content:space-between; font-weight:700;">
      <span>Total to pay</span>
      <span>£${total.toFixed(2)}</span>
    </div>
  `;
}

function processOrder(e) {
  e.preventDefault();
  alert("Order placed successfully! Welcome to the Aviruchi family.");
  localStorage.removeItem(CART_KEY);
  window.location.href = 'index.html';
}
