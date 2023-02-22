//CSS in JS

const h1 = document.querySelector("div.Hi:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "red";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor
} // h1의 색이 파란색이면 빨강으로, 아니라면 파랑으로
// const는 변할 수 없으므로, let으로 새 변수 선언
// 그리고 조건문이 끝나면 색을 변수로 지정

function handleMouseEnter(){
    h1.innerText = "Mouse is here";
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);

//Part 2 들어가기 전, 스타일에 유용한 툴은 CSS고 anmation에 유용한 툴은 JS다.
