const nav = document.getElementById("nav");
console.log(nav);

const toggle = document.getElementById("toggle");
console.log(toggle);

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
