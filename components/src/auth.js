import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY9k0tCYI_L4F2c87gfmJ16m_FqNqGBKU",
  authDomain: "driveme-login.firebaseapp.com",
  projectId: "driveme-login",
  storageBucket: "driveme-login.appspot.com",
  messagingSenderId: "347225371593",
  appId: "1:347225371593:web:3f7b3e4ffd2f706ac46e18",
};
const user = {
  email: "",
  password: "",
};
const submit = document.getElementById("form");
const message = document.getElementById("signUpMessage");

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("Email").value;
  const password = document.getElementById("pword").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((credential) => {
      console.log("user created: ", credential.user);
      submit.reset();
      user.email = email;
      user.password = password;
      console.log(user);
      message.style.display = "flex";
      message.style.alignItems = "center";
      message.style.justifyContent = "space-around";
      // message.style.display = 'none'
    })
    .catch((err) => {
      console.log(err.message);
      // message.innerText = err.message
      if (err.message == "Firebase: Error (auth/invalid-email).") {
        message.innerText = "invalid email/password";
      } 
      if (err.message == "Firebase: Error (auth/missing-password)..") {
        message.innerText = "password required";
      } 
      message.style.display = "flex";
      message.style.alignItems = "center";
      message.style.justifyContent = "space-around";
      message.style.backgroundColor = "red";
    });
});

const cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
  message.style.display = "none";
});
