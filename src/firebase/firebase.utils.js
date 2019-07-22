import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBA9XPkkcKOWfSM8xiZCvLNLmv40UHBwxU",
    authDomain: "saducci-store.firebaseapp.com",
    databaseURL: "https://saducci-store.firebaseio.com",
    projectId: "saducci-store",
    storageBucket: "",
    messagingSenderId: "475193735885",
    appId: "1:475193735885:web:6e6d6934948bc555"
  } ;

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
export default firebase;




