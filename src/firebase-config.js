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
  apiKey: "AIzaSyD9JbNeBOg_VIn_agDVKEhsVbQRdHNeOqE",
  authDomain: "imagegen-44373.firebaseapp.com",
  projectId: "imagegen-44373",
  storageBucket: "imagegen-44373.appspot.com",
  messagingSenderId: "934840352038",
  appId: "1:934840352038:web:32ff047e6a3cada18415e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const Provider = new GoogleAuthProvider();

const db = getFirestore(app)
const storage = getStorage(app)

const API_TOKEN = "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";



export {Auth, Provider, db, storage, API_TOKEN};