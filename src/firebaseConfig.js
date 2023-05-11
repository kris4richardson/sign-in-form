import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAYxhlcHa6jVnS7gstXXO2HOCS47ib6o24",
  authDomain: "login-form-5f3a0.firebaseapp.com",
  projectId: "login-form-5f3a0",
  storageBucket: "login-form-5f3a0.appspot.com",
  messagingSenderId: "665149361164",
  appId: "1:665149361164:web:4b5a7ca74ab3adcf53b229",
});

export const auth = getAuth(firebaseConfig);
