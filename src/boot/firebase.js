import Firebase          from 'firebase/app';
import {firestorePlugin} from 'vuefire';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyA8Aha9MW0qLJZHUI1e3lyWiZP_L3GpdaQ",
    authDomain: "e-com-a2071.firebaseapp.com",
    databaseURL: "https://e-com-a2071.firebaseio.com",
    projectId: "e-com-a2071",
    storageBucket: "e-com-a2071.appspot.com",
    messagingSenderId: "544427837944",
    appId: "1:544427837944:web:0254d742b560cef951ae0d"
};

Firebase.initializeApp(config);

export default ({ Vue }) => {
    Vue.use(firestorePlugin);
}

let FUNCTIONS;

if(true) {
    Firebase.functions().useFunctionsEmulator(`http://${window.location.hostname}:5000`);
    FUNCTIONS = Firebase.functions();
}
else {
    FUNCTIONS  = Firebase.app().functions('us-central1');
}

console.log(env('APP_MODE') + ' mode');

const DB         = Firebase.firestore();
const AUTH       = Firebase.auth();
const STORAGE    = Firebase.storage;

export {
    DB,
    AUTH,
    FUNCTIONS,
    STORAGE
}
