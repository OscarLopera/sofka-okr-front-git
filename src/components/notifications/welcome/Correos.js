import firebase from 'firebase/app';

firebase.initializeApp({
    apiKey: "AIzaSyDBcXIEBW1ND06-rHiH3FAWBnxpVm1G9_0",
    authDomain: "socialquestion-39ac6.firebaseapp.com",
    projectId: "socialquestion-39ac6",
    storageBucket: "socialquestion-39ac6.appspot.com",
    messagingSenderId: "820048359213",
    appId: "1:820048359213:web:e4ffdbb41f31bd21feeda4"
});

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const nodemailer = require('node')