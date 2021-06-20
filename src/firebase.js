import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDEkg1a301gtV1mahTYfD3paZ1XMhAC20U",
    authDomain: "facebook-messenger-clone-f25ee.firebaseapp.com",
    projectId: "facebook-messenger-clone-f25ee",
    storageBucket: "facebook-messenger-clone-f25ee.appspot.com",
    messagingSenderId: "308553857101",
    appId: "1:308553857101:web:355e6816a0523fd7998404",
    measurementId: "G-Z08WWFGG2W"

});

const db = firebase.firestore();

export default db;


