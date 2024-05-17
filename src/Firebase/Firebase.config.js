// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC64JmHCJ7HsEZm7MYLiWZRwF-fQuuTEV0",
  authDomain: "yumnest-7e93b.firebaseapp.com",
  projectId: "yumnest-7e93b",
  storageBucket: "yumnest-7e93b",
  messagingSenderId: "433674755747",
  appId: "1:433674755747:web:abbe49d925ba60f5816916"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
