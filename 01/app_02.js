// variable
const a = 5;
let b = 2;
console.log(a, b);

b = 5;

console.log(a, b);
// const는 업데이트 불가, let은 가능
// const는 디폴트, let은 가끔, var는 사용 금지

c = false;
d = undefined;

console.log(c);
console.log(d);
// true, false는 boolean, 값이 '존재'.
// undefined도 값이 존재, null은 값이 존재하지 않음

// list(array)
const weeks = ['mon', 1, true, b];

console.log(weeks);
console.log(weeks[2]);

weeks[2] = false;
console.log(weeks);

weeks.push(undefined);
console.log(weeks);