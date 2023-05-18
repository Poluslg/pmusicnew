// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjl18MuEvLOq2xsmA6x-6f0EaOhYdQweQ",
  authDomain: "pmusicnew-107ec.firebaseapp.com",
  projectId: "pmusicnew-107ec",
  storageBucket: "pmusicnew-107ec.appspot.com",
  messagingSenderId: "814106209295",
  appId: "1:814106209295:web:33c21809a6d28b1d54077a",
  measurementId: "G-BEEXCQMRD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth=getAuth();

export {app,auth};
