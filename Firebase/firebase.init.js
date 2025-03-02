// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJNVuiI4yC3qloq1sDu5RpHU8rRyodZ9k",
  authDomain: "coffee-house-9d897.firebaseapp.com",
  projectId: "coffee-house-9d897",
  storageBucket: "coffee-house-9d897.firebasestorage.app",
  messagingSenderId: "973814107040",
  appId: "1:973814107040:web:9bb573c76a2ee43c01f2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);