// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBZcVuFZly4sEd9Ipcpr9jJ39aXE4xA2VM",
  authDomain: "umd-xr-web.firebaseapp.com",
  projectId: "umd-xr-web",
  storageBucket: "umd-xr-web.appspot.com",
  messagingSenderId: "553345707498",
  appId: "1:553345707498:web:decf6c263c93e85c3d9693",
  measurementId: "G-QKSNHBF8XN"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;