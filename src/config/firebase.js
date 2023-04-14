import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYfGQ6Q3kct_KbCw8iIDPLa4PqWcQwQvE",
  authDomain: "muro-react.firebaseapp.com",
  projectId: "muro-react",
  storageBucket: "muro-react.appspot.com",
  messagingSenderId: "889189244942",
  appId: "1:889189244942:web:53cc870cde7800b9ecdc5f",
};

firebase.initializeApp(firebaseConfig); // inicializa Firebase

const auth = firebase.auth(); // instancia de autenticación
const firestore = firebase.firestore(); // instancia de Firestore

export { auth, firestore };
