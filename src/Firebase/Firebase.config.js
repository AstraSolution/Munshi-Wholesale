// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfD9YrCr69NZAqnq07uBRGRVLpZzdSmL0",
  authDomain: "munshi-wholesale-3e8f6.firebaseapp.com",
  projectId: "munshi-wholesale-3e8f6",
  storageBucket: "munshi-wholesale-3e8f6.appspot.com",
  messagingSenderId: "719532671930",
  appId: "1:719532671930:web:8b8ad6016f3e4e27dfd383",
  measurementId: "G-34YGE5ZC6Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
