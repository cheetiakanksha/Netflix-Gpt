// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDegLyy2Ni7zy7hLV_ufiKMK43RRqML4A",
  authDomain: "netflixgpt-a2283.firebaseapp.com",
  projectId: "netflixgpt-a2283",
  storageBucket: "netflixgpt-a2283.appspot.com",
  messagingSenderId: "501574359700",
  appId: "1:501574359700:web:d64d24456e910f2b467281",
  measurementId: "G-L1QSH7WN4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()