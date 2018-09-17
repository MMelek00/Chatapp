import firebase from "firebase";

const {
    apiKey,
    authDomain,
    databaseURL,
    storageBucket,
    messagingSenderId,
} = {
    apiKey: "AIzaSyA51fNIZF9OYWXQFVh8hmsaekMmmQDaHzQ",
    authDomain: "princeapp-f99b8.firebaseapp.com",
    databaseURL: "https://princeapp-f99b8.firebaseio.com",
    projectId: "princeapp-f99b8",
    storageBucket: "princeapp-f99b8.appspot.com",
    messagingSenderId: "79288961689"
};

let firebaseInitialized = false;

if (
    apiKey !== "null"
    && authDomain !== "null"
    && databaseURL !== "null"
    && storageBucket !== "null"
    && messagingSenderId !== "null"
) {
    firebase.initializeApp({
        apiKey,
        authDomain,
        databaseURL,
        storageBucket,
        messagingSenderId,
    });

    firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized ? firebase.database().ref() : null;
export const Firebase = firebaseInitialized ? firebase : null;
