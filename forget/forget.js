import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

    // Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let submit_data = document.getElementById("submit-data");
let forgetEmail = document.querySelector(".forgetEmail");


submit_data.addEventListener("click", ()=>{
    sendPasswordResetEmail(auth, forgetEmail.value)
    .then(() => {
        forgetEmail="";

        alert("Congratuation");
    })

    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert("Sorry");
    });
})