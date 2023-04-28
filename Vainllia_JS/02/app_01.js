// Console 탭에서 document 입력 시, HTML 파일을 JS처럼 열람 가능
// console.dir(document)로 Document 역시 Object처럼 리딩 가능
// 즉, 콘솔 창에서 xxx.xx = "yy" 형식으로 변겅 가능! 근데 새로고침하면 원래대로 바뀜

document.title = "Hello, JS" // JS에서 접근, 변경 가능

const title = document.getElementById("title");
// element를 가져옴. 그냥 출력만 해줌?
console.dir(title);

title.innerText = 'Got you!';

/*
document.getElementById(“title”)
은 html에 있는 id를 불러올 수 있다.

js에서는 html이 표현하는 object를 보여준다

title.innerText = “got you”
처럼 js에서 바꾸기 쌉가능 id를 추가했기에 가능.

모든 것들을 html에서 항목들을 가지고와서 js에서 변경한다
console.dir(“title”);
js에서는 html이 표현하는 object를 보여준다

title.innerText = “got you”
처럼 js에서 바꾸기 쌉가능 id를 추가했기에 가능.

모든 것들을 html에서 항목들을 가지고와서 js에서 변경한다
*/