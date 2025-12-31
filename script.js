const CART_KEY = 'aviruchi_cart_v2';

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setupSearch();
});

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || {};
}

function updateCartCount() {
  const cart = getCart();
  const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function setupSearch() {
  const form = document.getElementById('search-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = form.querySelector('input').value.trim();
    if (query) {
      window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
  });
}
