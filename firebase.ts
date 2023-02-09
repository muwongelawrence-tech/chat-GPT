import { getApp , getApps , initializeApp } from "firebase/app"
import {  getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFW1cZxA1mVIgvsFiIm7GYQDMENEDWlbg",
  authDomain: "chatgpt-messenger-e2503.firebaseapp.com",
  projectId: "chatgpt-messenger-e2503",
  storageBucket: "chatgpt-messenger-e2503.appspot.com",
  messagingSenderId: "742402699137",
  appId: "1:742402699137:web:07499d9ec1120036038280"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); for React

const app = getApps().length ? getApp() : initializeApp(firebaseConfig) 
const db = getFirestore(app);

// exporting the database
export { db }