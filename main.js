let collapsible = document.getElementsByClassName("collapsible--expanded")[0];
collapsible.addEventListener("click", () => {
  collapsible.classList.toggle("collapsible--expanded");
});
