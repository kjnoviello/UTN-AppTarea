// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC8V-XWXHZwnxRbvfKDOiumm1DZsWu6H4",
  authDomain: "dotask-fd18b.firebaseapp.com",
  projectId: "dotask-fd18b",
  storageBucket: "dotask-fd18b.appspot.com",
  messagingSenderId: "481220591715",
  appId: "1:481220591715:web:d5aeda85471e45f8fe7856"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app