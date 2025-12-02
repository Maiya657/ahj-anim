const btn = document.querySelector(".button");
const field = document.querySelector(".text-field");

btn.addEventListener("click", () => {
  field.classList.toggle("expanded");
});
