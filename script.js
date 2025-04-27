// حفظ واختيار اللغة function setLanguage(lang) { localStorage.setItem('selectedLanguage', lang); applyLanguage(lang); }

// تطبيق اللغة function applyLanguage(lang) { document.documentElement.setAttribute('lang', lang); document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

if (lang === 'ar') { // الصفحة الرئيسية if (document.getElementById('hero-title')) { document.getElementById('hero-title').textContent = 'اكتشفي الجمال الطبيعي الحقيقي مع NaturaQ'; document.getElementById('hero-description').textContent = 'منتجات طبيعية للعناية ببشرتكِ مصنوعة من أفضل المكونات العضوية.'; document.getElementById('shop-now-btn').textContent = 'تسوقي الآن'; } if (document.getElementById('ai-message')) { document.getElementById('ai-message').textContent = 'هل تحتاج مساعدة؟ تحدث مع الذكاء الاصطناعي لمساعدتك الآن!'; }

if (document.getElementById('product1-name')) document.getElementById('product1-name').textContent = 'صابونة طبيعية يدوية';
if (document.getElementById('product2-name')) document.getElementById('product2-name').textContent = 'سيروم الأرز المخمر';
if (document.getElementById('product3-name')) document.getElementById('product3-name').textContent = 'قناع طين البحر الميت';
if (document.getElementById('product4-name')) document.getElementById('product4-name').textContent = 'زيت الأرغان النقي';
if (document.getElementById('product5-name')) document.getElementById('product5-name').textContent = 'مجموعة تنظيف عميق';
if (document.getElementById('product6-name')) document.getElementById('product6-name').textContent = 'تونر ماء الورد';

const detailButtons = document.querySelectorAll('.btn-secondary');
detailButtons.forEach(btn => btn.textContent = 'عرض التفاصيل');

// لماذا تختارنا
if (document.getElementById('why-choose-title')) document.getElementById('why-choose-title').textContent = 'لماذا تختارين NaturaQ؟';
if (document.getElementById('reason1-title')) document.getElementById('reason1-title').textContent = 'مكونات طبيعية 100%';
if (document.getElementById('reason1-desc')) document.getElementById('reason1-desc').textContent = 'منتجاتنا مصنوعة من أفضل المكونات العضوية للعناية الفائقة ببشرتكِ.';
if (document.getElementById('reason2-title')) document.getElementById('reason2-title').textContent = 'شحن سريع وآمن';
if (document.getElementById('reason2-desc')) document.getElementById('reason2-desc').textContent = 'نضمن توصيل آمن لمنتجاتك بأعلى جودة وفي أسرع وقت.';
if (document.getElementById('reason3-title')) document.getElementById('reason3-title').textContent = 'دعم متواصل للعملاء';
if (document.getElementById('reason3-desc')) document.getElementById('reason3-desc').textContent = 'فريق دعم متوفر دائمًا للرد على استفساراتك بكل احترافية.';
if (document.getElementById('reason4-title')) document.getElementById('reason4-title').textContent = 'رضاكِ أولويتنا';
if (document.getElementById('reason4-desc')) document.getElementById('reason4-desc').textContent = 'نضمن لكِ تجربة تسوق فريدة وجودة تليق بجمالكِ.';

// صفحة تفاصيل المنتج
if (document.getElementById('product-title')) document.getElementById('product-title').textContent = 'صابونة طبيعية يدوية';
if (document.getElementById('product-description')) document.getElementById('product-description').textContent = 'صابونة طبيعية مصنوعة يدويًا من أجود المكونات العضوية لتنظيف وترطيب بشرتكِ بلطف.';
if (document.getElementById('price-label')) document.getElementById('price-label').textContent = 'السعر:';
if (document.getElementById('total-label')) document.getElementById('total-label').textContent = 'الإجمالي:';
if (document.getElementById('confirm-btn')) document.getElementById('confirm-btn').textContent = 'تأكيد الطلب عبر واتساب';
if (document.getElementById('back-btn')) document.getElementById('back-btn').textContent = 'رجوع إلى القائمة الرئيسية';

// السلة
if (document.getElementById('cart-title')) document.getElementById('cart-title').textContent = 'سلة المشتريات';
if (document.getElementById('checkout-btn')) document.getElementById('checkout-btn').textContent = 'إتمام الطلب';

} else { // الصفحة الرئيسية if (document.getElementById('hero-title')) { document.getElementById('hero-title').textContent = 'Discover True Natural Beauty with NaturaQ'; document.getElementById('hero-description').textContent = 'Natural care products crafted from the finest organic ingredients.'; document.getElementById('shop-now-btn').textContent = 'Shop Now'; } if (document.getElementById('ai-message')) { document.getElementById('ai-message').textContent = 'Need help? Talk to our AI assistant now!'; }

if (document.getElementById('product1-name')) document.getElementById('product1-name').textContent = 'Natural Handmade Soap';
if (document.getElementById('product2-name')) document.getElementById('product2-name').textContent = 'Fermented Rice Serum';
if (document.getElementById('product3-name')) document.getElementById('product3-name').textContent = 'Dead Sea Mud Mask';
if (document.getElementById('product4-name')) document.getElementById('product4-name').textContent = 'Pure Argan Oil';
if (document.getElementById('product5-name')) document.getElementById('product5-name').textContent = 'Deep Cleanse Kit';
if (document.getElementById('product6-name')) document.getElementById('product6-name').textContent = 'Rose Water Toner';

const detailButtons = document.querySelectorAll('.btn-secondary');
detailButtons.forEach(btn => btn.textContent = 'View Details');

// لماذا تختارنا
if (document.getElementById('why-choose-title')) document.getElementById('why-choose-title').textContent = 'Why Choose NaturaQ?';
if (document.getElementById('reason1-title')) document.getElementById('reason1-title').textContent = '100% Natural Ingredients';
if (document.getElementById('reason1-desc')) document.getElementById('reason1-desc').textContent = 'Our products are made from the finest organic ingredients to care for your skin.';
if (document.getElementById('reason2-title')) document.getElementById('reason2-title').textContent = 'Fast & Secure Shipping';
if (document.getElementById('reason2-desc')) document.getElementById('reason2-desc').textContent = 'We guarantee safe and high-quality delivery of your orders.';
if (document.getElementById('reason3-title')) document.getElementById('reason3-title').textContent = 'Continuous Customer Support';
if (document.getElementById('reason3-desc')) document.getElementById('reason3-desc').textContent = 'Our support team is always available to assist you professionally.';
if (document.getElementById('reason4-title')) document.getElementById('reason4-title').textContent = 'Your Satisfaction is Our Priority';
if (document.getElementById('reason4-desc')) document.getElementById('reason4-desc').textContent = 'We ensure you a unique shopping experience and premium quality.';

// صفحة تفاصيل المنتج
if (document.getElementById('product-title')) document.getElementById('product-title').textContent = 'Natural Handmade Soap';
if (document.getElementById('product-description')) document.getElementById('product-description').textContent = 'A handmade natural soap crafted from the finest organic ingredients to gently cleanse and hydrate your skin.';
if (document.getElementById('price-label')) document.getElementById('price-label').textContent = 'Price:';
if (document.getElementById('total-label')) document.getElementById('total-label').textContent = 'Total:';
if (document.getElementById('confirm-btn')) document.getElementById('confirm-btn').textContent = 'Confirm Order on WhatsApp';
if (document.getElementById('back-btn')) document.getElementById('back-btn').textContent = 'Back to Home';

// السلة
if (document.getElementById('cart-title')) document.getElementById('cart-title').textContent = 'Shopping Cart';
if (document.getElementById('checkout-btn')) document.getElementById('checkout-btn').textContent = 'Checkout';

} 

<script>
  // إظهار الزر لما تنزل الصفحة
  window.onscroll = function() {
    const btn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  };

  // ترجع لأعلى الصفحة بسلاسة
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>



}

// عند تحميل الصفحة document.addEventListener('DOMContentLoaded', () => { const savedLanguage = localStorage.getItem('selectedLanguage') || 'ar'; applyLanguage(savedLanguage); });

