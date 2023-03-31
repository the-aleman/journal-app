// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNhxSTQVOr6_Zuf153RDg7WXhAxFWpLfg',
  authDomain: 'journal-app-98bca.firebaseapp.com',
  projectId: 'journal-app-98bca',
  storageBucket: 'journal-app-98bca.appspot.com',
  messagingSenderId: '287558474315',
  appId: '1:287558474315:web:8a61b3780f9c954c670bce'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
