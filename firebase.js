import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

 export const firebaseConfig = {
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


// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'
// const firebaseConfig = {
//     apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     authDomain: "reactnativefirebase-00000.firebaseapp.com",
//     databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
//     projectId: "reactnativefirebase-00000",
//     storageBucket: "reactnativefirebase-00000.appspot.com",
//     messagingSenderId: "000000000000000",
//     appId: "1:000000000000000:web:000000000000000"
// };
// firebase.initializeApp(firebaseConfig);
// firebase.firestore();
// export default firebase;