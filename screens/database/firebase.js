// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwIAvjKWoYZb1LouYqhYlANrebbH95-Ec",
  authDomain: "ticketbc-419ee.firebaseapp.com",
  projectId: "ticketbc-419ee",
  storageBucket: "ticketbc-419ee.appspot.com",
  messagingSenderId: "789977689715",
  appId: "1:789977689715:web:beaedd0bc642a73eaf8406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
