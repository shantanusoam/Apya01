import firebase from "firebase";
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDGJACabtjHd6CtEGHnp6c6_cqlhqb0qzQ",

    authDomain: "queens-crown-ff0dc.firebaseapp.com",

    projectId: "queens-crown-ff0dc",

    storageBucket: "queens-crown-ff0dc.appspot.com",

    messagingSenderId: "612474860201",

    appId: "1:612474860201:web:e79194280b378dd1466fb8",

    measurementId: "G-03L61B9MFG"
}

export const createUserProfileDocuent = async(userAuth, additionalData) => {
if(!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get()
console.log(snapShot)
if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }catch(error){
        console.log('error creating user',    error.message)
    }
}
return userRef;
} 


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;