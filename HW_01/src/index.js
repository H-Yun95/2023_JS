// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const Word = document.querySelector("h2");
const superEventHandler = {
  Inmouse: function () {
    Word.style.color = "#1abc9c";
    Word.innerText = "The mouse is here!";
  },
  Outmouse: function () {
    Word.style.color = "#3498db";
    Word.innerText = "The mouse is gone!";
  },
  Resized: function () {
    Word.style.color = "#9b59b6";
    Word.innerText = "You just resized!";
  },
  Rightclick: function () {
    Word.style.color = "#e74c3c";
    Word.innerText = "That was a right click!";
  }
};

Word.addEventListener("mouseenter", superEventHandler.Inmouse);
Word.addEventListener("mouseleave", superEventHandler.Outmouse);
window.addEventListener("resize", superEventHandler.Resized);
window.addEventListener("mousedown", superEventHandler.Rightclick);
