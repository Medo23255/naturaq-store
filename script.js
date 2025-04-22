// ==================
// تغيير اللغة وحفظها
// ==================

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.body.classList.remove('ar', 'en');
  document.body.classList.add(lang);

  // إظهار النصوص المناسبة
  document.querySelectorAll('.lang-ar').forEach(el => {
    el.style.display = (lang === 'ar') ? 'inline' : 'none';
  });
  document.querySelectorAll('.lang-en').forEach(el => {
    el.style.display = (lang === 'en') ? 'inline' : 'none';
  });

  // تغيير حالة أزرار اللغة
  const btnAr = document.getElementById('btn-ar');
  const btnEn = document.getElementById('btn-en');
  if (btnAr && btnEn) {
    btnAr.classList.toggle('active', lang === 'ar');
    btnEn.classList.toggle('active', lang === 'en');
  }
}

function switchLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
  applyLanguage(lang);
}

document.addEventListener('DOMContentLoaded', function () {
  const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
  applyLanguage(savedLang);

  const btnAr = document.getElementById('btn-ar');
  const btnEn = document.getElementById('btn-en');

  if (btnAr && btnEn) {
    btnAr.addEventListener('click', () => switchLanguage('ar'));
    btnEn.addEventListener('click', () => switchLanguage('en'));
  }
});

// ================================
// كود تفاصيل المنتجات (زيادة / نقصان الكمية)
// ================================

const priceElement = document.getElementById('price');
const qtyInput = document.getElementById('quantity');
const totalSpan = document.getElementById('total');
const orderBtn = document.getElementById('orderBtn');

if (priceElement && qtyInput && totalSpan && orderBtn) {
  const price = parseFloat(priceElement.textContent);

  function updateTotal() {
    const qty = parseInt(qtyInput.value);
    totalSpan.textContent = price * qty;

    const productName = document.querySelector('h1')?.innerText || "منتج من NaturaQ";
    orderBtn.href = `https://wa.me/97470948788?text=أرغب في طلب ${qty} × ${productName} بإجمالي ${price * qty} ر.ق`;
  }

  window.increaseQty = function () {
    qtyInput.value = parseInt(qtyInput.value) + 1;
    updateTotal();
  }

  window.decreaseQty = function () {
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value = parseInt(qtyInput.value) - 1;
      updateTotal();
    }
  }

  updateTotal();
}
