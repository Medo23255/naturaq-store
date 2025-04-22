// ===== script.js =====

// تغيير اللغة وحفظ الاختيار
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  applyLanguage(lang);
}

// تطبيق اللغة المختارة
function applyLanguage(lang) {
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

// عند تحميل الصفحة شوف اللغة المحفوظة وطبقها
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('language') || 'ar'; // الافتراضي عربي
  applyLanguage(savedLang);
});
