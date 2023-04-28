const logInForm = document.querySelector(".login-form");
// querySelector를 쓸 때, id라면 #으로 명시해줘야 함. class라면 .
const loginInput = logInForm.querySelector("input");  // 하위 요소를 획득할 때 상위의 객체를 가져외도 됨.
const loginButton = logInForm.querySelector("button");

function loginBtnClick() {
    console.log("hello", loginInput.value); // .value로 input의 값을 얻을 수 있음.
    console.log("click!");
}

loginButton.addEventListener("click", loginBtnClick); // 클릭 시 이벤트 발생