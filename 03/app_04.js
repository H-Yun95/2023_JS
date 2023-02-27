const logInForm = document.querySelector(".login-form");
const loginInput = logInForm.querySelector("input");
const loginButton = logInForm.querySelector("button");

const link = document.querySelector("a");

function loginBtnClick(info) {
    info.preventDefault();
    console.log(info);
    console.log(loginInput.value); 
}

function linkClick(){
    alert("click!")
} // alert는 브라우저의 기본 동작을 막는다. 그래서 아무도 안씀
/*
때로 개발자는 유저가 어디를 클릭했늕 알아야 할 때가 있다.
그때 쓸 수 있는 것이 바로 클릭 이벤트에 consloe.log를
써서 나오는 MouseEvent에 담긴 정보
*/

logInForm.addEventListener("submit", loginBtnClick);
link.addEventListener("click", linkClick);