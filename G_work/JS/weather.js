const API_KEY = "566bbd48d124bde22824ac49da76dd44"

function onGeoSC(a){
    const lat = a.coords.latitude;
    const lng = a.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url).then((response) => response.json()).then((data) =>{
        const weather = document.querySelector(".changeBG p");
        const city = document.querySelector(".changeBG span");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });

}
function onGeoFA(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSC,onGeoFA);