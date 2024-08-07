// script.js

// Get the ball from the DOM.
const ball = document.querySelector(".ball");
// Get a random number between the Min and the Max.
const getRand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Set the values into the custom property.
const setCoords = () => {
  ball.style.setProperty("--x", `${getRand(0, 100)}%`);
  ball.style.setProperty("--y", `${getRand(0, 100)}%`);
};
setCoords();
// Every so often, set the position of the ball.
setInterval(() => {
  setCoords();
}, getRand(1000, 3000));
