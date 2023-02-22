//Events part 2
const title = document.querySelector(".Hi h1");
// 언제나 그렇듯, 일단 기능을 꺼내올 객체를 선언
title.style.color = "blue";
function handleTitleClick() {
    console.log("Title was clicked");
    title.style.color = "red"
}
function handleMouseEnter() {
    title.innerText = 'Mouse is Here';
}
function handleMouseLeave(){
    title.innerText = 'Mouse is gone';
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

/* 
가장 좋은 Event 검색 방법
Mozilla Developer Network = MDN
Web APIs 라는 문장이 포함된 페이지 찾기
Or, console.dir(Elements)로 웹에서 띄우고,
'on'이 붙은 요소를 찾아본다. property 앞에 on이 붙어있다면,
그게 바로 event listener.

.addEventListener 뒤의 괄호에 텍스트 형식으로 해당하는
Event를 기록해주면 됨. 그 뒤 실행할 함수 이름만 입력
*/