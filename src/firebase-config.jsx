
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYF3ErALz3P-4sOegMMlbTPp9gx-DuCs0",
  authDomain: "awesometaskmanagementapp.firebaseapp.com",
  projectId: "awesometaskmanagementapp",
  storageBucket: "awesometaskmanagementapp.appspot.com",
  messagingSenderId: "558731904440",
  appId: "1:558731904440:web:418d4ff8b8fd77c9b1bb4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);