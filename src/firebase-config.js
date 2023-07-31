// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_KEY",
  projectId: "YOUR_KEY",
  storageBucket: "YOUR_KEY",
  messagingSenderId: "YOUR_KEY",
  appId: "YOUR_KEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const Provider = new GoogleAuthProvider();

const db = getFirestore(app)
const storage = getStorage(app)

const API_TOKEN = "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";



export {Auth, Provider, db, storage, API_TOKEN};
