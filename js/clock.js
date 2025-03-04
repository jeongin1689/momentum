const clock = document.querySelector(".js-clock .clock__text");

function getTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}:${second}`;
  clock.innerHTML = time;
  return;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

init();