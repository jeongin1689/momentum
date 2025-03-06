import config from "./config.js";
const { WEATHERSTACK_API_KEY } = config;

const WEATHERSTACK_URL = `https://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query="Seoul"`;

function getBackground() {
    fetch(WEATHERSTACK_URL)
      .then(response => response.json())
      .then(json => {
        const weather = json;
        console.log(weather)
        if (weather.current) {
          const weatherCurrent = weather.current;
        }
      });
    return;
  }
  getBackground();