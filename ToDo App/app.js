import { db, collection, addDoc, onSnapshot ,serverTimestamp,orderBy,query, where} from "./firebase.js";

let addTodo = async () => {
  let todo_input = document.getElementById("todo-input");
  try {
    const docRef = await addDoc(collection(db, "Todos"), {
      value: todo_input.value,
      time: serverTimestamp(),
      status: "pending"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
};
let add_button = document.getElementById("add-button");
add_button.addEventListener("click", addTodo);

let getTodos = () => {
  const q =query(collection(db, "Todos"),orderBy("time","desc"),where("status", "==", "completed"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todo_list = document.getElementById("todo-list")
    todo_list.innerHTML= ""
    querySnapshot.forEach((doc) => {
    //   cities.push(doc.data());
    console.log(doc.data().time);
    
    todo_list.innerHTML += `
               <li class='todo-item'>
                    <span class='task-text'>${doc.data().value}</span>
                    <button class='complete-button'>Complete</button>
                    <button class='delete-button'>Delete</button>
                </li>`
                
    });
  });
};
getTodos()