const boxes = document.querySelectorAll(".box");
console.log(boxes);
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  // window.innerHeight;
  const tringgerBottom = window.innerHeight;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < tringgerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
  console.log(tringgerBottom);
  console.log(boxes);
}
