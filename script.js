const hamburger = document.querySelector(".hamburger1");
const menu = document.querySelector(".menu");

let counter = 0;

hamburger.addEventListener("click", function () {
  if (counter % 2 == 0) {
    menu.style.top = "50px";
    counter++;
  } else {
    menu.style.top = "-500px";
    counter++;
  }
});
