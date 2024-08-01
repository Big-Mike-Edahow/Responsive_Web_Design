// script.js

const btn = document.querySelector("button");
const root = document.documentElement;

btn.addEventListener("click", e => {
  root.classList.toggle("amended");
});
