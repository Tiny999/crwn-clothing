import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCr8zbIahmeF_V1Muo9wr5JGOpGo-2i8-Q",
    authDomain: "crwn-db-57d2e.firebaseapp.com",
    databaseURL: "https://crwn-db-57d2e.firebaseio.com",
    projectId: "crwn-db-57d2e",
    storageBucket: "crwn-db-57d2e.appspot.com",
    messagingSenderId: "361170917439",
    appId: "1:361170917439:web:a34ebc3d959e3378e1408a",
    measurementId: "G-LPG3PMML86"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log('Error creating user', err.message);
        }


    }

    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;