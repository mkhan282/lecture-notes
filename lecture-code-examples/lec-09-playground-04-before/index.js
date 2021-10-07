document.addEventListener("DOMContentLoaded", function () {
  const ma = document.querySelector("#ma");

  const child = document.createElement("div");
  child.textContent = "Ellie Mae";
  child.classList.add("box");

  ma.append(child);

  child.addEventListener("click", function () {
    child.classList.toggle("tagged");
    child.classList.toggle("jive");
  });
});
