let collapsible = document.querySelectorAll(".collapsible--expanded");

collapsible.forEach((e) =>
  e.addEventListener("click", () => e.classList.toggle("collapsible--expanded"))
);
