const section = document.querySelector("section");
const icons = document.querySelector(".icons");

icons.addEventListener("click", () => {
  section.classList.toggle("dark-mode");
});
