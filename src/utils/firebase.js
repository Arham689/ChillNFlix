// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVzsdBGixBnwG4nU0TuVfEDpTU_rwB7Hc",
  authDomain: "chill-kro.firebaseapp.com",
  projectId: "chill-kro",
  storageBucket: "chill-kro.appspot.com",
  messagingSenderId: "413356416433",
  appId: "1:413356416433:web:e805da07ef5abb61d9b190",
  measurementId: "G-6TSVBGXPM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth() 