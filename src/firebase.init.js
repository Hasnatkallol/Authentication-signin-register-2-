// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfjNEKfIy4GXJhIifmFnJJsV28Pzpk1qE",
  authDomain: "signin-with-emial-or-register.firebaseapp.com",
  projectId: "signin-with-emial-or-register",
  storageBucket: "signin-with-emial-or-register.firebasestorage.app",
  messagingSenderId: "287296105901",
  appId: "1:287296105901:web:b0af0edce57f8dac078524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);