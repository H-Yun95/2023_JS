const ChooseNum = document.querySelector(".ChooseNum");
const ChooseInput = ChooseNum.querySelector("input");

const GuessNum = document.querySelector("#GuessNum");
const GuessInput = GuessNum.querySelector("input");

const Nummessage = document.querySelector("p");
const ResultSpan = document.querySelector(".result");

function answer(event) {
  event.preventDefault();
  const Gnum = GuessInput.value;
  const Cnum = ChooseInput.value;
  let Anum = Math.ceil(Math.random() * Cnum);

  Nummessage.innerText = `You chose: ${Gnum}, the machine chose: ${Anum}.`;
  const GGnum = parseInt(Gnum, 10);
  if (GGnum === Anum) {
    ResultSpan.innerText = "You Won!";
  } else {
    ResultSpan.innerText = "You Lost!";
  }
}

GuessNum.addEventListener("submit", answer);
