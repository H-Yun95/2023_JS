const welcomeBox = document.querySelector(".welcomeBox");
const welcomeForm = welcomeBox.querySelector("form");
const WelcomeText = welcomeBox.querySelector("h1");
const welcomeInput = welcomeForm.querySelector("input");
const welcomeButton = welcomeForm.querySelector("button");

const title = welcomeBox.querySelector(".title");
const titleText = title.querySelector("h1");
const toDoList = welcomeBox.querySelector(".toDoList")
const clock = welcomeBox.querySelector(".clock");
const some = welcomeBox.querySelector(".something");

const USKey = "name";

const HIDDEN = "hidden";
const FDisplay = "flex_center";

function inputEnter(event){
    event.preventDefault();
    const username = welcomeInput.value;
    localStorage.setItem(USKey, username);
    welcomeForm.classList.add(HIDDEN);
    WelcomeText.classList.add(HIDDEN);
    titleText.innerText = `hello, ${username}, Welcome!`
    title.classList.remove(HIDDEN);
    title.classList.add(FDisplay);
    toDoList.classList.remove(HIDDEN);
    clock.classList.remove(HIDDEN);
    some.classList.remove(HIDDEN);
}


const saveUserName = localStorage.getItem(USKey);

if (saveUserName == null) {
    welcomeForm.classList.remove(HIDDEN);
    welcomeForm.addEventListener("submit", inputEnter);
} else {
    titleText.innerText = `hello, ${username}, Welcome!`
    title.classList.remove(HIDDEN);
    title.classList.add(FDisplay);
    toDoList.classList.remove(HIDDEN);
    clock.classList.remove(HIDDEN);
    some.classList.remove(HIDDEN);
}