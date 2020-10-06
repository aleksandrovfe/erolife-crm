import firebase from "firebase";

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkyFVqeOK6sj0GwJNPZkrUFOPpfqWsYOI",
    authDomain: "eurolife-dp-ua.firebaseapp.com",
    databaseURL: "https://eurolife-dp-ua.firebaseio.com",
    projectId: "eurolife-dp-ua",
    storageBucket: "eurolife-dp-ua.appspot.com",
    messagingSenderId: "322274967673",
    appId: "1:322274967673:web:3d242b99d98eb7d0f994a8",
    measurementId: "G-Q1769CF5DJ"
});

export const db = firebaseApp.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()