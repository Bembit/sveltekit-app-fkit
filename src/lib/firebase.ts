// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKld0rOuOoNC4XfmNynklNy9uZvcVw1fU",
  authDomain: "sveltekit-app-fkit.firebaseapp.com",
  projectId: "sveltekit-app-fkit",
  storageBucket: "sveltekit-app-fkit.appspot.com",
  messagingSenderId: "906165652545",
  appId: "1:906165652545:web:31fb231de2e35f96668ac0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();