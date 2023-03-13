import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"

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

let login = document.getElementById("login2");
let emailData = document.getElementById("email-data");
let passwordData = document.getElementById("password-data");

login.addEventListener("click", (e)=>{
    signInWithEmailAndPassword(auth, emailData.value, passwordData.value)
  .then((userCredential) => {
  
    const user = userCredential.user;
    alert("Success");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error");
  });
})