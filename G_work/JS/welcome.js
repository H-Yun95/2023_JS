const welcomeBox = document.querySelector(".welcomeBox");
const welcomeForm = welcomeBox.querySelector("form");
const WelcomeText = welcomeBox.querySelector("h1");
const welcomeInput = welcomeForm.querySelector("input");
const welcomeButton = welcomeForm.querySelector("button");

const title = welcomeBox.querySelector(".title");
const toDoList = welcomeBox.querySelector(".toDoList")
const clock = welcomeBox.querySelector(".clock");
const some = welcomeBox.querySelector(".something");

const HIDDEN = "hidden";
const FDisplay = "flex_center";

function inputEnter(event){
    event.preventDefault();
    welcomeForm.classList.add(HIDDEN);
    WelcomeText.classList.add(HIDDEN);
    title.classList.remove(HIDDEN);
    title.classList.add(FDisplay);
    toDoList.classList.remove(HIDDEN);
    clock.classList.remove(HIDDEN);
    some.classList.remove(HIDDEN);
}

welcomeForm.addEventListener("submit", inputEnter);

console.log(welcomeBox);
console.log(welcomeForm);
console.log(welcomeInput);
console.log(welcomeButton);