const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
 const toDoList = document.querySelector(".todo-list");

const toDos = [];
const toDo_KEY = "todos";

function saveToDos() {
    localStorage.setItem(toDo_KEY, JSON.stringify(toDos));
} // 위에서 문자열로 만든 리스트 문자열을 JSON.parse()로 변환시, 
// 다시 리스트로 반환해준다.
// 정리 5. 로컬 저장소에 리스트로 인풋의 입력값을 저장.

function deletToDo(e) {
    const li = e.target.parentElement;
    li.remove();
} // 정리 4. 타겟을 부모 요소로 잡고, 삭제


 function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deletToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
 } // 정리 3. 페인트 함수는 리스트와 스팬, 버튼을 생성, 삽입해주고 버튼에 이벤트리스너 삽입, 작동 시 삭제 함수를 실행

 function toDoSubmit(e) {  
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
 }  // 정리 2. 그 함수는 인풋의 값을 위의 toDos 리스트에 넣어주고, 입력 시 초기화, 페인트와 세이브 함수 실행

 toDoForm.addEventListener("submit", toDoSubmit); // 정리 1. 폼에 제출 시 실행하는 이벤트리스너 생성

function sayHello(a) {
    console.log("my name is", a)
}

const saveTodos = localStorage.getItem(toDo_KEY); // 정리 6. 로컬에 저장된 todos의 원소를 변수로 선언.
// 변수명에 항상 유의~
 if (saveTodos) {
    const parsedTodos = JSON.parse(saveTodos);
    parsedTodos.forEach((element) => 
        console.log("hi", element))
;; // 이렇게 화살표 함수로도 실행 가능. 이편이 좀 더 짧긴 함.
 } // 리스트.forEach로 각각의 원소에 함수 실행 가능. 마치 반복문

// 정리 7. 만약 로컬저장소에 원소가 있다면, 문자열 리스트를 원래 리스트로 복원시키고 각각의 리스트 원소에 대해 함수 실행.