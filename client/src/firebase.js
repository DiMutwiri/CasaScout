// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "casascout-a56b0.firebaseapp.com",
  projectId: "casascout-a56b0",
  storageBucket: "casascout-a56b0.appspot.com",
  messagingSenderId: "526583574858",
  appId: "1:526583574858:web:5eb95a2035be4402b651b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);