/* =========================================================
   AVIRUCHI — SITE SCRIPT (shared)
   - Basket storage key: aviruchibasket (shared with products.js)
   - Basket page rendering + totals + checkout gate
   - Site nav active link + mobile menu toggle
   - Search forms (home/nav) redirect to products.html?search=
   ========================================================= */

const BASKET_KEY = "aviruchibasket";
const CHECKOUT_GATE_KEY = "aviruchi_checkout_gate_v1";
const DELIVERY_FEE = 3.99;

const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => [...r.querySelectorAll(s)];
const money = (n) => Number(n || 0).toFixed(2);

function safe(fn) {
  try { fn(); } catch (e) { console.error(e); }
}

/* -----------------------------
   Basket storage + badge
----------------------------- */
function getBasket() {
  try {
    return JSON.parse(localStorage.getItem(BASKET_KEY)) || [];
  } catch {
    return [];
  }
}

function setBasket(items) {
  localStorage.setItem(BASKET_KEY, JSON.stringify(items));
  updateBasketBadges();
}

function updateBasketBadges() {
  const items = getBasket();
  const count = items.reduce((s, it) => s + (Number(it.qty) || 0), 0);

  // Used across site headers
  qsa(".cart-count").forEach((el) => (el.textContent = count));

  // Used on some pages (e.g. products header badge)
  const byId = qs("#basket-count");
  if (byId) byId.textContent = count;
}

/* -----------------------------
   Basket helpers
----------------------------- */
function basketLinesDetailed() {
  const lines = getBasket().map((it) => {
    const qty = Number(it.qty) || 0;
    const packLabel = it.pack?.label || "";
    const packPrice = Number(it.pack?.price) || 0;
    const lineTotal = packPrice * qty;

    return {
      ...it,
      qty,
      packLabel,
      packPrice,
      lineTotal,
    };
  });

  return lines;
}

function basketTotals() {
  const lines = basketLinesDetailed();
  const items = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  const delivery = lines.length ? DELIVERY_FEE : 0;
  return { items, subtotal, delivery, total: subtotal + delivery };
}

function changeLineQty(index, delta) {
  const lines = getBasket();
  if (!lines[index]) return;

  const next = (Number(lines[index].qty) || 0) + delta;

  if (next <= 0) lines.splice(index, 1);
  else lines[index].qty = next;

  setBasket(lines);
}

function removeLine(index) {
  const lines = getBasket();
  if (!lines[index]) return;
  lines.splice(index, 1);
  setBasket(lines);
}

/* -----------------------------
   Nav
----------------------------- */
function setupNav() {
  const btn = qs(".menu-btn");
  const nav = qs(".nav-links");
  if (btn && nav) btn.addEventListener("click", () => nav.classList.toggle("open"));

  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  qsa(".nav-links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("active");
  });
}

/* -----------------------------
   Search (redirect to products)
   NOTE: Products page uses its own products.js search filtering.
----------------------------- */
function setupSearchRedirects() {
  const pairs = [
    { form: "#homeSearchForm", input: "#homeSearchInput" },
    { form: "#navSearchForm", input: "#navSearchInput" },
  ];

  pairs.forEach(({ form, input }) => {
    const f = qs(form);
    const i = qs(input);
    if (!f || !i) return;

    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = (i.value || "").trim();
      const isProductsPage = !!document.getElementById("products-grid");

      // Always navigate to products page with the query to avoid timing/race issues
      // (this reloads the page but guarantees the search param is handled consistently)
      location.href = q ? `products.html?search=${encodeURIComponent(q)}` : "products.html";
    });
  });
}




/* -----------------------------
   Basket page rendering
----------------------------- */
function renderBasketPage() {
  const listEl = qs("#basketList");
  if (!listEl) return; // Not on basket page

  const emptyEl = qs("#basketEmpty");
  const sumItems = qs("#sumItems");
  const sumSub = qs("#sumSubtotal");
  const sumDel = qs("#sumDelivery");
  const sumTotal = qs("#sumTotal");
  const checkoutBtn = qs("#goCheckout");

  const lines = basketLinesDetailed();

  if (!lines.length) {
    if (emptyEl) emptyEl.style.display = "block";
    listEl.innerHTML = "";
    if (checkoutBtn) checkoutBtn.disabled = true;
  } else {
    if (emptyEl) emptyEl.style.display = "none";
    if (checkoutBtn) checkoutBtn.disabled = false;

    listEl.innerHTML = lines
      .map((l, idx) => {
        const packText = l.packLabel ? `• ${l.packLabel}` : "";
        const priceText = l.packPrice ? `£${money(l.packPrice)}` : "£0.00";

        return `
          <div class="basket-item" style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.08)">
            <div style="min-width:0">
              <div style="font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.name || "Item"}</div>
              <div style="color:#7a6a5f;font-size:0.9rem">${(l.category || "")}${packText} • ${priceText}</div>

              <div style="display:flex;gap:10px;align-items:center;margin-top:8px;flex-wrap:wrap">
                <div class="qty" style="display:inline-flex;align-items:center;border:1px solid rgba(0,0,0,0.18);border-radius:999px;overflow:hidden">
                  <button type="button" data-bdec="${idx}" style="border:none;background:#f3efe9;padding:6px 10px;font-weight:900;cursor:pointer">-</button>
                  <input value="${l.qty}" readonly style="width:42px;border:none;text-align:center;background:#fff;font-weight:800" />
                  <button type="button" data-binc="${idx}" style="border:none;background:#f3efe9;padding:6px 10px;font-weight:900;cursor:pointer">+</button>
                </div>

                <button type="button" data-brem="${idx}" style="border:1px solid rgba(0,0,0,0.18);background:#fff;border-radius:999px;padding:7px 12px;cursor:pointer;font-weight:800">
                  Remove
                </button>
              </div>
            </div>

            <div style="font-weight:900;white-space:nowrap">£${money(l.lineTotal)}</div>
          </div>
        `;
      })
      .join("");
  }

  // Click handling (qty + remove)
  listEl.onclick = (e) => {
    const dec = e.target.closest("[data-bdec]");
    const inc = e.target.closest("[data-binc]");
    const rem = e.target.closest("[data-brem]");

    if (dec) {
      changeLineQty(Number(dec.dataset.bdec), -1);
      renderBasketPage();
    }
    if (inc) {
      changeLineQty(Number(inc.dataset.binc), 1);
      renderBasketPage();
    }
    if (rem) {
      removeLine(Number(rem.dataset.brem));
      renderBasketPage();
    }
  };

  const t = basketTotals();
  if (sumItems) sumItems.textContent = String(t.items);
  if (sumSub) sumSub.textContent = money(t.subtotal);
  if (sumDel) sumDel.textContent = money(t.delivery);
  if (sumTotal) sumTotal.textContent = money(t.total);

  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      if (!basketLinesDetailed().length) return;
      sessionStorage.setItem(CHECKOUT_GATE_KEY, "1");
      location.href = "checkout.html";
    };
  }
}

/* -----------------------------
   Checkout page rendering
----------------------------- */
function renderCheckoutPage() {
  const form = qs("#checkoutForm");
  const summary = qs("#checkoutSummary");
  if (!form || !summary) return; // Not on checkout page

  if (sessionStorage.getItem(CHECKOUT_GATE_KEY) !== "1") {
    location.href = "basket.html";
    return;
  }

  const lines = basketLinesDetailed();
  if (!lines.length) {
    location.href = "basket.html";
    return;
  }

  const t = basketTotals();

  summary.innerHTML = `
    ${lines
      .map((l) => {
        const packText = l.packLabel ? ` (${l.packLabel})` : "";
        return `<div style="display:flex;justify-content:space-between;gap:10px;margin:6px 0">
          <span>${l.qty} × ${l.name || "Item"}${packText}</span>
          <strong>£${money(l.lineTotal)}</strong>
        </div>`;
      })
      .join("")}

    <div style="border-top:1px dashed rgba(0,0,0,0.25);margin-top:10px;padding-top:10px">
      <div style="display:flex;justify-content:space-between"><span>Subtotal</span><strong>£${money(t.subtotal)}</strong></div>
      <div style="display:flex;justify-content:space-between"><span>Delivery</span><strong>£${money(t.delivery)}</strong></div>
      <div style="display:flex;justify-content:space-between;margin-top:8px"><span>Total</span><strong>£${money(t.total)}</strong></div>
    </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const WA_NUMBER = "447344269839"; // no +, no spaces

    const name = (qs("#name")?.value || "").trim();
    const phone = (qs("#phone")?.value || "").trim();
    const email = (qs("#email")?.value || "").trim();
    const address = (qs("#address")?.value || "").trim();
    const postcode = (qs("#postcode")?.value || "").trim();

    const lines = basketLinesDetailed();
    const t = basketTotals();

    const orderSummary = lines
      .map((l) => {
        const packText = l.packLabel ? ` (${l.packLabel})` : "";
        return `${l.qty} x ${l.name}${packText} - £${money(l.lineTotal)}`;
      })
      .join("\n");

    const msg = `Hello Another Order,
Name: *${name}*
Phone: *${phone}*
Email: *${email}*
Postcode: *${postcode}*
Delivery Address: *${address}*

Order:
${orderSummary}

Total: *£${money(t.total)}*`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

    // Open WhatsApp (new tab)
    window.open(url, "_blank", "noopener,noreferrer");

    // Optional: keep basket until they actually send in WhatsApp (so DO NOTHING else)
  });
}
function setupRevealAnimations() {
  // Add reveal class automatically (so you don't have to edit every HTML file)
  const candidates = [
    ...document.querySelectorAll("main .card"),
    ...document.querySelectorAll("main .section-head"),
    ...document.querySelectorAll("main .picks-grid > article"),
    ...document.querySelectorAll("main .row > section, main .row > aside"),
  ];

  const els = [...new Set(candidates)].filter(Boolean);
  if (!els.length) return;

  els.forEach((el) => el.classList.add("reveal"));

  const show = (el) => el.classList.add("is-visible");

  // Reveal the first items instantly on load (nice entrance)
  requestAnimationFrame(() => {
    els.slice(0, 2).forEach(show);
  });

  if (!("IntersectionObserver" in window)) {
    els.forEach(show);
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => obs.observe(el));
}

/* -----------------------------
   INIT
----------------------------- */
function init() {
  setupNav();
  setupSearchRedirects();
  setupRevealAnimations();
  setupInstagramCarousel();

  updateBasketBadges();
  renderBasketPage();
  renderCheckoutPage();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => safe(init));
} else {
  safe(init);
  
}
function setupInstagramCarousel(){
  const carousel = document.querySelector(".ig-carousel");
  if (!carousel) return;

  const viewport = carousel.querySelector(".ig-viewport");
  const track = carousel.querySelector(".ig-track");
  const prev = carousel.querySelector(".ig-prev");
  const next = carousel.querySelector(".ig-next");

  const updateButtons = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max;
  };

  const scrollByPage = (dir) => {
    track.scrollBy({ left: dir * viewport.clientWidth, behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollByPage(-1));
  next.addEventListener("click", () => scrollByPage(1));

  track.addEventListener("scroll", () => requestAnimationFrame(updateButtons), { passive: true });
  window.addEventListener("resize", updateButtons);

  // Instagram embeds resize after load -> refresh buttons after a short delay too
  window.addEventListener("load", () => {
    setTimeout(updateButtons, 600);
    setTimeout(updateButtons, 1600);
  });

  updateButtons();
}

function setupRevealAnimations() {
  const candidates = [
    // Generic site pages
    ...qsa("main"),
    ...qsa("main .card"),
    ...qsa("main .section-head"),
    ...qsa("main .row section"),
    ...qsa("main .row aside"),

    // Reviews / Contact (if they use these classes)
    ...qsa("main .review"),
    ...qsa("main .contact-card"),

    // Products page
    ...qsa("#products-grid"),
    ...qsa("main .product-card"),
    ...qsa("main .products-hero"),
    ...qsa("main .products-header-inner"),
    ...qsa("main .results-bar"),
  ];

  const els = [...new Set(candidates)].filter(Boolean);
  if (!els.length) return;

  // apply hidden state
  els.forEach((el) => el.classList.add("reveal", "indian-reveal"));

  const show = (el) => el.classList.add("is-visible");

  // show a couple instantly
  requestAnimationFrame(() => els.slice(0, 2).forEach(show));

  if (!("IntersectionObserver" in window)) {
    els.forEach(show);
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => obs.observe(el));

  // dynamic inserts (products re-render, etc.)
  const mainEl = document.querySelector("main");
  if (!mainEl || !("MutationObserver" in window)) return;

  const mo = new MutationObserver((mutations) => {
    mutations.forEach((mut) => {
      mut.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;

        const targets = [];

        if (node.matches?.(".product-card, .card, .section-head, .results-bar, .review, .contact-card")) {
          targets.push(node);
        }

        node
          .querySelectorAll?.(".product-card, .card, .section-head, .results-bar, .review, .contact-card")
          .forEach((el) => targets.push(el));

        targets.forEach((el) => {
          el.classList.add("reveal", "indian-reveal");
          obs.observe(el);
        });
      });
    });
  });

  mo.observe(mainEl, { childList: true, subtree: true });
}
