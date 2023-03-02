const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
]; // 이미지를 가지고 올 땐, 폴더의 파일명과 똑같이 원소 이름을 할당

const imageChoise = images[Math.floor(Math.random() * images.length)];

const BGImage = document.createElement("img");
// 이것은... 놀랍게도 tag를 JS에서 생성한다.
// But, 이 상태로는 tag가 JS내에서만 머무르게 됨.
BGImage.src = `image/${imageChoise}`;

document.body.appendChild(BGImage);
/* 그러므로 .appendChild()로 body 제일 뒤에 요소를 추가.
혹은, .preppend로 제일 앞에 추가할 수도 있음.*/