// سكريبت فتح وغلق تفاصيل المنتجات
document.querySelectorAll('.toggle-details').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    if (details.style.display === 'block') {
      details.style.display = 'none';
    } else {
      details.style.display = 'block';
    }
  });
});

// سكريبت تغيير اللغة
function setLanguage(lang) {
  if (lang === 'ar') {
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');

    // الهيرو
    document.querySelector('.hero h1').innerHTML = 'اكتشف الجمال الطبيعي الحقيقي مع NaturaQ.';
    document.querySelector('.hero p').innerHTML = 'منتجات عناية بالبشرة مصنوعة من أفضل المكونات الطبيعية.';
    document.querySelector('.hero a').innerHTML = 'تسوق الآن';

    // المنتجات
    const products = document.querySelectorAll('#products .section');
    
    // منتج 1
    products[0].querySelector('h2').innerHTML = 'صابونة طبيعية';
    products[0].querySelector('strong').innerHTML = 'السعر: 45 ر.ق';
    products[0].querySelector('.toggle-details').innerHTML = 'عرض التفاصيل';
    products[0].querySelector('.details p').innerHTML = 'استمتع بالتنظيف النقي مع صابوننا الطبيعي المصنوع من الزيوت العضوية والمستخلصات النباتية.';
    const soapFeatures = products[0].querySelectorAll('.details ul li');
    soapFeatures[0].innerHTML = 'خالي من المواد الكيميائية والعطور الاصطناعية.';
    soapFeatures[1].innerHTML = 'غني بزيوت الترطيب الطبيعية.';
    soapFeatures[2].innerHTML = 'مثالي للبشرة الحساسة.';
    products[0].querySelector('.details a').innerHTML = 'اطلب الآن';

    // منتج 2
    products[1].querySelector('h2').innerHTML = 'سيروم الأرز المخمر';
    products[1].querySelector('strong').innerHTML = 'السعر: 90 ر.ق';
    products[1].querySelector('.toggle-details').innerHTML = 'عرض التفاصيل';
    products[1].querySelector('.details p').innerHTML = 'عزز توهج بشرتك مع سيروم الأرز المخمر الغني بمحفزات الكولاجين وعناصر الترطيب.';
    const serumFeatures = products[1].querySelectorAll('.details ul li');
    serumFeatures[0].innerHTML = 'يدعم إنتاج الكولاجين الطبيعي.';
    serumFeatures[1].innerHTML = 'يحسن مرونة وإشراق البشرة.';
    serumFeatures[2].innerHTML = 'يعزز من توهج البشرة الباهتة.';
    products[1].querySelector('.details a').innerHTML = 'اطلب الآن';

    // قسم الواتساب
    document.querySelector('.whatsapp-section h2').innerHTML = 'هل تحتاج مساعدة؟ تواصل معنا';
    document.querySelector('.whatsapp-section a').innerHTML = 'تواصل عبر واتساب';

    // الفوتر
    document.querySelector('.footer').innerHTML = '© 2025 NaturaQ. جميع الحقوق محفوظة.';
  } else {
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');

    // الهيرو
    document.querySelector('.hero h1').innerHTML = 'Experience True Natural Beauty with NaturaQ.';
    document.querySelector('.hero p').innerHTML = 'Handcrafted skincare from the finest natural ingredients.';
    document.querySelector('.hero a').innerHTML = 'Shop Now';

    // المنتجات
    const products = document.querySelectorAll('#products .section');
    
    // منتج 1
    products[0].querySelector('h2').innerHTML = 'Natural Handmade Soap';
    products[0].querySelector('strong').innerHTML = 'Price: 45 ر.ق';
    products[0].querySelector('.toggle-details').innerHTML = 'Show Details';
    products[0].querySelector('.details p').innerHTML = 'Discover the purest form of cleansing with our Natural Handmade Soap, made from organic oils and botanical extracts.';
    const soapFeatures = products[0].querySelectorAll('.details ul li');
    soapFeatures[0].innerHTML = 'Free from chemicals and artificial fragrances.';
    soapFeatures[1].innerHTML = 'Rich in natural hydration oils.';
    soapFeatures[2].innerHTML = 'Perfect for sensitive skin.';
    products[0].querySelector('.details a').innerHTML = 'Order Now';

    // منتج 2
    products[1].querySelector('h2').innerHTML = 'Fermented Rice Serum';
    products[1].querySelector('strong').innerHTML = 'Price: 90 ر.ق';
    products[1].querySelector('.toggle-details').innerHTML = 'Show Details';
    products[1].querySelector('.details p').innerHTML = 'Boost your skin glow with our Fermented Rice Serum, rich in collagen boosters and hydration elements.';
    const serumFeatures = products[1].querySelectorAll('.details ul li');
    serumFeatures[0].innerHTML = 'Natural collagen production support.';
    serumFeatures[1].innerHTML = 'Improves skin elasticity and radiance.';
    serumFeatures[2].innerHTML = 'Brightens dull skin.';
    products[1].querySelector('.details a').innerHTML = 'Order Now';

    // قسم الواتساب
    document.querySelector('.whatsapp-section h2').innerHTML = 'Need Help? Contact Us!';
    document.querySelector('.whatsapp-section a').innerHTML = 'Chat on WhatsApp';

    // الفوتر
    document.querySelector('.footer').innerHTML = '© 2025 NaturaQ. All rights reserved.';
  }
}