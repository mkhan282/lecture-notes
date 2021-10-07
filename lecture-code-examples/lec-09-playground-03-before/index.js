const NAMES = JSON.parse(NAMES_AS_JSON);

document.addEventListener("DOMContentLoaded", function () {
  const ma = document.querySelector("#ma");

  for (const name of NAMES) {
    ma.appendChild(childFrom(name));
  }

  function childFrom(obj) {
    const child = document.createElement("div");

    child.textContent = obj.name;

    child.classList.add("box");

    child.addEventListener("click", function () {
      child.classList.toggle("tagged");
      child.classList.toggle("jive");
    });

    return child;
  }
});
