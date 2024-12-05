const ps5 = document.querySelector(".ps5");
const xbox = document.querySelector(".xbox");
const contanar = document.querySelector(".contanar");

ps5.addEventListener("mouseenter", function () {
  contanar.classList.add("hover-ps5");
  contanar.classList.remove("hover-xbox");
});
xbox.addEventListener("mouseenter", function () {
  contanar.classList.add("hover-xbox");
  contanar.classList.remove("hover-ps5");
});
