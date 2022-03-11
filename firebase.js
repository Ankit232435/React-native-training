import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA6GtAr0Odni-92tPeFysHybp28dyhSf3k",
    authDomain: "chatmessanger-eba18.firebaseapp.com",
    databaseURL: "https://chatmessanger-eba18-default-rtdb.firebaseio.com",
    projectId: "chatmessanger-eba18",
    storageBucket: "chatmessanger-eba18.appspot.com",
    messagingSenderId: "339760048713",
    appId: "1:339760048713:web:a72332fa4208536d2fad98",
    measurementId: "G-Q0EDT05W69"
  };


  

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});


export { db, auth };