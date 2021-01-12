import * as firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBx5T6K2L6oXkGKoWHmN5AnaCkcXXodX58',
	authDomain: 'myecommerceweb-ef2f8.firebaseapp.com',
	projectId: 'myecommerceweb-ef2f8',
	storageBucket: 'myecommerceweb-ef2f8.appspot.com',
	messagingSenderId: '447138737099',
	appId: '1:447138737099:web:2c162b4488e66647e3e44e',
	measurementId: 'G-VVZZPGTTDL',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth  = firebase.auth();
export const google