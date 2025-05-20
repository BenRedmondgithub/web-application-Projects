// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUUb19Fklx5rmjyCaJEBhnOiXDQRtfMbY",
  authDomain: "mongotester1234.firebaseapp.com",
  projectId: "mongotester1234",
  storageBucket: "mongotester1234.appspot.com", // fixed typo
  messagingSenderId: "455132940992",
  appId: "1:455132940992:web:82caa18e11990080283b25",
  measurementId: "G-LTEJVK5TLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize analytics if window is defined (browser environment)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}