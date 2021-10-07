let RAINBOW = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

document.addEventListener("DOMContentLoaded", (e) => {
  // we'll add some listeners just to remind us about the bubble

  // let's listen for click events...
  document.querySelector("html").addEventListener("click", logit);
  document.querySelector("body").addEventListener("click", logit);
  document.querySelector("#outer-pen").addEventListener("click", logit);
  document.querySelector("#ma").addEventListener("click", logit);

  // ...and input events...
  document.querySelector("html").addEventListener("input", logit);
  document.querySelector("body").addEventListener("input", logit);
  document.querySelector("#outer-pen").addEventListener("input", logit);
  document.querySelector("#ma").addEventListener("input", logit);

  // ... and even some keyboard events
  document.querySelector("html").addEventListener("keydown", logit);
  document.querySelector("body").addEventListener("keydown", logit);
  document.querySelector("#outer-pen").addEventListener("keydown", logit);
  document.querySelector("#ma").addEventListener("keydown", logit);

  // now let's add listeners to the kids
  document.querySelector("#cletus").addEventListener("click", dip);
  document.querySelector("#bobby-bob").addEventListener("input", shake);
  document.querySelector("#sally-mae").addEventListener("mouseenter", shuffle);

  // uncomment this one eventually
  document.querySelector("#ma").addEventListener("mouseenter", changeColor);
});

function logit(e) {
  console.log(
    `${
      e.target.nodeName
    }#${e.target.id.toUpperCase()} received a ${e.type.toUpperCase()}. 
    ${
      e.currentTarget.nodeName
    }#${e.currentTarget.id.toUpperCase()} is REACTING to that.`
  );
}

function changeColor(e) {
  let [firstColor, ...rest] = RAINBOW;
  this.style.backgroundColor = firstColor;

  RAINBOW = [...rest, firstColor];
}

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
