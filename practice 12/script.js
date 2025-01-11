const toggles = document.querySelectorAll(".fag-toggle");
console.log(toggles);

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
