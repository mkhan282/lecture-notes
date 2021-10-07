document.addEventListener("DOMContentLoaded", (e) => {
  // now let's add listeners to the kids
  document.querySelector("#ma").addEventListener("click", dip);
  document.querySelector("#ma").addEventListener("input", function (e) {
    if (e.target.id == "bobby-bob") {
      e.target.classList.remove("jive");
      void e.target.offsetWidth;
      e.target.classList.add("jive");
    }
  });
  document.querySelector("#ma").addEventListener("mouseover", shuffle);
});

function dip(e) {
  if (e.target.id == "cletus") {
    e.target.classList.remove("press");
    void e.target.offsetWidth;
    e.target.classList.add("press");
  }
}

function shuffle(e) {
  if (e.target.id == "sally-mae") {
    let currentText = e.target.textContent;
    // from https://stackoverflow.com/a/60963711
    let shuffled = [...currentText].sort((_) => Math.random() - 0.5).join("");
    e.target.textContent = shuffled;
  }
}
