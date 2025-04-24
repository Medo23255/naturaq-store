// admin-script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

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
const db = getFirestore(app);
const storage = getStorage(app);

// تحقق من الأدمن فقط
onAuthStateChanged(auth, async (user) => {
  if (!user || user.email !== "admin@naturaq.com") {
    alert("هذه الصفحة مخصصة للإدارة فقط.");
    window.location.href = "login.html";
  } else {
    await loadProducts();
    await loadUsers();
  }
});

// زر تسجيل الخروج
window.logout = function () {
  signOut(auth).then(() => window.location.href = "login.html");
};

// إضافة منتج
window.addProduct = async function () {
  const name = document.getElementById("product-name").value;
  const desc = document.getElementById("product-desc").value;
  const price = document.getElementById("product-price").value;
  const file = document.getElementById("product-image").files[0];

  if (!name || !desc || !price || !file) return alert("املأ كل البيانات.");

  const imageRef = ref(storage, `products/${Date.now()}_${file.name}`);
  await uploadBytes(imageRef, file);
  const imageURL = await getDownloadURL(imageRef);

  await addDoc(collection(db, "products"), {
    name, desc, price, imageURL
  });

  alert("تمت إضافة المنتج.");
  location.reload();
};

// عرض المنتجات
async function loadProducts() {
  const container = document.getElementById("product-list");
  const snapshot = await getDocs(collection(db, "products"));
  container.innerHTML = "";
  snapshot.forEach(doc => {
    const p = doc.data();
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.imageURL}" width="100"><br>
        <strong>${p.name}</strong><br>
        ${p.desc}<br>
        <span>ر.ق ${p.price}</span>
      </div>
    `;
  });
}

// عرض المستخدمين
async function loadUsers() {
  const container = document.getElementById("user-list");
  const snapshot = await getDocs(collection(db, "users"));
  container.innerHTML = "";
  snapshot.forEach(doc => {
    const u = doc.data();
    container.innerHTML += `
      <div class="user-card">
        <strong>${u.fullName}</strong><br>
        ${u.email} - ${u.phone}<br>
        سجل في: ${u.createdAt}
      </div>
    `;
  });
}