// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASVPDMruE-Cz_e5JZDuWJNxKAm5WnGVd8",
  authDomain: "its4u-be979.firebaseapp.com",
  projectId: "its4u-be979",
  storageBucket: "its4u-be979.firebasestorage.app",
  messagingSenderId: "604173167179",
  appId: "1:604173167179:web:38abbcc03a271d4228fbce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
