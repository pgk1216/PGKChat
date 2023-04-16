import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBc6xzAYuFjthpyd_Z1x2oMZRvXtmVri9U",
    authDomain: "pgkchat.firebaseapp.com",
    projectId: "pgkchat",
    storageBucket: "pgkchat.appspot.com",
    messagingSenderId: "568997568487",
    appId: "1:568997568487:web:a61ff4afec5c89e775a742",
  })
  .auth();
