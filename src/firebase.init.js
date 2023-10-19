// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxWlr9Hb7zfFeulVYvae6hy_PvDnAvp_A",
  authDomain: "gps-tracker-55073.firebaseapp.com",
  databaseURL: "https://gps-tracker-55073-default-rtdb.firebaseio.com",
  projectId: "gps-tracker-55073",
  storageBucket: "gps-tracker-55073.appspot.com",
  messagingSenderId: "399344297555",
  appId: "1:399344297555:web:b7dc5fe3445e354ba448a6",
  measurementId: "G-CE4Y82QEV7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getDatabase(app);
