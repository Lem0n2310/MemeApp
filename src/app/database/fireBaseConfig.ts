// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXwbWfwL-3BU0T2xFN_8JlOzYuvXXOYEg",
  authDomain: "memewebapp-a8ce4.firebaseapp.com",
  projectId: "memewebapp-a8ce4",
  storageBucket: "memewebapp-a8ce4.firebasestorage.app",
  messagingSenderId: "1030436423374",
  appId: "1:1030436423374:web:552fbd24a3b0a39d20729f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

