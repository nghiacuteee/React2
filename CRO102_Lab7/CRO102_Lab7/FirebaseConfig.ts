// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByi1Dnj-lQAApZGLM8jeNxEWThxvZV_8A",
  authDomain: "cro102-b25f0.firebaseapp.com",
  projectId: "cro102-b25f0",
  storageBucket: "cro102-b25f0.appspot.com",
  messagingSenderId: "408872883599",
  appId: "1:408872883599:web:2350c756ecb3229e1ce7fa",
  measurementId: "G-CMW39KS91H",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
