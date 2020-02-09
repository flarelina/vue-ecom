import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyA8Aha9MW0qLJZHUI1e3lyWiZP_L3GpdaQ",
	authDomain: "e-com-a2071.firebaseapp.com",
	databaseURL: "https://e-com-a2071.firebaseio.com",
	projectId: "e-com-a2071",
	storageBucket: "e-com-a2071.appspot.com",
	messagingSenderId: "544427837944",
	appId: "1:544427837944:web:0254d742b560cef951ae0d"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }

