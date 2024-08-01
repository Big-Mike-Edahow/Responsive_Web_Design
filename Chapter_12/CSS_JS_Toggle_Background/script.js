// script.js

var root = document.documentElement;
var btn = document.getElementById("colorToggle");

btn.addEventListener("click", e => {
  root.style.setProperty(
    "--background",
    getComputedStyle(root).getPropertyValue("--background") === "#333"
      ? "#eee"
      : "#333"
  );
  root.style.setProperty(
    "--foreground",
    getComputedStyle(root).getPropertyValue("--foreground") === "#eee"
      ? "#333"
      : "#eee"
  );
});
