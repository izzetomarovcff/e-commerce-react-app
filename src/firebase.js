// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
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
export const imageDb = getStorage(app)

