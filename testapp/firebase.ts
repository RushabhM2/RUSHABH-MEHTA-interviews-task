import {initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";
import {connectFunctionsEmulator, getFunctions} from "firebase/functions";

let db, functions;
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export async function init() {
    await initializeApp(firebaseConfig);
    db = getFirestore();
    functions = getFunctions();
    if (__DEV__) {
        connectFirestoreEmulator(db, "localhost", 8080)
        connectFunctionsEmulator(functions, "localhost", 5001)
    }
}

export {db, functions}
