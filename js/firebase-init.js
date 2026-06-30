// Import Firebase modules (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// Aapki Firebase configuration (yahan paste kar di gayi hai)
const firebaseConfig = {
  apiKey: "AIzaSyD9s2lSLwqW8pHA82dgJeq0VaaGV4XS-KY",
  authDomain: "dualdream-visa.firebaseapp.com",
  projectId: "dualdream-visa",
  storageBucket: "dualdream-visa.firebasestorage.app",
  messagingSenderId: "848034000791",
  appId: "1:848034000791:web:87a67292035ac7c85d1ed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
