// ملف addToCart.js import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"; import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"; import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = { apiKey: "AIzaSyA1rtsF8gu6qPUJ-SoomECIUG__VJPjMMI", authDomain: "naturaq-store.firebaseapp.com", projectId: "naturaq-store", storageBucket: "naturaq-store.appspot.com", messagingSenderId: "638923298702", appId: "1:638923298702:web:8ed219547236362048b6df" };

const app = initializeApp(firebaseConfig); const auth = getAuth(app); const db = getFirestore(app);

export function addToCart(product) { onAuthStateChanged(auth, async (user) => { if (!user) { alert("يجب تسجيل الدخول أولاً!"); window.location.href = "../login.html"; return; }

const itemRef = doc(db, "carts", user.uid, "items", product.id);

try {
  await setDoc(itemRef, {
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: product.quantity
  });
  alert("تمت إضافة المنتج إلى السلة!");
} catch (e) {
  console.error("خطأ أثناء الإضافة للسلة: ", e);
  alert("حدث خطأ، حاول مرة أخرى.");
}

}); }

