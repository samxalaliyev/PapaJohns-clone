// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBddBugMSZo18ksyJjR6wzTapD3VKch2c8",
  authDomain: "papajohns-21a19.firebaseapp.com",
  projectId: "papajohns-21a19",
  storageBucket: "papajohns-21a19.appspot.com",
  messagingSenderId: "476040168230",
  appId: "1:476040168230:web:4bb489d1851f9b2c62f7e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
