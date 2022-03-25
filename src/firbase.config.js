import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDY6ST7XYviVnJrcNRCFZFoBXsvhmUOIY",
  authDomain: "house-marketplace-app-f7b1a.firebaseapp.com",
  projectId: "house-marketplace-app-f7b1a",
  storageBucket: "house-marketplace-app-f7b1a.appspot.com",
  messagingSenderId: "539454409680",
  appId: "1:539454409680:web:8d35bfdc1c8595aa4847d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
