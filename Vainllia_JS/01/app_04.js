//Return

const calculater = {
    add: function (a,b){
        alert(a+b);
    },
    minus: function(a,b){
        return a-b; // 함수의 결과'값'만 받기
    },
    multy: function(a,b){
        return a*b;
    }
}

const plusResult = calculater.minus(7,3);
const multyResult = calculater.multy(plusResult, 5);
// 복합적 사용
calculater.add(3,4);
console.log(calculater.minus(50,4));
calculater.multy(8,5);

console.log(multyResult);