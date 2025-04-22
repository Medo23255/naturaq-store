// وظيفة لتغيير اللغة وتحديث النصوص في الصفحة
function setLanguage(lang) {
    localStorage.setItem('lang', lang);

    const isArabic = lang === 'ar';

    // تغيير اتجاه الصفحة
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // تحديث النصوص حسب اللغة
    document.getElementById('hero-title').innerHTML = isArabic ? 'اكتشف الجمال الطبيعي الحقيقي مع NaturaQ' : 'Discover True Natural Beauty with NaturaQ';
    document.getElementById('hero-subtitle').innerHTML = isArabic ? 'منتجات طبيعية للعناية بجمالك ونضارة بشرتك.' : 'Natural products to enhance your beauty and skin glow.';
    document.getElementById('shop-now').innerHTML = isArabic ? 'تسوق الآن' : 'Shop Now';
    document.getElementById('contact-title').innerHTML = isArabic ? 'هل تحتاج مساعدة؟ تواصل معنا' : 'Need Help? Contact Us!';
    document.getElementById('contact-button').innerHTML = isArabic ? 'تواصل عبر واتساب' : 'Chat on WhatsApp';
    document.querySelector('.footer').innerHTML = isArabic ? '© 2025 NaturaQ. جميع الحقوق محفوظة.' : '© 2025 NaturaQ. All rights reserved.';

    // تغيير كل أزرار تفاصيل المنتجات
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.innerHTML = isArabic ? 'تفاصيل المنتج' : 'View Product';
    });
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ar';
    setLanguage(savedLang);

    // تفعيل أزرار اللغة
    document.getElementById('btn-ar').addEventListener('click', () => setLanguage('ar'));
    document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));

    // تفعيل أزرار تفاصيل المنتجات
    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            window.location.href = `products/${product}.html`;
        });
    });
});
