// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgROMI33w4-RZ-_M0xs8zvyMZfW88wyoc",
    authDomain: "assignment-12-f5e9a.firebaseapp.com",
    projectId: "assignment-12-f5e9a",
    storageBucket: "assignment-12-f5e9a.appspot.com",
    messagingSenderId: "1047209109225",
    appId: "1:1047209109225:web:e064a204d433f9dfbbb278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;