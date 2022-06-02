import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBik5MvYWb-ABIigWPngZJLdZshymlj5Ho",
  authDomain: "ecommerceapp-698ad.firebaseapp.com",
  projectId: "ecommerceapp-698ad",
  storageBucket: "ecommerceapp-698ad.appspot.com",
  messagingSenderId: "462225645561",
  appId: "1:462225645561:web:58e286092a3e2b9274a728",
  measurementId: "G-W96X5GG6QR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };