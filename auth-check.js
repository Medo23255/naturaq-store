// auth-check.js (باستخدام Firebase Modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA1rtsF8gu6qPUJ-SoomECIUG__VJPjMMI",
  authDomain: "naturaq-store.firebaseapp.com",
  projectId: "naturaq-store",
  storageBucket: "naturaq-store.appspot.com",
  messagingSenderId: "638923298702",
  appId: "1:638923298702:web:8ed21954723632048b6df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// التحقق من حالة تسجيل الدخول
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.style.display = "inline-block";
      logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
          window.location.href = "login.html";
        });
      });
    }
  }
});

// دالة تحويل إلى صفحة المنتج
window.goToProduct = function (link) {
  if (auth.currentUser) {
    window.location.href = link;
  } else {
    alert("يرجى تسجيل الدخول أولاً");
  }
};