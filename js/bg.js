import config from "./config.js";
const { UNSPLASH_API_KEY } = config;

const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

const body = document.querySelector("body")

function getBackground() {
  fetch(UNSPLASH_URL)
    .then(response => response.json())
    .then(json => {
      const image = json;
      console.log(image)
      if (image.urls && image.urls.full) {
        const fullUrl = image.urls.full;
        body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${fullUrl})`;
      }
    });
  return;
}
getBackground();