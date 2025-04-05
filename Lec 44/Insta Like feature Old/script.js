let img = document.querySelector("img");

img.addEventListener("dblclick", () => {
  setTimeout(() => {
    img.style.scale = "pop 0.3s ease-in-out forwards";
    let flag = 1;
    if (flag == 1) {
      img.setAttribute("src", "liked heart.png");
      flag = 0;
    } else {
      img.setAttribute("src", "heart.png");
      flag = 1;
    }
  }, 500);
});
