const logInForm = document.querySelector(".login-form");
const loginInput = logInForm.querySelector("input");
const loginButton = logInForm.querySelector("button");
const greeting = document.querySelector(".greeting");

const link = document.querySelector("a");

function loginBtnClick(info) {
    info.preventDefault(); // submit이 새로고침을 안하게 해줌
    const username = loginInput.value; // 인풋의 값을 변수로 선언
    logInForm.classList.add("hidden"); // 로그인폼에 히든 클래스리스트 추가
    greeting.innerText = `Hello ${username}, Wlecome!`; // h1의 내용을 바꿔줌. 파이썬의 f스트링과 유사한 표기법
    greeting.classList.remove("hidden"); // h1의 히든 클래스를 제거
}
//로그인 했을 때 로그인창을 가리기 위해 css에 hidden이라는 class 생성

function linkClick(){
    alert("click!")
}

logInForm.addEventListener("submit", loginBtnClick);
link.addEventListener("click", linkClick);