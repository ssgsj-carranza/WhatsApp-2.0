import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-oGp-Qrk7_dYvhM6WfkVMoH-J_LK1v2Y",
    authDomain: "whatsapp-clone-a3ff6.firebaseapp.com",
    projectId: "whatsapp-clone-a3ff6",
    storageBucket: "whatsapp-clone-a3ff6.appspot.com",
    messagingSenderId: "907083743655",
    appId: "1:907083743655:web:eaf049c4d7c5220425f682"
  };

const app = !firebase.apps.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db, provider, auth}