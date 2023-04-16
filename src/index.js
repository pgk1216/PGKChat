import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBc6xzAYuFjthpyd_Z1x2oMZRvXtmVri9U",
//   authDomain: "pgkchat.firebaseapp.com",
//   projectId: "pgkchat",
//   storageBucket: "pgkchat.appspot.com",
//   messagingSenderId: "568997568487",
//   appId: "1:568997568487:web:a61ff4afec5c89e775a742"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
