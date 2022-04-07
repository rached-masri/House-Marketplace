// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHpuHhPwVRT6lj6WxYg6fyRzj3oJzhVqQ",
  authDomain: "house-marketplace-app-ffe91.firebaseapp.com",
  projectId: "house-marketplace-app-ffe91",
  storageBucket: "house-marketplace-app-ffe91.appspot.com",
  messagingSenderId: "253593316931",
  appId: "1:253593316931:web:ec0b3c3357df76a2502ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()