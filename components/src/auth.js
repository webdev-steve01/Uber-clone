import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// import { logOut } from "./test";
const firebaseConfig = {
  apiKey: "AIzaSyDVcSY3i8JEWnQghJsWaac3P3ItAo_eikE",
  authDomain: "new-project-c0754.firebaseapp.com",
  projectId: "new-project-c0754",
  storageBucket: "new-project-c0754.appspot.com",
  messagingSenderId: "111629958118",
  appId: "1:111629958118:web:35f70b6422a899430bf427",
};
const app = initializeApp(firebaseConfig);

const signUpEmail = document.getElementById('email');
const logInEmail = document.getElementById('LEmail');
const logInPassword = document.getElementById('Lpword');
const logIn = document.getElementById('Lsubmit');
const signUpPassword = document.getElementById('pword')
const signUp = document.getElementById('submit')
const google = document.getElementById('authenticate')
const logOut = document.getElementById('logout')
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
// connectAuthEmulator(auth, "http//:localhost:9099")


logIn.addEventListener('click', async (e) => {
  e.preventDefault()
    const email = logInEmail.value;
    const password = logInPassword.value;

    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  console.log(userCredentials.user);
  setInterval(() => {
    window.location.href = "./parts/dashboard.html";
  }, 3000);
})

signUp.addEventListener('click', async (e) => {
  e.preventDefault()
  // signUp.style.cursor = 'loader'
  const signUpMail = signUpEmail.value;
  const signUpPword = signUpPassword.value

  const newUser = await createUserWithEmailAndPassword(auth, signUpMail, signUpPword);
  console.log(newUser.user);
  setInterval(() => {
    window.location.href = '../login.html'
  }, 3000)
})

google.addEventListener('click', async (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const user = result.user;
      console.log(credential);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setInterval(() => {
        window.location.href = 'dashboard.html'
      }, 3000);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // ...
    });
})
console.log('het');

logOut.addEventListener('click', (e) => {
  console.log('hdhhd');
  
  signOut(auth).then(() => {
    console.log('signed out');
    window.location.href = '../index.html'
  }).catch(() => {
    console.log('error');
    
  })
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    
    // ...
  } else {
    // User is signed out
    // ...
    console.log('user signed out');
    
  }
});
