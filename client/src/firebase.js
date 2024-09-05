// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-65286.firebaseapp.com",
  projectId: "fir-65286",
  storageBucket: "fir-65286.appspot.com",
  messagingSenderId: "115456733713",
  appId: "1:115456733713:web:a1033d79780f99189cf7b0",
  measurementId: "G-6CYKTJWJ19",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
