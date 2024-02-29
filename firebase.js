// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsS859JmxhVRo_hP1M9TQwl-7JaX7HASk",
  authDomain: "fir-auth-10b68.firebaseapp.com",
  projectId: "fir-auth-10b68",
  storageBucket: "fir-auth-10b68.appspot.com",
  messagingSenderId: "579376153628",
  appId: "1:579376153628:web:c4123b0cf93a3ce3258bd9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// Inicializa Firebase Auth con AsyncStorage
export const auth = initializeAuth(appFirebase, {
  persistence: getReactNativePersistence(AsyncStorage),
});

