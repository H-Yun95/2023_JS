// CSS in JS Part 3  toggle
const h1 = document.querySelector("div.Hi:first-child h1");

function handleTitleClick(){
    //const clickedClass = "active"; 토글에선 한번만 쓰므로 선언 제거
    h1.classList.toggle("active");
} // toggle은 h1의 classList에서 클릭 class가 있는지 확인 후,
// 있다면 제거, 없다면 생성 ㄷㄷ

h1.addEventListener("click", handleTitleClick);