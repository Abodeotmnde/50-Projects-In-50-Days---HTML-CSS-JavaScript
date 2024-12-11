const contanar = document.querySelector(".conrainar");

window.addEventListener("keydown", (event) => {
  contanar.innerHTML = `
      <div class="key">
        ${event.key === " " ? "Space" : event.key}
        <small>event.key</small>
      </div>

      <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
      </div>

      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>
    
    `;
});
