// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMcyz9P52TTfgmGAU3vbXmNGqPDdh3yDk",
  authDomain: "booksocial-affb3.firebaseapp.com",
  projectId: "booksocial-affb3",
  storageBucket: "booksocial-affb3.firebasestorage.app",
  messagingSenderId: "664831785781",
  appId: "1:664831785781:web:6195389bd98e8e4e3e6a7c",
  measurementId: "G-DND9T069X8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
