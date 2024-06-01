// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDkR6Dr7J4Tu0x-z5-oA8MbptyQg6En9w4",
  authDomain: "filmworld-1e0c8.firebaseapp.com",
  projectId: "filmworld-1e0c8",
  storageBucket: "filmworld-1e0c8.appspot.com",
  messagingSenderId: "182907339343",
  appId: "1:182907339343:web:669804b87f77c20e76a03a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");
export default app;