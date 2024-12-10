// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg-zT2awV7thSlOSrfPHKT-E5j64twafw",
  authDomain: "log-in-authentication-de65f.firebaseapp.com",
  projectId: "log-in-authentication-de65f",
  storageBucket: "log-in-authentication-de65f.appspot.com",
  messagingSenderId: "586775436979",
  appId: "1:586775436979:web:e427ad48685647a99cdac6",
  measurementId: "G-3M2Y296HG2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);