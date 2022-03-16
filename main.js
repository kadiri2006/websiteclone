let collapsible = document.querySelectorAll(".collapsible--expanded");
collapsible.forEach((e) =>
  e.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);




