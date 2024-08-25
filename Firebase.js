// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATDj5ghbmzZRfx0F4Vo66Oy91DcjyEABk",
  authDomain: "react-next-yt.firebaseapp.com",
  projectId: "react-next-yt",
  storageBucket: "react-next-yt.appspot.com",
  messagingSenderId: "897135764081",
  appId: "1:897135764081:web:f6d2784a9730fb3cd871d0",
  measurementId: "G-N26MTJMTRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const storage = getStorage();
let analytics;

if (typeof window !== "undefined") {
  // Only call getAnalytics() when in the browser
  analytics = getAnalytics(app);
}
export {auth,analytics,storage}
export default app;