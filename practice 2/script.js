const circales = document.querySelectorAll(".circale");
const progress = document.getElementById("progress");
// console.log(circales);

const next = document.getElementById("next");
const prev = document.getElementById("prev");

// console.log(prev);
let currentActive = 1;

next.addEventListener("click", function () {
  currentActive++;

  if (currentActive > circales.length) {
    currentActive = circales.length;
  }

  update();
});

prev.addEventListener("click", function () {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circales.forEach((circales, idx) => {
    if (idx < currentActive) {
      circales.classList.add("active");
    } else {
      circales.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circales.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circales.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
