//Part 2 들어가기 전, 스타일에 유용한 툴은 CSS고 anmation에 유용한 툴은 JS다.
const h1 = document.querySelector("div.Hi:first-child h1");

function handleTitleClick(){
    const clickedClass = "active"; // 코드를 깔끔하게 하기 위해, 이런 클래스네임 등은 따로 const로 지정해주는게 좋음.
    if(h1.className === clickedClass){
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
} // CSS에 active 클래스를 선언하고, js에서 클래스 네임을 변경

h1.addEventListener("mouseenter", handleTitleClick);

//그러나 위의 경우, ClassName을 직접 건드리기에 기존 HTML에서 설정해 놀은 classname이 씹히는 현상 발생.