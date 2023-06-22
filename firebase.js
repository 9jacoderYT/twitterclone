// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
//
const firebaseConfig = {
  apiKey: "AIzaSyDdy3UQaOxfivmLH_diGAPkVKxXP6h-AJ4",
  authDomain: "twitter-v1-ac669.firebaseapp.com",
  projectId: "twitter-v1-ac669",
  storageBucket: "twitter-v1-ac669.appspot.com",
  messagingSenderId: "282195067190",
  appId: "1:282195067190:web:16091e36e10a40ee86b397",
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };