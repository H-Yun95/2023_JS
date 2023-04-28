const logInForm = document.querySelector(".login-form");
const loginInput = logInForm.querySelector("input");
const loginButton = logInForm.querySelector("button");

function loginBtnClick() {
    const username = loginInput.value;
    if(username === ""){
        alert("please write your name!");
    } else if(username.length > 15) {   // .length는 문자열 길이 == len()
        alert("your name is too long!");
    }
} // 유효성 검사, 너무 길거나 공백이면 경고창 표시
// 유효성 검사는 언제나 옳다. 절대 User를 믿지마...

loginButton.addEventListener("click", loginBtnClick);