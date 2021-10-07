document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector("#cletus").addEventListener("click", dip);
  document.querySelector("#bobby-bob").addEventListener("input", shake);
  document.querySelector("#sally-mae").addEventListener("mouseenter", shuffle);
});

// restarting CSS animations in JS: https://css-tricks.com/restart-css-animation/
function shake() {
  this.classList.remove("jive");
  void this.offsetWidth;
  this.classList.add("jive");
}

function dip() {
  this.classList.remove("press");
  void this.offsetWidth;
  this.classList.add("press");
}

function shuffle() {
  let currentText = this.textContent;
  // from https://stackoverflow.com/a/60963711
  let shuffled = [...currentText].sort((_) => Math.random() - 0.5).join("");
  this.textContent = shuffled;
}
