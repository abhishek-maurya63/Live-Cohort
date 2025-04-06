let img = document.querySelector("img");

let flag = 0;
img.addEventListener("dblclick", () => {
  setTimeout(() => {
    if (flag === 0) {
      img.style.scale = "pop 0.3s ease-in-out forwards";
      img.setAttribute("id", "liked");
      img.setAttribute("src", "liked heart.png");
      flag = 1;
    } else {
      img.setAttribute("src", "heart.png ");
      flag = 0;
    }
  }, 500);
});
