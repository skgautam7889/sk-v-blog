import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDdcp76XYRMxQBfQyNl2AtZ89k_oCin3dM",
  authDomain: "react-admin-panel-aae62.firebaseapp.com",
  projectId: "react-admin-panel-aae62",
  storageBucket: "react-admin-panel-aae62.appspot.com",
  messagingSenderId: "272720714648",
  appId: "1:272720714648:web:444070057008f456e3a9ed",
  measurementId: "G-E765K4TTHJ"
};


if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export { auth, db, storage, serverTimestamp }