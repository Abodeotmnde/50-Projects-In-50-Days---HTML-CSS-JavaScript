const siction = document.querySelectorAll(".siction");
// console.log(siction);

siction.forEach((e) => {
  e.addEventListener("click", () => {
    reomveActiveClasses();
    e.classList.add("active");
  });
});

function reomveActiveClasses() {
  siction.forEach((siction) => {
    siction.classList.remove("active");
  });
}
