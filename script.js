// وظيفة تغيير اللغة
function setLanguage(lang) {
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        localStorage.setItem('lang', 'ar');

        document.querySelector('.hero h1').innerHTML = 'اكتشف الجمال الطبيعي الحقيقي مع NaturaQ';
        document.querySelector('.hero p').innerHTML = 'منتجات طبيعية للعناية بجمالك ونضارة بشرتك.';
        document.querySelector('.btn-primary').innerHTML = 'تسوق الآن';
        document.querySelectorAll('.btn-details').forEach(btn => btn.innerHTML = 'تفاصيل المنتج');
        document.querySelector('.footer').innerHTML = '© 2025 NaturaQ. جميع الحقوق محفوظة.';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        localStorage.setItem('lang', 'en');

        document.querySelector('.hero h1').innerHTML = 'Discover True Natural Beauty with NaturaQ';
        document.querySelector('.hero p').innerHTML = 'Natural products to enhance your beauty and skin radiance.';
        document.querySelector('.btn-primary').innerHTML = 'Shop Now';
        document.querySelectorAll('.btn-details').forEach(btn => btn.innerHTML = 'View Details');
        document.querySelector('.footer').innerHTML = '© 2025 NaturaQ. All rights reserved.';
    }
}

// تطبيق اللغة المحفوظة عند فتح الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ar';
    setLanguage(savedLang);

    // وظيفة زر تفاصيل المنتج
    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            window.location.href = `products/${product}.html`;
        });
    });
});
