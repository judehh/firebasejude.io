import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHjq-oQR1TrOOrzEX2QR9rovHZmEmlkrQ",
  authDomain: "fir-jude-hahaha.firebaseapp.com",
  projectId: "fir-jude-hahaha",
  storageBucket: "fir-jude-hahaha.appspot.com",
  messagingSenderId: "230167261808",
  appId: "1:230167261808:web:4cc36a61fea58ae7503ab5",
  measurementId: "G-C7ELQ98TBP"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);