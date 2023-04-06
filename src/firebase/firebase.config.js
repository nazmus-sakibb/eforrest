// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnT39BWV5W4UhY6OGznytfS76DKZgXyRw",
  authDomain: "eforrest.firebaseapp.com",
  projectId: "eforrest",
  storageBucket: "eforrest.appspot.com",
  messagingSenderId: "53092646511",
  appId: "1:53092646511:web:6bcd35171ef757d3da179a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;