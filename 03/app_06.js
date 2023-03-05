// local storage = 브라우저 자체 내장, 그 페이지에 정보를 저장할 때 사용.
// user의 정보를 저장하는덴 여러가지 방법이 있지만, local storage가 가장 쉬움
// localStorage.setItem('key', 'value') === 로컬에 정보를 저장하는 방법


const logInForm = document.querySelector(".login-form");
const loginInput = logInForm.querySelector("input");
const loginButton = logInForm.querySelector("button");
const greeting = document.querySelector(".greeting");

const link = document.querySelector("a");
const USKey = "name";
// 여러번 쓰이는 문자열은 앵간하면 변수 지정
function loginBtnClick(info) {
    info.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USKey, username); // 로컬에 dict 값을 저장
    logInForm.classList.add("hidden");
    greeting.innerText = `Hello ${username}, Wlecome!`;
    greeting.classList.remove("hidden");
}

function linkClick(){
    alert("click!")
}

link.addEventListener("click", linkClick);

const saveUserName = localStorage.getItem(USKey);

if (saveUserName === null) {
    logInForm.classList.remove("hidden");
    logInForm.addEventListener("submit", loginBtnClick);
} else {
    greeting.innerText = `Hello ${saveUserName}, Wlecome!`;
    greeting.classList.remove("hidden");
}