const logInForm = document.querySelector(".login-form");
const loginInput = logInForm.querySelector("input");
const loginButton = logInForm.querySelector("button");
// div는 문제없지만, form은 항상 submit, 새로고침을 하기 때문에 다른 대처가 필요함.

function loginBtnClick(info) {  // 여기서 주는 argument는 그 이벤트에 해당
    info.preventDefault();  //.preventDefault는 브라우저의 기본 동작을 막는 역할을 함.
    console.log(info);
    console.log(loginInput.value);      // Ex) submit의 새로고침 등
}

logInForm.addEventListener("submit", loginBtnClick);
// submit은 엔터를 누르거나 버튼을 클릭할 때 발생

/*
loginBtnClick()
위처럼 함수 뒤에 ()가 붙으면 브라우저는 
이벤트를 무시하고 자동으로 함수를 실행시켜버림.
*/