import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBrUaV_xamLKRX5pZhc9MAoejnwJqOzC3M",
    authDomain: "cutiehack-85687.firebaseapp.com",
    databaseURL: "https://cutiehack-85687.firebaseio.com",
    projectId: "cutiehack-85687",
    storageBucket: "cutiehack-85687.appspot.com",
    messagingSenderId: "223254429418",
    appId: "1:223254429418:web:32b8985c0206780ecca193"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;