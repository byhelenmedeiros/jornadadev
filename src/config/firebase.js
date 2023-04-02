// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";




const firebaseConfig = {
  apiKey: "AIzaSyDNA3uf0toDSpXMyBXA0mBDg2XpC_iCcr0",
  authDomain: "tiktok-clone-5b239.firebaseapp.com",
  projectId: "tiktok-clone-5b239",
  storageBucket: "tiktok-clone-5b239.appspot.com",
  messagingSenderId: "52231029661",
  appId: "1:52231029661:web:3f27349b997920a9e3e574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;