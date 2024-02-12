// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6HhaVEgy7ElONyzbj4s4WQo9yfZ9OnBk",
    authDomain: "e-commerce-app-37874.firebaseapp.com",
    databaseURL: "https://e-commerce-app-37874-default-rtdb.firebaseio.com",
    projectId: "e-commerce-app-37874",
    storageBucket: "e-commerce-app-37874.appspot.com",
    messagingSenderId: "721605608110",
    appId: "1:721605608110:web:9669149eee00c09068633f",
    measurementId: "G-RD4BRRK4JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

