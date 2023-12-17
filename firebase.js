// import firebase from '@react-native-firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNOmXd7WbFnnWEvyN2FbdjdBsF5KUYlYc",
  authDomain: "gifted-chat-4e3e3.firebaseapp.com",
  projectId: "gifted-chat-4e3e3",
  storageBucket: "gifted-chat-4e3e3.appspot.com",
  messagingSenderId: "949710736547",
  appId: "1:949710736547:web:5e8c0d72f3a34bae544316"
};

// let app;

// if(firebase.apps.length === 0) {
//     app = initializeApp(firebaseConfig);
// }
// else {
//     app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();

export const FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(FirebaseApp);
export const db = getFirestore(FirebaseApp);