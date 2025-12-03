const btn = document.querySelector(".button");
const field = document.querySelector(".text-field");

const onClick = () => {
    field.classList.toggle("expanded");
  };

const onLoad = () => {
  btn.addEventListener("click", onClick);
};

const onBeforeUnload = () => {
  btn.removeEventListener("click", onClick);
  document.removeEventListener("DOMContentLoaded", onLoad);
}

document.addEventListener("DOMContentLoaded", onLoad);
document.addEventListener("beforeunload", onBeforeUnload);
