document
  .querySelectorAll(".nav")
  .addEventListener("click", (event) => event.toggle.closest(".nav_link"));

document.querySelector("#home_link").addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({top:0})
});
