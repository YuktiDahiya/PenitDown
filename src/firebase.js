import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB5fJG2ltil1T4prLhDBL5A64UP1l07rVI",
  authDomain: "react-hooks-blog-3fc9f.firebaseapp.com",
  projectId: "react-hooks-blog-3fc9f",
  storageBucket: "react-hooks-blog-3fc9f.appspot.com",
  messagingSenderId: "922388486510",
  appId: "1:922388486510:web:849c92ea245d98d03c897f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();