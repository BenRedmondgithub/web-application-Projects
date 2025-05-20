import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBMzLYg7idv8azHF7ACk6bA6veENemZR_8",
  authDomain: "ben-redmond-photography.firebaseapp.com",
  projectId: "ben-redmond-photography",
  storageBucket: "ben-redmond-photography.firebasestorage.app",
  messagingSenderId: "887512811757",
  appId: "1:887512811757:web:d3510c8bfb57cd9c4d24e4",
  measurementId: "G-S8TVFNK977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);