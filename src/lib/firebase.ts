// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// The apiKey in this configuration snippet just identifies your Firebase project on the Google servers.
// It is not a security risk for someone to know it. 
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

// current firebase user store

function userStore() {

	let unsubscribe: () => void;

	if(!auth || !globalThis.window) {
		console.warn('Auth is not initialized or not in browser');
		const { subscribe }	= writable<User | null>(null);
		return {
			subscribe,
		}
	}

	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(auth, (user) => {
			set(user);
		});

		return () => unsubscribe();

	});
	return {
		subscribe,
	}
}

export const user = userStore();