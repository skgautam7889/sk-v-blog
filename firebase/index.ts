// import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAtdYDDaIbe1oa3CHz9qgHk14PIdOMkJFc",
  authDomain: "sk-v-blog.firebaseapp.com",
  projectId: "sk-v-blog",
  storageBucket: "sk-v-blog.appspot.com",
  messagingSenderId: "269832440743",
  appId: "1:269832440743:web:153766a5d91569a4354482",
  measurementId: "G-XXTN8G5W70"
};


if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export { auth, db, storage, serverTimestamp }


