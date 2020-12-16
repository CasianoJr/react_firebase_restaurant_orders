import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyBCT9V8j7tIF0SwEIQ2JzovpKZDapS6xoc",
   authDomain: "epsilon-8d8a6.firebaseapp.com",
   projectId: "epsilon-8d8a6",
   storageBucket: "epsilon-8d8a6.appspot.com",
   messagingSenderId: "625475592981",
   appId: "1:625475592981:web:e922662de5725a45d5bf1c",
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = app.firestore();
export const storageDB = app.storage();
