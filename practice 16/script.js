const smallCups = document.querySelectorAll(".cup-small");
console.log(smallCups);

const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const Remained = document.getElementById("Remained");

// updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => Highlight(idx));
});

function Highlight(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
      console.log(idx2);
      console.log(idx);
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  const tottlCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";

    percentage.style.height = `${(fullCups / tottlCups) * 330}px`;
    percentage.innerHTML = `%${(fullCups / tottlCups) * 100}`;
  }

  if (fullCups === tottlCups) {
    Remained.style.visibility = "hidden";
    Remained.style.height = 0;
  } else {
    Remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
