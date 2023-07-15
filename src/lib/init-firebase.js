// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKwrYhj4v7TmAZLNZ_R3QjwOxthbfbmEk",
    authDomain: "blogr-landing-page-ec5fb.firebaseapp.com",
    projectId: "blogr-landing-page-ec5fb",
    storageBucket: "blogr-landing-page-ec5fb.appspot.com",
    messagingSenderId: "776892446122",
    appId: "1:776892446122:web:5d2d7a8a32262aaebe27d3",
    measurementId: "G-DW9E6W9W59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);