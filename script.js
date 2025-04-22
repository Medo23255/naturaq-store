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