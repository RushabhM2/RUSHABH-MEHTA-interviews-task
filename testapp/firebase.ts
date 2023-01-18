import {initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";
import {connectFunctionsEmulator, getFunctions} from "firebase/functions";

let db, functions;
const firebaseConfig = {
    apiKey: "AIzaSyBRD_r4rIHSlc7wJEJ2wLTzChZZyRuh0sk",
    authDomain: "sequel-interview-9b911.firebaseapp.com",
    projectId: "sequel-interview-9b911",
    storageBucket: "sequel-interview-9b911.appspot.com",
    messagingSenderId: "310032604749",
    appId: "1:310032604749:web:45cc8432c6d5836d6cc604"
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
