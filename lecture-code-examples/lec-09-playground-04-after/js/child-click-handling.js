document.addEventListener("DOMContentLoaded", function () {
  const ma = document.querySelector("#ma");

  const child = document.createElement("div");
  child.textContent = "Ellie Mae";
  child.classList.add("box");

  ma.append(child);

  ma.addEventListener("click", function (e) {
    if (e.target.nodeName == "DIV") {
      e.target.classList.toggle("tagged");
      e.target.classList.toggle("jive");
    }
  });
});
