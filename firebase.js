import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6tzEGVTqNi1rCkPHKzFEK6fFwNhJU1Xw",
    authDomain: "sura-store-5511b.firebaseapp.com",
    projectId: "sura-store-5511b",
    storageBucket: "sura-store-5511b.firebasestorage.app",
    messagingSenderId: "859109347846",
    appId: "1:859109347846:web:16abe6feb56036144de987"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {
    app,
    db,
    auth,
    storage
};
