// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhkrwLqdO1vO02aVge-NRU-sSRbGGFyNk',
  authDomain: 'facebook-clone-f2f61.firebaseapp.com',
  projectId: 'facebook-clone-f2f61',
  storageBucket: 'facebook-clone-f2f61.appspot.com',
  messagingSenderId: '1012609207495',
  appId: '1:1012609207495:web:9a09b007c46e927df742e2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
