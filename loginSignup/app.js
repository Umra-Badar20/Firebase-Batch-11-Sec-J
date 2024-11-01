import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,signInWithPopup, GoogleAuthProvider,provider
} from "./firebase.js";

let signUp = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let cPassword = document.getElementById("confirm_pass").value;
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (emailRegex.test(email) && passwordRegex.test(password)) {
    console.log("test");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Account created successfully");
        window.location.href = "./class27/index.html"
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.code);
      });
  } else {
    alert("Invalid email or Password");
  }
  if (password !== cPassword) {
    alert("Passwords should be identical");
  }
};
if(window.location.pathname=="/loginSignup/index.html"){
    let signUp_btn = document.getElementById("signUp_btn");
    signUp_btn.addEventListener("click", signUp);
}
let logIn = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     alert("Login Successful")
     window.location.href = "./class27/index.html"
    })
    .catch((error) => {
      alert(error.code)
    });
};
if(window.location.pathname=="/loginSignup/login.html"){
let login_btn = document.getElementById("login_btn");
login_btn.addEventListener("click", logIn);
}
let googleSignup=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
     console.log(user);
     window.location.href = "./class27/index.html"

    }).catch((error) => {
      
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(email, credential);
    });
}
if(window.location.pathname=="/loginSignup/index.html"){
    let googleBtn = document.getElementById("googleBtn");
    googleBtn.addEventListener("click", googleSignup);
}
document.getElementById("logOut").addEventListener("click",()=>{
    signOut(auth).then(() => {
        alert("Log out successfull")
        window.location.href = "../index.html"
      }).catch((error) => {
        console.log(error.code);
        
      });
})