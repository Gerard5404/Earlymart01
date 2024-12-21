// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmsW37J-Fr9nKHlfwwE0UJ3MCxvTTcHyk",
  authDomain: "earl-mart001.firebaseapp.com",
  projectId: "earl-mart001",
  storageBucket: "earl-mart001.firebasestorage.app",
  messagingSenderId: "21076565098",
  appId: "1:21076565098:web:4eff0b28ffa259e291be13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}