const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

const imageChoise = images[Math.floor(Math.random() * images.length)];
const changeIMG = document.querySelector(".changeIMG button")
const BGImage = document.querySelector("body");

function changeBG(e) {
    e.preventDefault();
    BGImage.style.backgroundImage = imageChoise;
    console.log(imageChoise);
}

// Fail
changeIMG.addEventListener("submit, ")