// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_WjKDmyT6qGbj7zy3Lok0Jd8B_4OOsDU",
  authDomain: "genius-car-9b618.firebaseapp.com",
  projectId: "genius-car-9b618",
  storageBucket: "genius-car-9b618.appspot.com",
  messagingSenderId: "568968330749",
  appId: "1:568968330749:web:20c567303da386adb06d94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
