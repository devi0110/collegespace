// firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9KWWaWS9VjWQ9hYo9gbPTc9mrs7rUSio",
  authDomain: "collegespace-ec431.firebaseapp.com",
  projectId: "collegespace-ec431",
  storageBucket: "collegespace-ec431.appspot.com",
  messagingSenderId: "1052037668945",
  appId: "1:1052037668945:web:b2c2b5bc1915222907d870",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
