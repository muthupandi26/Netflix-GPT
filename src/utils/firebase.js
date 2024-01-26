// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaWR4zVbniGY4bR6DGIX8TYOrx5Qn196k",
  authDomain: "netflixgpt-9c14e.firebaseapp.com",
  projectId: "netflixgpt-9c14e",
  storageBucket: "netflixgpt-9c14e.appspot.com",
  messagingSenderId: "388100287953",
  appId: "1:388100287953:web:9a5f1a575c538e9b8a44f0",
  measurementId: "G-055S7MR520",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
