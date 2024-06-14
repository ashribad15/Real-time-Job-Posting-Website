// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBvlrjn9jXsJ9te3kE9G1zYJghNDaHdK8",
  authDomain: "job-arena-bdb7e.firebaseapp.com",
  projectId: "job-arena-bdb7e",
  storageBucket: "job-arena-bdb7e.appspot.com",
  messagingSenderId: "916487696847",
  appId: "1:916487696847:web:ebb1c9dadcd673afb562ba",
  measurementId: "G-VF3F6XHT1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export{auth, provider}
