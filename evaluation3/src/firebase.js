// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO5dOuqPhCJyI4-HJ3jN-JigciPF-fAwI",
  authDomain: "evaluation3react.firebaseapp.com",
  projectId: "evaluation3react",
  storageBucket: "evaluation3react.appspot.com",
  messagingSenderId: "936204078184",
  appId: "1:936204078184:web:6fcd26611d25cc649dffdd",
  measurementId: "G-NS02FKYD19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { db };


