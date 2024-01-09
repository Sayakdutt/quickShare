// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_FIREBASE_AuthDomain,
  projectId: process.env.NEXT_FIREBASE_ProjectId,
  storageBucket: process.env.NEXT_FIREBASE_StorageBucket,
  messagingSenderId: process.env.NEXT_FIREBASE_MessagingSenderId,
  appId: process.env.NEXT_FIREBASE_AppId,
  measurementId: process.env.NEXT_FIREBASE_MeasurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
