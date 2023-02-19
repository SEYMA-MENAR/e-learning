// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
  authDomain: "e-learning-f95fb.firebaseapp.com",
  projectId: "e-learning-f95fb",
  storageBucket: "e-learning-f95fb.appspot.com",
  messagingSenderId: "119457462803",
  appId: "1:119457462803:web:d86caf933bba573847dde6",
  measurementId: "G-FFRLWYV7RG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
