// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADxEF2OWmEB0j3KRT-Iqv1dK_q3poMrK4",
  authDomain: "login-firebase-99329.firebaseapp.com",
  projectId: "login-firebase-99329",
  storageBucket: "login-firebase-99329.appspot.com",
  messagingSenderId: "691024396811",
  appId: "1:691024396811:web:34f7bf20129cf2d08b3d0e"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;