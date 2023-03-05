const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
 const todoList = document.querySelector(".todo-list");
console.log(toDoForm);
console.log(toDoInput);
console.log(todoList);

let toDos = [];
const toDo_KEY = "todos";

function saveToDos() {
    localStorage.setItem(toDo_KEY, JSON.stringify(toDos));
}

function deletToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

 function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deletToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    todoList.appendChild(li);
 }

 function toDoSubmit(e) {  
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
 }

 toDoForm.addEventListener("submit", toDoSubmit);

const saveTodos = localStorage.getItem(toDo_KEY);

 if (saveTodos) {
    const parsedTodos = JSON.parse(saveTodos);
    toDos = parsedTodos
    parsedTodos.forEach(paintToDo);
 }