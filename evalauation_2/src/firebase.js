// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCraGrPO5TTN6heSG3F6y6QLQmTIWF0pOs",
  authDomain: "evalaution-2.firebaseapp.com",
  projectId: "evalaution-2",
  storageBucket: "evalaution-2.appspot.com",
  messagingSenderId: "15752770324",
  appId: "1:15752770324:web:05a22ac146f3297bfac801",
  measurementId: "G-XNDSGSWK4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const rtdb = getDatabase(app);
export { db };