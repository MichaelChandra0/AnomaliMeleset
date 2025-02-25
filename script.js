document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger1");
  const menu = document.querySelector(".menu");

  document.querySelector(".hamburger1").onclick = () => {
    menu.classList.toggle("active");
  };

  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("active");
    }
  });

  window.addEventListener("resize", function () {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
  });
});
