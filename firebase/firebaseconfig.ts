// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG8NutA5mdsxmn3ttytj0Qw3_AkACqFBs",
  authDomain: "docs2answer.firebaseapp.com",
  projectId: "docs2answer",
  storageBucket: "docs2answer.appspot.com",
  messagingSenderId: "255791917509",
  appId: "1:255791917509:web:b9c2c1d3a85f8daa5d83ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
