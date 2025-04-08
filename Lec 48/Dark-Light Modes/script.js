let body = document.querySelector("body");
let btn = document.querySelector("button");


let theme = localStorage.getItem("theme");
if (theme) {
  body.classList.add(theme);
} else {
  body.classList.add("light");
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
