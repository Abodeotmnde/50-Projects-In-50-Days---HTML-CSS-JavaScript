const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => (jokeEl.innerHTML = data.joke));
  console.log(fetch("https://icanhazdadjoke.com", config).then((a) => a.json));
}
