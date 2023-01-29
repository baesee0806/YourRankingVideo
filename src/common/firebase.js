// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// RN 오늘 날C요? project
const firebaseConfig = {
  apiKey: "AIzaSyA8kWftgYd9CGiC1hsPtrJ7GF9FYRONU0E",
  authDomain: "ts-yourranking.firebaseapp.com",
  projectId: "ts-yourranking",
  storageBucket: "ts-yourranking.appspot.com",
  messagingSenderId: "599315602931",
  appId: "1:599315602931:web:8a531a4a3534e80094c686",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
