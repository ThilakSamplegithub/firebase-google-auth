// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr-MNPDOOdsgXoiyVAC0aQBmguepM2oM0",
  authDomain: "foodies-with-firebase-auth.firebaseapp.com",
  projectId: "foodies-with-firebase-auth",
  storageBucket: "foodies-with-firebase-auth.appspot.com",
  messagingSenderId: "952533970630",
  appId: "1:952533970630:web:5f6742cf59137969adb1c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({prompt:'select_account'})
const auth = getAuth();

export { auth, provider }