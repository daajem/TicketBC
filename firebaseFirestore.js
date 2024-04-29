import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBEyUl8-XiLcID8s3FEVOYZiHlNpjxwSNs",
  authDomain: "ticketbc-53170.firebaseapp.com",
  projectId: "ticketbc-53170",
  storageBucket: "ticketbc-53170.appspot.com",
  messagingSenderId: "11453882602",
  appId: "1:11453882602:web:72da90e34aca71117a3793"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;

