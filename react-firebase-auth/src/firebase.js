// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMO06TN0RZ1gXEjsrSWGVm9uaGTusNtuQ",
  authDomain: "react-authentication-37001.firebaseapp.com",
  projectId: "react-authentication-37001",
  storageBucket: "react-authentication-37001.appspot.com",
  messagingSenderId: "1097853223950",
  appId: "1:1097853223950:web:a83c3ea9588c1761a7285f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth};//Make sure to export auth object