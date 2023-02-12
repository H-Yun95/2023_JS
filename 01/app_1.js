// Function
function sayHello(name, age){
    console.log('Hello, my nane is ' + name + ". and I'm " + age);
};
// Python의 함수와 동일
sayHello('Choi', 29);
sayHello('Ha', 15);
sayHello('Yoon', 65);

function Plus(a, b){
    console.log(a + b);
};

Plus(3, 4);

function Divide(a, b){
    console.log(a / b);
};

Divide(18, 6)

const Player = {
    name: 'yoon',
    sayHi: function(){
        console.log('Hi.')
    }, // 객체 내부에서도 함수를 정의 가능
};

console.log(Player.name);
Player.sayHi();