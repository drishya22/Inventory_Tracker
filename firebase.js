// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUCV2BwcihXJ3XBXtILTlQUl8Bah7K0W4",
  authDomain: "inventory-management-45b48.firebaseapp.com",
  projectId: "inventory-management-45b48",
  storageBucket: "inventory-management-45b48.appspot.com",
  messagingSenderId: "444928363318",
  appId: "1:444928363318:web:1a20465b9c3edf8360c197",
  measurementId: "G-9Z0KV3KW4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export { firestore };
