import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGsXa3VdGLzZo7FviVhvXjO1zBpfjSz6E",
    authDomain: "reviveinventorysystem.firebaseapp.com",
    projectId: "reviveinventorysystem",
    storageBucket: "reviveinventorysystem.appspot.com",
    messagingSenderId: "896779455550",
    appId: "1:896779455550:web:249e35c303a066a25e956f",
    measurementId: "G-P7KNCPJDMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);