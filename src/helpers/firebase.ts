import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCic3KRvycmwitKfME-m3fduzVtzWBikn8",
  authDomain: "zlanka.firebaseapp.com",
  projectId: "zlanka",
  storageBucket: "zlanka.appspot.com",
  messagingSenderId: "1036783957350",
  appId: "1:1036783957350:web:2cbe134c3204d08f6504a7",
  measurementId: "G-KK2WQHP79Y",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
