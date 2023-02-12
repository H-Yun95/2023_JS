// Objects == {}
const player = {
    name : 'yoon',
    points : 10,
    fat : true
};
// 마치 Python의 딕셔너리
console.log(player);
console.log(player.name);  // 출력방법 1
console.log(player['points']); // 출력방법 2

player.fat = false; 
// const는 전체 값의 변경이 불가능하지, Object 내의 개별 요소는 변경 가능
player.lastname = 'beef';
// 단순 선언만으로도 property 추가 가능
console.log(player);