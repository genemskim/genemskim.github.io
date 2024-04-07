const weather = document.querySelector("#weather span");
const API_KEY = "61251d26b0c5e66595dd0f9154203493";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C @${data.name}`;
    });
}
function onGeoError() {
  alert("Can't find your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
