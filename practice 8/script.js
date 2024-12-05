const lebles = document.querySelectorAll(".from-control label");

lebles.forEach((leble) => {
  console.log(leble.innerText);
  // console.log(leble.textContent);
  leble.innerHTML = leble.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
// console.log(lebles[0].textContent);

let name = "nothing";
console.log(name.split(""));
