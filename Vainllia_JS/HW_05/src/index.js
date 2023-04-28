const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const changeButton = document.querySelector(".change");
const bodyColor = document.querySelector("body");

function ada(e) {
  e.preventDefault();
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  const degree = Math.floor(Math.random() * 360);
  if (randomColor1 === randomColor2) {
    randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  } else {
    bodyColor.style.backgroundImage = `linear-gradient(${degree}deg,${randomColor1},${randomColor2})`;
  }
}

changeButton.addEventListener("submit", ada);
