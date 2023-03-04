 const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
 const toDoList = document.querySelector(".todo-list");

function deletToDo(e) {
    const li = e.target.parentElement; // 버튼의 부모인 원소를 타겟으로,
    li.remove(); // 그것을 지운다.
}
/* 버튼을 누르면 리스트를 지우는 함수
event.target으로 이벤트 내의 특정 요소를 겨냥하는 것이 가능.*/ 

 function paintToDo(newTodo) {
    const li = document.createElement("li"); // 리스트 태그 생성
    const span = document.createElement("span"); // 안에 들어갈 문자태그 생성
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deletToDo);
    li.appendChild(span); // 리스트 내에 스맨을 삽입
    li.appendChild(button);
    span.innerText = newTodo; // 스팬 내부 텍스트를 인풋 값으로 바꾸고,
    toDoList.appendChild(li); // HTML의 리스트에 저장
 }

 function toDoSubmit(e) {
    e.preventDefault(); // 서브밋이 되는걸 막고
    const newToDo = toDoInput.value; // 인풋에 적힌 값을 새로 변수지정
    toDoInput.value = ""; // 그 뒤 인풋을 초기화해주고
    paintToDo(newToDo); // 위의 페인트 함수 실행
 }

 toDoForm.addEventListener("submit", toDoSubmit);

 // 하면서 느낀건데, 인터프리터 특성상 최소단위의 함수를 위부터 해서
 // 역피라미드의 느낌으로 코드를 짜야한다.