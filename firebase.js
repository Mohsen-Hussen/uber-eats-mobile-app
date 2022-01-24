import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyB0bLR3xuLgKvCTO-aNn1Lpbkc-8Pyyg0s",
	authDomain: "rn-uber-eats-clone-5346f.firebaseapp.com",
	projectId: "rn-uber-eats-clone-5346f",
	storageBucket: "rn-uber-eats-clone-5346f.appspot.com",
	messagingSenderId: "411109152433",
	appId: "1:411109152433:web:6e00e3092197878fb47490",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
