const API_KEY = "566bbd48d124bde22824ac49da76dd44"

function onGeoSC(a){
    const lat = a.coords.latitude; // 위치 정보의 요소 중 위도
    const lng = a.coords.longitude; // 위치 정보의 요소 중 경도. 둘이 반대일 수도?
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}` // 위 정보로 들어가는 api
    fetch(url).then((response) => response.json()).then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    }); // fetch = 실제로 url에 접근할 필요 없이 JS가 들고옴, 그리고 then으로 이후의 프로세스를 설정 가능?

}
function onGeoFA(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSC,onGeoFA);
// 위치 정보를 받는 함수.