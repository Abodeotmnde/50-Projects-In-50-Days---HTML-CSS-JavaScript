const open = document.getElementById("open");

const close = document.getElementById("close");
const containar = document.querySelector(".containar");

open.addEventListener("click", function () {
  containar.classList.add("show-nav");
});

close.addEventListener("click", () => containar.classList.remove("show-nav"));
