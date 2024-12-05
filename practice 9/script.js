const sounds = ["first", "second", "three", "four", "fife", "last"];

console.log(sounds);

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  document.getElementById("buttons").appendChild(btn);

  btn.addEventListener("click", () => {
    stopSound();

    document.getElementById(sound).play();
  });
  function stopSound() {
    document.querySelectorAll("audio").forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  }
});
