const NAMES = JSON.parse(NAMES_AS_JSON);

document.addEventListener("DOMContentLoaded", function () {
  const ma = document.querySelector("#ma");

  ma.addEventListener("click", function (e) {
    if (e.target.matches("#ma > div")) {
      e.target.classList.toggle("tagged");
      e.target.classList.toggle("jive");
    }
  });

  for (const name of NAMES) {
    ma.appendChild(childFrom(name));
  }

  function childFrom(obj) {
    const child = document.createElement("div");

    child.textContent = obj.name;

    child.classList.add("box");

    return child;
  }
});
