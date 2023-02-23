// CSS in JS Part 3  ClassList
const h1 = document.querySelector("div.Hi:first-child h1");

 // ClassName 대신 List를 사용함으로써, 원래의 class에 변화를 주지 않고 추가, 제거를 가능하게 함.
function handleTitleClick(){
    const clickedClass = "active";
    if(h1.classList.contains(clickedClass)){ // .contains = 할당되어 있는지 판별
        h1.classList.remove(clickedClass); // 제거
    } else {
        h1.classList.add(clickedClass); // 추가
    }
} //

h1.addEventListener("click", handleTitleClick);