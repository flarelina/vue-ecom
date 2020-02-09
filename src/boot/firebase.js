import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBxXdF6BvEXySplg61WNyDcp6mksmW40zE",
	authDomain: "e-com-ca907.firebaseapp.com",
	databaseURL: "https://e-com-ca907.firebaseio.com",
	projectId: "e-com-ca907",
	storageBucket: "e-com-ca907.appspot.com",
	messagingSenderId: "629284978980",
	appId: "1:629284978980:web:03d268ef5ccf47b5e033b1"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }

