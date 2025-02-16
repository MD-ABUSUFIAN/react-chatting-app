
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCAxJNQbHu3rrypC5j0nsgz4JFlhfJp3E0",
  authDomain: "react-chatting-app-36b09.firebaseapp.com",
  projectId: "react-chatting-app-36b09",
  storageBucket: "react-chatting-app-36b09.firebasestorage.app",
  messagingSenderId: "147709054832",
  appId: "1:147709054832:web:12b5be64c94ce2dea4c9b5",
  measurementId: "G-0M9E6RLG4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;