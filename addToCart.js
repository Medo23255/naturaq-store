// addToCart.js import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"; import { getFirestore, doc, setDoc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"; import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = { apiKey: "AlzaSyA1rtsF8gu6qPUJ-SoomECIUG__VJPjMMI", authDomain: "naturaQ-store.firebaseapp.com", projectId: "naturaQ-store", storageBucket: "naturaQ-store.appspot.com", messagingSenderId: "638923298702", appId: "1:638923298702:web:8ed219547236362048b6df" };

const app = initializeApp(firebaseConfig); const db = getFirestore(app); const auth = getAuth(app);

export async function addToCart(product) { onAuthStateChanged(auth, async (user) => { if (user) { const cartRef = doc(db, "carts", user.uid, "items", product.id); const itemSnap = await getDoc(cartRef);

if (itemSnap.exists()) {
    await updateDoc(cartRef, {
      quantity: itemSnap.data().quantity + 1
    });
  } else {
    await setDoc(cartRef, {
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1
    });
  }

  alert("تمت إضافة المنتج إلى السلة بنجاح!");
} else {
  window.location.href = "../login.html";
}

}); }

