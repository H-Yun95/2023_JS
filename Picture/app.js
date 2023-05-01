const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d"); // canvas에 그림을 그리게 해줌
canvas.width = 800;
canvas.height = 800; // 일단 JS에도 canvas의 크기를 명시

ctx.rect(50, 50, 100, 100); // 일동의 공간을 만들어넣는 느낌
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.stroke();

ctx.beginPath(); // 2. 그러므로, 경로 초기화를 한 번 해주면 해결 * 중요
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red"; // 1. 뒤에 붙은 코드지만, 앞 rect의 서식도 다 바꿔버림. 경로가 같기 때문?
ctx.fill();