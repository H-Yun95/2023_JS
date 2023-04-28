// Events

const title = document.querySelector(".Hi h1");
// Document는 HTML에서 JS를 script하기 떼문제 존재 가능
title.innerText = "hello";

// console.dir을 하면 "on-"으로 시작하는 많은 요소들을 볼 수 있다.
// 그것들이 event, 특수효과들

console.dir(title);

title.style.color = "blue"; // 이렇게 접근해서 스타일 변경도 가능
// But, 대부분의 JS에서의 작업들은 Event를 조정하는 작업을 하게될 것
function handleTitleClick() {
    console.log("Title was clicked");
    title.style.color = "red"
} // "타이틀이 클릭됨" 문구 출력

title.addEventListener("click", handleTitleClick);
// 클릭 감지 함수, 놀랍게도 스텍 또한 쌓인걸 헤아릴 수 있음
// (listen 하고싶은 Event, Function 순으로 입력, 괄호 x)