const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("Close");

bar.addEventListener("click", function () {
  nav.classList.add("active");
});

Close.addEventListener("click", function () {
  nav.classList.remove("active");
});
