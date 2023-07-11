
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDKKf8YAezTPSdxBIk0UkqLxaMULVB4s3o",
  authDomain: "mediko-fe8fe.firebaseapp.com",
  projectId: "mediko-fe8fe",
  storageBucket: "mediko-fe8fe.appspot.com",
  messagingSenderId: "825060676423",
  appId: "1:825060676423:web:23b43b02ea53908616f262",
  measurementId: "G-4W7N0DSDBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log
export const database = getFirestore(app);