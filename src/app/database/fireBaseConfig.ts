// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDmW_2kWDgsdj0e10wG2UfHhXQsBKblXB4",

  authDomain: "memeapp-5b425.firebaseapp.com",

  projectId: "memeapp-5b425",

  storageBucket: "memeapp-5b425.firebasestorage.app",

  messagingSenderId: "566841481528",

  appId: "1:566841481528:web:0282eb09a32ac08a1d09cd",

  measurementId: "G-H1NW58RZ14"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
