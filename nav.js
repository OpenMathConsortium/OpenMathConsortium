// Opens and closes the tab menu on narrow screens.
const button = document.querySelector(".menu-button");
const nav = document.getElementById("site-nav");

button.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", open);
});
