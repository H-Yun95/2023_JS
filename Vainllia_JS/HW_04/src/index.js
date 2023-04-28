const clockTitle = document.querySelector(".js-clock");

function showTime() {
  const dDay = new Date("2023-12-25");
  const today = new Date();
  const dNumber = dDay - today;

  const dYear = Math.floor(dNumber / (1000 * 24 * 60 * 60));
  const dHour = String(Math.floor((dNumber / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const dMin = String(Math.floor((dNumber / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const dSec = String(Math.floor((dNumber / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `${dYear}d ${dHour}h ${dMin}m ${dSec}s`;
}

showTime();
setInterval(showTime, 1000);
