import firebase from "firebase/compat/app";
import "firebase/compat/auth";

let apiKey1 = process.env.REACT_APP_API_KEY;

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCS4asG8sq703v9JSgbvjSvMm5aIqvPSKY",
    authDomain: "readerchat-d17ee.firebaseapp.com",
    projectId: "readerchat-d17ee",
    storageBucket: "readerchat-d17ee.appspot.com",
    messagingSenderId: "930083059692",
    appId: "1:930083059692:web:ddd398399d1d509d3b32c9",
  })
  .auth();
