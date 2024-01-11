// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
//import { FirebaseError, SDK_VERSION, _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeApp as initializeAppInternal, onLog, registerVersion, setLogLevel } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0_oxrUWu1NoPuTBpCYOOTNAUXPUd_Y9c",
  authDomain: "medlabview.firebaseapp.com",
  projectId: "medlabview",
  storageBucket: "medlabview.appspot.com",
  messagingSenderId: "652128567946",
  appId: "1:652128567946:web:d613e20cfafbfcee366373",
  measurementId: "G-G5SSRYJVJZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const firestore = getFirestore(app);

const firestore = getFirestore(app);

export const db = getFirestore();

//export { FirebaseError, SDK_VERSION, _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeAppInternal as initializeApp, onLog, registerVersion, setLogLevel, firestore };