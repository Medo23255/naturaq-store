// ===== script.js =====

// حفظ واختيار اللغة
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

// عند فتح الموقع، نشيك لو فيه لغة محفوظة ونطبقها
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('language') || 'ar'; // افتراضي عربي
  applyLanguage(savedLang);
});
