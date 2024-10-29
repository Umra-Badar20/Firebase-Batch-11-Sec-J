import { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut } from "./firebase.js"

let signUp = ()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user); 
  })
  .catch((error) => {
    console.log(error.message);
  });
}
let sign_up = document.getElementById("sign_up")
sign_up.addEventListener("click",signUp)

let signIn=()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    console.log(error.code); 
  });
}
let sign_in = document.getElementById("sign_in")
sign_in.addEventListener("click",signIn)

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    // window.location.href = "./dashboard.html"
  } else {
  console.log("User not found")
  }
});
let sendMail=()=>{
  sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log("Email verification sent!");
  });
}
let verification = document.getElementById("verification")
verification.addEventListener("click",sendMail)

let signout = ()=>{
  signOut(auth).then(() => {
    console.log("Sign-out successful.");
    
  }).catch((error) => {
    console.log(error)
  });
}
let sign_out = document.getElementById("sign_out")
sign_out.addEventListener("click",signout)