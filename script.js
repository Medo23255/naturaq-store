// حفظ واختيار اللغة
function setLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
  applyLanguage(lang);
}

// تطبيق اللغة على الصفحة
function applyLanguage(lang) {
  if (lang === 'ar') {
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');

    // تحديث النصوص العامة
    document.getElementById('hero-title').textContent = 'اكتشفي الجمال الطبيعي الحقيقي مع NaturaQ';
    document.getElementById('hero-description').textContent = 'منتجات طبيعية للعناية ببشرتكِ مصنوعة من أفضل المكونات العضوية.';
    document.getElementById('shop-now-btn').textContent = 'تسوقي الآن';
    document.getElementById('ai-message').textContent = 'هل تحتاج مساعدة؟ تحدث مع الذكاء الاصطناعي لمساعدتك الآن!';

    // تحديث أسماء المنتجات
    if (document.getElementById('product1-name')) document.getElementById('product1-name').textContent = 'صابونة طبيعية يدوية';
    if (document.getElementById('product2-name')) document.getElementById('product2-name').textContent = 'سيروم الأرز المخمر';
    if (document.getElementById('product3-name')) document.getElementById('product3-name').textContent = 'قناع طين البحر الميت';
    if (document.getElementById('product4-name')) document.getElementById('product4-name').textContent = 'زيت الأرغان النقي';
    if (document.getElementById('product5-name')) document.getElementById('product5-name').textContent = 'مجموعة تنظيف عميق';
    if (document.getElementById('product6-name')) document.getElementById('product6-name').textContent = 'تونر ماء الورد';

    // تحديث زر عرض التفاصيل
    const detailButtons = document.querySelectorAll('.btn-secondary');
    detailButtons.forEach(btn => btn.textContent = 'عرض التفاصيل');

  } else {
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');

    // تحديث النصوص العامة
    document.getElementById('hero-title').textContent = 'Discover True Natural Beauty with NaturaQ';
    document.getElementById('hero-description').textContent = 'Natural care products crafted from the finest organic ingredients.';
    document.getElementById('shop-now-btn').textContent = 'Shop Now';
    document.getElementById('ai-message').textContent = 'Need help? Talk to our AI assistant now!';

    // تحديث أسماء المنتجات
    if (document.getElementById('product1-name')) document.getElementById('product1-name').textContent = 'Natural Handmade Soap';
    if (document.getElementById('product2-name')) document.getElementById('product2-name').textContent = 'Fermented Rice Serum';
    if (document.getElementById('product3-name')) document.getElementById('product3-name').textContent = 'Dead Sea Mud Mask';
    if (document.getElementById('product4-name')) document.getElementById('product4-name').textContent = 'Pure Argan Oil';
    if (document.getElementById('product5-name')) document.getElementById('product5-name').textContent = 'Deep Cleanse Kit';
    if (document.getElementById('product6-name')) document.getElementById('product6-name').textContent = 'Rose Water Toner';

    // تحديث زر عرض التفاصيل
    const detailButtons = document.querySelectorAll('.btn-secondary');
    detailButtons.forEach(btn => btn.textContent = 'View Details');
  }
}

// عند تحميل الصفحة تأكد من اللغة المختارة
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'ar'; // افتراضي عربي
  applyLanguage(savedLanguage);


if (lang === 'ar') {
  // نصوص عامة...

  // نصوص لماذا تختارنا
  document.getElementById('why-choose-title').textContent = 'لماذا تختارين NaturaQ؟';
  document.getElementById('reason1-title').textContent = 'مكونات طبيعية 100%';
  document.getElementById('reason1-desc').textContent = 'منتجاتنا مصنوعة من أفضل المكونات العضوية للعناية الفائقة ببشرتكِ.';
  document.getElementById('reason2-title').textContent = 'شحن سريع وآمن';
  document.getElementById('reason2-desc').textContent = 'نضمن توصيل آمن لمنتجاتك بأعلى جودة وفي أسرع وقت.';
  document.getElementById('reason3-title').textContent = 'دعم متواصل للعملاء';
  document.getElementById('reason3-desc').textContent = 'فريق دعم متوفر دائمًا للرد على استفساراتك بكل احترافية.';
  document.getElementById('reason4-title').textContent = 'رضاكِ أولويتنا';
  document.getElementById('reason4-desc').textContent = 'نضمن لكِ تجربة تسوق فريدة وجودة تليق بجمالكِ.';
  
} else {
  // نصوص عامة...

  // نصوص لماذا تختارنا
  document.getElementById('why-choose-title').textContent = 'Why Choose NaturaQ?';
  document.getElementById('reason1-title').textContent = '100% Natural Ingredients';
  document.getElementById('reason1-desc').textContent = 'Our products are made from the finest organic ingredients to care for your skin.';
  document.getElementById('reason2-title').textContent = 'Fast & Secure Shipping';
  document.getElementById('reason2-desc').textContent = 'We guarantee safe and high-quality delivery of your orders.';
  document.getElementById('reason3-title').textContent = 'Continuous Customer Support';
  document.getElementById('reason3-desc').textContent = 'Our support team is always available to assist you professionally.';
  document.getElementById('reason4-title').textContent = 'Your Satisfaction is Our Priority';
  document.getElementById('reason4-desc').textContent = 'We ensure you a unique shopping experience and premium quality.';

});