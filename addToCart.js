// addToCart.js - إضافة المنتجات إلى السلة في Firestore حسب المستخدم

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"; import { getFirestore, doc, setDoc, getDoc, updateDoc, increment, collection } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"; import { app } from "./firebase-config.js";

const auth = getAuth(app); const db = getFirestore(app);

export async function addToCart(product) { onAuthStateChanged(auth, async (user) => { if (user) { const cartRef = doc(collection(db, "carts", user.uid, "items"), product.id); const cartSnap = await getDoc(cartRef);

if (cartSnap.exists()) {
    await updateDoc(cartRef, {
      quantity: increment(product.quantity)
    });
  } else {
    await setDoc(cartRef, product);
  }

  alert("تمت إضافة المنتج إلى السلة.");
} else {
  window.location.href = "login.html";
}

}); }

// مثال للاستخدام: // const product = { //   id: "soap001", //   name: "صابونة طبيعية يدوية", //   price: 45, //   quantity: 1, //   image: "../images/soap.png" // }; // addToCart(product);

