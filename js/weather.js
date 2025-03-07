import config from "./config.js";
const { WEATHERSTACK_API_KEY } = config;

const WEATHERSTACK_URL = `https://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query="Seoul"`;
const weatherText = document.querySelector(".js-weather .weather_text");
const weatherImg = document.querySelector(".js-weather .weather_icon img");
const weatherCountryText = document.querySelector(".js-location .location_text");

function getWeather() {
  fetch(WEATHERSTACK_URL)
    .then(response => response.json())
    .then(json => {
      const weather = json;
      console.log(weather)
      if (weather) {
        const weatherDescription = weather.current.weather_descriptions;
        const weatherIcon = weather.current.weather_icons;
        const weatherCountry = weather.location.country;
        const weatherLocation = weather.location.name;

        weatherText.innerHTML = weatherDescription;
        weatherImg.src = weatherIcon;
        weatherCountryText.innerHTML = weatherCountry +'/'+ weatherLocation;
      }
    });
  return;
}
getWeather();