// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjR5cwcO8UwqnpO1f28C292AjWoY-cmw4",
  authDomain: "rest-ed5c2.firebaseapp.com",
  projectId: "rest-ed5c2",
  storageBucket: "rest-ed5c2.firebasestorage.app",
  messagingSenderId: "730047024506",
  appId: "1:730047024506:web:84d6ad7c8bd5f6b5ffdac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);