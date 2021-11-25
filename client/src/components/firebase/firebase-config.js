import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVC3Do4hrE_py9T13C1wcd9W_Qy73C2nE",
  authDomain: "atechnas-ac30e.firebaseapp.com",
  projectId: "atechnas-ac30e",
  storageBucket: "atechnas-ac30e.appspot.com",
  messagingSenderId: "794430121886",
  appId: "1:794430121886:web:572488cb41612ff7d8188f",
  measurementId: "G-DR0BTELJ89",
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
  db,
  googleAuthProvider,
  firebase,
};  