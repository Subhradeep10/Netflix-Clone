// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApRC-AqDN7w20SKk5rV-lmjz4okMrppCw",
    authDomain: "netflix-ff757.firebaseapp.com",
    projectId: "netflix-ff757",
    storageBucket: "netflix-ff757.appspot.com",
    messagingSenderId: "767510787744",
    appId: "1:767510787744:web:29fd5f9c914e85d6627bc5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);