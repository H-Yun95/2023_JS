const clock = document.querySelector("#clock");
//Interval = '매번' 일어나야 하는 무언가

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
} // 시간을 바로 받아오는 함수

getClock();
setInterval(getClock, 1000);
// setInterval = 함수를 정해진 시간마다 동작, 시간은 ms 단위
// setTimeout = 인터벌과 같은 원리로 작동, 하지만 함수를 지연시켜 실행하는 용도
