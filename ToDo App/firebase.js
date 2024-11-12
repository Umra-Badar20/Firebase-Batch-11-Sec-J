import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getFirestore,collection, addDoc ,onSnapshot, serverTimestamp ,orderBy,query ,where} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyClGjUEM1ZFaaPWtNrm9auRJWZ_iVhc0R8",
    authDomain: "fir-project-b811d.firebaseapp.com",
    projectId: "fir-project-b811d",
    storageBucket: "fir-project-b811d.firebasestorage.app",
    messagingSenderId: "961312551768",
    appId: "1:961312551768:web:5de55f3635c27a1eb8eb2d",
    measurementId: "G-5LTCJ1HPMK"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
export {db,collection, addDoc,onSnapshot,serverTimestamp ,orderBy,query ,where}
