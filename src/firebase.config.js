// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrIdborwH-hXdvqHihmoD18Rpb0p69Wzw",
  authDomain: "house-marketplace-app-46c77.firebaseapp.com",
  projectId: "house-marketplace-app-46c77",
  storageBucket: "house-marketplace-app-46c77.appspot.com",
  messagingSenderId: "485096884327",
  appId: "1:485096884327:web:163c7aeacd3e6e8de06cc2",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()

//essentially all that is occuring is all firebase configs are being passed into IntializeApp which will initialize our Firebase app
