const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
 const toDoList = document.querySelector(".todo-list");

let toDos = [];
const toDo_KEY = "todos";

function saveToDos() {
    localStorage.setItem(toDo_KEY, JSON.stringify(toDos));
}

function deletToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 삭제를 원하는 리스트넘버를 로컬저장소에서 제외하기 위한 코드
    saveToDos();
} // 위 두 id의 자료형이 다르기 때문에, 리스트 아이디를 정수로 바꿔주고 세이브 함수 한 번 더 실행

 function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deletToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text; // 객체가 삽입되었으므로, .text로 변경
    toDoList.appendChild(li);
 }

 function toDoSubmit(e) {  
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id: Date.now()
    } // 리스트의 개별 요소에 접근을 위해, 원소 하나를 Object로 만들어줌. ID는 시간
    toDos.push(newToDoObj);
    paintToDo(newToDoObj); // 그리고 함수에 단순한 문자가 아닌 객체를 삽입.
    saveToDos();
 }

 toDoForm.addEventListener("submit", toDoSubmit);

const saveTodos = localStorage.getItem(toDo_KEY);

 if (saveTodos) {
    const parsedTodos = JSON.parse(saveTodos);
    toDos = parsedTodos
    parsedTodos.forEach(paintToDo);
 } // 새로고침 때마다 삭제되는 리스트를 해결하려면, const 대신 업뎃이 가능한 let을 쓰고
 // 조건문 내에서 업뎃 시켜주자. 로컬 저장소가 있어서 가능한 일.

// .Filter = 위의 forEach처럼 리스트의 원소 하나마다 동작하는 함수,
// 하지만 들어가는 함수의 리턴값이 True여야만 함.