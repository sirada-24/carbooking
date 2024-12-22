import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCY9g2ecmnSzs2j2QDx4jEZL7h2zADSC6U",
    authDomain: "finalproject499-9d0dc.firebaseapp.com",
    projectId: "finalproject499-9d0dc",
    storageBucket: "finalproject499-9d0dc.firebasestorage.app",
    messagingSenderId: "302932421988",
    appId: "1:302932421988:web:0493acad10cc1e80479e71"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);