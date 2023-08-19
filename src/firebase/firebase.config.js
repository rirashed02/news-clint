// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment variable', import.meta.env.VITE_SECRET)
const firebaseConfig = {
  // apiKey: "AIzaSyD0hpXFT4xh0Txea0HT61lVEAd4n9JMszk",
  // authDomain: "news-clint-auth.firebaseapp.com",
  // projectId: "news-clint-auth",
  // storageBucket: "news-clint-auth.appspot.com",
  // messagingSenderId: "932700907331",
  // appId: "1:932700907331:web:16e92116f482a3f958f1f6"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;