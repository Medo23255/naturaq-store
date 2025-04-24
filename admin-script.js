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

// عرض اسم المستخدم وتأكيد أنه Admin
onAuthStateChanged(auth, async (user) => {
  if (!user || user.email !== "admin@naturaq.com") {
    alert("هذه الصفحة مخصصة للإدارة فقط.");
    window.location.href = "login.html";
  } else {
    await loadProducts();
    await loadUsers();
  }
});

// تسجيل الخروج
window.logout = function () {
  signOut(auth).then(() => window.location.href = "login.html");
};

// عرض الصورة المرفوعة مؤقتًا
const productImageInput = document.getElementById("product-image");
productImageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("image-preview").src = reader.result;
      document.getElementById("image-preview").style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// إضافة منتج جديد
window.addProduct = async function () {
  const name = document.getElementById("product-name").value;
  const desc = document.getElementById("product-desc").value;
  const price = document.getElementById("product-price").value;
  const file = document.getElementById("product-image").files[0];

  if (!name || !desc || !price || !file) return alert("يرجى ملء كل البيانات واختيار صورة.");

  const imageRef = ref(storage, `products/${Date.now()}_${file.name}`);
  await uploadBytes(imageRef, file);
  const imageURL = await getDownloadURL(imageRef);

  await addDoc(collection(db, "products"), {
    name, desc, price, imageURL
  });

  alert("تمت الإضافة بنجاح");
  location.reload();
};

// تحميل المنتجات
async function loadProducts() {
  const productList = document.getElementById("product-list");
  const querySnapshot = await getDocs(collection(db, "products"));
  productList.innerHTML = "";
  querySnapshot.forEach(doc => {
    const data = doc.data();
    productList.innerHTML += `
      <div class="product-card">
        <h3>${data.name}</h3>
        <p>${data.desc}</p>
        <p>ر.ق ${data.price}</p>
        <img src="${data.imageURL}" style="max-width:100px;">
      </div>
    `;
  });
}

// تحميل المستخدمين
async function loadUsers() {
  const userList = document.getElementById("user-list");
  const usersRef = collection(db, "users");
  const snapshot = await getDocs(usersRef);
  userList.innerHTML = "";
  snapshot.forEach(doc => {
    const u = doc.data();
    userList.innerHTML += `
      <div class="user-card">
        <strong>${u.fullName}</strong><br>
        البريد: ${u.email}<br>
        الهاتف: ${u.phone}<br>
        تم التسجيل: ${u.createdAt}
      </div>
    `;
  });
}

تم الآن إنشاء صفحة لوحة التحكم بشكل احترافي وتدعم:

إضافة منتجات بصورة من الجهاز

عرض جميع المنتجات من قاعدة البيانات

عرض جميع المستخدمين المسجلين


الخطوة التالية: تجهيز سكربت admin-script.js لربط Firebase وتحميل المنتجات والمستخدمين تلقائيًا.
هل أبدأ بكتابة الكود الآن؟

