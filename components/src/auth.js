import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

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
const ggl = document.getElementById("authenticate");
const submit = document.getElementById("form");
const message = document.getElementById("signUpMessage");

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

ggl.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      window.location.href = "./dashboard.html";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // ...
    });
});
const text = document.getElementById("success");
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
      let count = 1;
      setInterval(() => {
        count++;

        if (count > 6) {
          location.replace("./login.html");
        }
      });
      // message.style.display = 'none'
    })
    .catch((err) => {
      console.log(err.message);
      // message.innerText = err.message
      if (err.message == "Firebase: Error (auth/invalid-email).") {
        text.innerText = "invalid email/password";
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
const logInEmail = document.getElementById("LEmail");
const logInPassword = document.getElementById("Lpword");

const logInFunction = async () => {
  const userEmail = logInEmail.value;
  const userPword = logInPassword.value;

  const userCredentials = await signInWithEmailAndPassword(
    auth,
    userEmail,
    userPword
  );
  console.log(userCredentials.user);
};
