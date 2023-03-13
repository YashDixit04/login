import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDHzDctmfKNA4eB0ChHYHau-zncPHnQ2wE",
    authDomain: "apna-web.firebaseapp.com",
    databaseURL: "https://apna-web-default-rtdb.firebaseio.com",
    projectId: "apna-web",
    storageBucket: "apna-web.appspot.com",
    messagingSenderId: "388000915036",
    appId: "1:388000915036:web:3cf80a753bfb0fdcbc9099",
    measurementId: "G-3GF6BJX47S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

let signupBtn = document.getElementById("submit");
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

signupBtn.addEventListener('click', (e) => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('User Created!');
           
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
            // ..
        });
});