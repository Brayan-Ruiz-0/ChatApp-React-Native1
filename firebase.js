// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEOsOMaTbl1JQXUzH1ahXyEZNd_6Xppnw",
  authDomain: "ms-base-app.firebaseapp.com",
  projectId: "ms-base-app",
  storageBucket: "ms-base-app.appspot.com",
  messagingSenderId: "528524816555",
  appId: "1:528524816555:web:803aab96cbb66e734187ee",
  measurementId: "G-DR3RR05PVC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);