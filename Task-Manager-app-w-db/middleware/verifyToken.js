import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDUUb19Fklx5rmjyCaJEBhnOiXDQRtfMbY",
  authDomain: "mongotester1234.firebaseapp.com",
  projectId: "mongotester1234",
  storageBucket: "mongotester1234.firebasestorage.app",
  messagingSenderId: "455132940992",
  appId: "1:455132940992:web:82caa18e11990080283b25",
  measurementId: "G-LTEJVK5TLW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);