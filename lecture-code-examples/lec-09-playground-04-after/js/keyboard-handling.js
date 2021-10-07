document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("keydown", function (e) {
    let keyPressed = e.key;
    if (keyPressed == "r") {
      document.querySelector("#ma").replaceChildren();
    } else if (keyPressed == "a") {
      const child = document.createElement("div");
      child.textContent = "Ellie Mae";
      child.classList.add("box");
      document.querySelector("#ma").prepend(child);
    }
  });
});
