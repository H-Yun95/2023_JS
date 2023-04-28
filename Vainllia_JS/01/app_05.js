//Conditionals

const age = parseInt(prompt("How old are you?")); // == input()
// prompt는 css 적용도 안되며, 어떤 브라우저는 팝업도 제한하기에 쓰이진 않음

//const age2 = parseInt(age); 자료형을 int로 변환
console.log(age);
isNaN(); // 인자가 숫자인지 아닌지 boolean으로 반환, 숫자면 false

/*
if(condition){
    //condition == true
} else {
    //condition == false
} // Js에서 if 쓰는 법, condition은 반드시 boolean이어야 함
*/

if(isNaN(age) || aeg < 0){
    alert('Please write a real positive number');
} else if(age < 18){ 
    alert("You're too young");
} else if (age >= 18 && age < 65){  //Js에서 And는 &&, Or는 ||
    alert('Welcome');
} else {
    alert('Hmm.....');
} // 추가 조건을 else if로 붙여줌

// Operator >, <, =, &&(and), ||(or), ===(==)
