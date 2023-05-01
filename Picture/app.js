const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d"); // canvas에 그림을 그리게 해줌
canvas.width = 800;
canvas.height = 800; // 일단 JS에도 canvas의 크기를 명시

ctx.fillRect(50, 50, 100, 200); //채우기