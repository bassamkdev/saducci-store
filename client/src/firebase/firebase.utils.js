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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj);
    });

   return await batch.commit();
};

export const getUserCartRef = async (userId) => {
    const cartsRef = firestore.collection('carts').where('userId', '==', userId);
    const cartSnapshot = await cartsRef.get();

    if(cartSnapshot.empty){
        const cartDocRef = firestore.collection('carts').doc();
        await cartDocRef.set({userId, cartItems:[]})
        return cartDocRef;
    }else{
        return cartSnapshot.docs[0].ref;
    }
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});
};




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
    return new Promise ((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth =>{
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}
  

export default firebase;




