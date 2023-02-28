const ChooseNum = document.querySelector(".ChooseNum");
const ChooseInput = ChooseNum.querySelector("input");
// 첫 번째 인풋의 정보
const GuessNum = document.querySelector("#GuessNum");
const GuessInput = GuessNum.querySelector("input");
// 두 번째 인풋의 정보
const Nummessage = document.querySelector("p");
const ResultSpan = document.querySelector(".result");

function answer(event) {
  event.preventDefault();
  const Gnum = GuessInput.value; // 바로 이 부분
  const Cnum = ChooseInput.value;
  let Anum = Math.ceil(Math.random() * Cnum);
// 여기가 정말 중요한데, 이 함수에서 쓰일 인자는 무적권 이 안에서 선언해주자...
// 이걸로 시간을 얼마나 쓴지 모르겟다
  Nummessage.innerText = `You chose: ${Gnum}, the machine chose: ${Anum}.`;
  const GGnum = parseInt(Gnum, 10); // 자료형을 확인해보니 input에 쌩으로 드가는건 스트링이더라....
  if (GGnum === Anum) {
    ResultSpan.innerText = "You Won!";
  } else {
    ResultSpan.innerText = "You Lost!";
  }
}

GuessNum.addEventListener("submit", answer);
