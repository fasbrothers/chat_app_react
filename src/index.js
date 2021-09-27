import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj5SPJLOooYRaNcBaTshjoGWWssCTgVLw",
  authDomain: "ichat-app-4872d.firebaseapp.com",
  projectId: "ichat-app-4872d",
  storageBucket: "ichat-app-4872d.appspot.com",
  messagingSenderId: "548653304620",
  appId: "1:548653304620:web:231858a0223a0baf713a89",
  measurementId: "G-E8NMCDG5MM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Context = createContext(null);
const auth = app.auth();
const firestore = app.firestore;

ReactDOM.render(
  <Context.Provider value={{ auth, firestore }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
