function setLanguage(lang) {
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.getElementById('hero-title').textContent = 'اكتشفي الجمال الطبيعي الحقيقي مع NaturaQ.';
    document.getElementById('hero-description').textContent = 'منتجات طبيعية للعناية بجمالك وتألقك.';
    document.getElementById('shop-now-btn').textContent = 'تسوقي الآن';
    document.getElementById('ai-message').textContent = 'هل تحتاج مساعدة؟ تحدث مع الذكاء الاصطناعي لمساعدتك الآن!';

    // أسماء المنتجات
    document.getElementById('product1-name').textContent = 'صابونة طبيعية يدوية';
    document.getElementById('product2-name').textContent = 'سيروم الأرز المخمر';
    document.getElementById('product3-name').textContent = 'قناع طين البحر الميت';
    document.getElementById('product4-name').textContent = 'زيت الأرغان النقي';
    document.getElementById('product5-name').textContent = 'مجموعة تنظيف عميق';
    document.getElementById('product6-name').textContent = 'تونر ماء الورد';
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.getElementById('hero-title').textContent = 'Discover True Natural Beauty with NaturaQ.';
    document.getElementById('hero-description').textContent = 'Natural care products crafted from the finest ingredients for your beauty.';
    document.getElementById('shop-now-btn').textContent = 'Shop Now';
    document.getElementById('ai-message').textContent = 'Need help? Talk to our AI assistant now!';

    // أسماء المنتجات بالإنجليزي
    document.getElementById('product1-name').textContent = 'Natural Handmade Soap';
    document.getElementById('product2-name').textContent = 'Fermented Rice Serum';
    document.getElementById('product3-name').textContent = 'Dead Sea Mud Mask';
    document.getElementById('product4-name').textContent = 'Pure Argan Oil';
    document.getElementById('product5-name').textContent = 'Deep Cleanse Kit';
    document.getElementById('product6-name').textContent = 'Rose Water Toner';
  }
}

function setLanguage(lang) {
  if (lang === 'ar') {
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');
    document.getElementById('product-name').innerText = 'صابونة طبيعية';
    document.getElementById('product-price').innerText = 'السعر: 45 ر.ق';
    document.getElementById('product-description').innerText = 'صابونة طبيعية مصنوعة من زيوت عضوية طبيعية وخالية من المواد الكيميائية، تنظف البشرة بلطف وتحافظ على رطوبتها.';
    document.getElementById('product-usage').innerText = 'رغّي الصابونة مع الماء الدافئ ومرريها على البشرة بلطف، ثم اشطفيها جيداً.';
    document.querySelector('.btn-primary').innerText = 'تأكيد الطلب عبر واتساب';
    document.querySelector('.btn-secondary').innerText = '← رجوع للقائمة الرئيسية';
  } else {
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
    document.getElementById('product-name').innerText = 'Natural Handmade Soap';
    document.getElementById('product-price').innerText = 'Price: 45 QAR';
    document.getElementById('product-description').innerText = 'A natural handmade soap made from organic oils, free from chemicals, gently cleanses the skin and retains its moisture.';
    document.getElementById('product-usage').innerText = 'Lather the soap with warm water, gently massage it onto the skin, then rinse well.';
    document.querySelector('.btn-primary').innerText = 'Confirm Order via WhatsApp';
    document.querySelector('.btn-secondary').innerText = '← Back to Main Page';
  }
}

function increaseQuantity() {
  let quantity = parseInt(document.getElementById('quantity').value);
  quantity++;
  document.getElementById('quantity').value = quantity;
  updateTotalPrice();
}

function decreaseQuantity() {
  let quantity = parseInt(document.getElementById('quantity').value);
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity').value = quantity;
    updateTotalPrice();
  }
}

function updateTotalPrice() {
  const price = 45;
  const quantity = parseInt(document.getElementById('quantity').value);
  document.getElementById('total-price').innerText = `الإجمالي: ${price * quantity} ر.ق`;
  document.getElementById('order-link').href = `https://wa.me/97470948788?text=أرغب في طلب صابونة طبيعية عدد ${quantity}`;
}