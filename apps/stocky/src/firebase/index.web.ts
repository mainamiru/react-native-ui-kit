// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2SUGFJey0KDlp4EjEdYt9fQjVmm9F-Xk",
  authDomain: "fir-apps-9fee7.firebaseapp.com",
  projectId: "fir-apps-9fee7",
  storageBucket: "fir-apps-9fee7.firebasestorage.app",
  messagingSenderId: "599453038323",
  appId: "1:599453038323:web:aa4018321eb77194916986",
  measurementId: "G-TY16Z9Y16M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);
