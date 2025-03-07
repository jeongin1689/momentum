import config from "./config.js";
const { WEATHERSTACK_API_KEY } = config;

const WEATHERSTACK_URL = `https://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query="Seoul"`;
const weatherText = document.querySelector(".js-weather .weather_text");
const weatherImg = document.querySelector(".js-weather .weather_icon img");

function getWeather() {
  fetch(WEATHERSTACK_URL)
    .then(response => response.json())
    .then(json => {
      const weather = json;
      console.log(weather)
      if (weather) {
        const weatherDescription = weather.current.weather_descriptions;
        const weatherIcon = weather.current.weather_icons;
        weatherText.innerHTML = weatherDescription;
        weatherImg.src = weatherIcon;
      }
    });
  return;
}
getWeather();