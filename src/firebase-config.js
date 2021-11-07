import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPTR_KmLt1OhHO0s65jZxbEzuKMJRpoYY",
  authDomain: "fir-all-development.firebaseapp.com",
  projectId: "fir-all-development",
  storageBucket: "fir-all-development.appspot.com",
  messagingSenderId: "98736144451",
  appId: "1:98736144451:web:3510bb2ddfcba9757914f6"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);