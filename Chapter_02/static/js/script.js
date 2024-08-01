// script.js

const dialogEle = document.getElementById("dialogEle");
const launchBtn = document.getElementById("launchDialog");
const formResult = document.getElementById("formResult");

launchBtn.addEventListener("click", () => dialogEle.showModal());

dialogEle.addEventListener("close", () => {
  formResult.textContent = dialogEle.returnValue;
});

