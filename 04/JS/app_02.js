const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours());  // JS에서 정수를 문열로 변환은
    const minuets = String(date.getMinutes()); // String()으로 깔끔하게 된다.
    const seconds = String(date.getSeconds()); // 정수는 왜 parseInt()인지?
    clock.innerText = `${hours.padStart(2,"0")}:${minuets.padStart(2,"0")}:${seconds.padStart(2,"0")}`
}

getClock();
setInterval(getClock, 1000);

/* padStart() = string에 쓸 수 있는 함수.
string.padStart(2,"0") 2 == 자릿수, "0"은 추가할 문자
형식으로 나타낼 수 있음. 같은 방식으로
.padEnd도 작동.
*/