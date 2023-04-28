const day = ['mon','tue', 'wed'];
// list는 개별 인덱스의 정보가 따로 없음.

const player = {
    name: 'yoon',
    age: 29,
    points: 9654
};

console.log(player.name, console);
// 위에 보이듯, console 또한 정의된 Object Function

player.cool = true; // 선언으로 요소 추가 가능
console.log(player);

function plus(a, b){
    console.log(a+b);
};

plus(3,4);

const calculater = {
    add: function (a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    multy: function(a,b){
        console.log(a*b);
    }
} // 함수의 그룹으로 객체 생성도 가능.

calculater.add(3,4);
calculater.minus(50,4);
calculater.multy(8,5);