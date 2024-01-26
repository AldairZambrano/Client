// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2oSGlxZ2JmjH9Sj_9PEcF1LbX_RpbwlE",
  authDomain: "tienda-a-s-m.firebaseapp.com",
  projectId: "tienda-a-s-m",
  storageBucket: "tienda-a-s-m.appspot.com",
  messagingSenderId: "921755620707",
  appId: "1:921755620707:web:5dcb7c47e18f35a7e8af56",
  measurementId: "G-VLPP8P3CB2"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase