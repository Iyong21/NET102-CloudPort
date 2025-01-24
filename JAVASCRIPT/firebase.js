// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpbUkoWO7LgmaiezW9OOc-wm2CaLOFVGU",
  authDomain: "net102---cloudport.firebaseapp.com",
  projectId: "net102---cloudport",
  storageBucket: "net102---cloudport.appspot.com",
  messagingSenderId: "690862702880",
  appId: "1:690862702880:web:d948c163dc6e6245061745",
  measurementId: "G-LCQYNDMSJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

