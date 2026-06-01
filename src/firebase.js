import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYzSeUPTJg4-DzZ1jUAV9ktzCfjjUyBhk",
  authDomain: "kakaji-booking-system.firebaseapp.com",
  projectId: "kakaji-booking-system",
  storageBucket: "kakaji-booking-system.firebasestorage.app",
  messagingSenderId: "480912086631",
  appId: "1:480912086631:web:45bbd9bce76e432acee6c2",
  measurementId: "G-137XE1YGE3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);