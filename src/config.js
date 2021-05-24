import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBQEp4G7xg73J1kW2kqCr3ity4fbjrZAGw",
  authDomain: "mapbox-route-app.firebaseapp.com",
  projectId: "mapbox-route-app",
  storageBucket: "mapbox-route-app.appspot.com",
  messagingSenderId: "890048047178",
  appId: "1:890048047178:web:0d49250d7f01a756b39eb3",
  measurementId: "G-XK5CB2YNNW",
});

export default firebase;
