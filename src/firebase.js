import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXy15IkZRUcZfIc0NssMDGu9uctiC-Wj4",
    authDomain: "imessage-clone-home.firebaseapp.com",
    databaseURL: "https://imessage-clone-home.firebaseio.com",
    projectId: "imessage-clone-home",
    storageBucket: "imessage-clone-home.appspot.com",
    messagingSenderId: "709083016172",
    appId: "1:709083016172:web:3e9c62e96128dd5aeaeec9",
    measurementId: "G-B31TS0C964"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;