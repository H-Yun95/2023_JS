function onGeoSC(a){
    console.log(a);
}
function onGeoFA(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSC,onGeoFA);
// 위치 정보를 받는 함수.