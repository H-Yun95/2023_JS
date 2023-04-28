//More Events
const title = document.querySelector(".Hi h1");

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
function handleWindowResize(){
    document.body.style.backgroundColor = "teal";
} // 여기서 document. 뒤에 title이 붙는다고 위의 타이틀을 import하지는 않음.
// 대신, HTML의 title을 호출함
function handleWindowCopy(){
    alert("copy right");
} // 복사 감지

title.onclick = handleTitleClick; // property.on---으로도 함수 실행 가능
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// But, 위의 방법은 removeEventListener로 이벤트 제거 가능

//Window Events
window.addEventListener('resize', handleWindowResize);
// 윈도우 내장 기능.
// Document.---로는 bady, head, title 같은 중요 요소들만 호출 가능. Not div
// 나머지는 querySelector나 getElementById 등으로 찾아야 함.

window.addEventListener("copy", handleWindowCopy);