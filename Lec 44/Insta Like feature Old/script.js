let flag = 0;

const img = document.querySelector("img");

img.addEventListener("dblclick", () => {
  setTimeout(() => {
    if (flag === 0) {
      img.setAttribute("src", "liked heart.png");
      img.setAttribute("id", "liked");
      flag = 1;
    } else {
      img.setAttribute("src", "heart.png");
      img.setAttribute("id", "unliked");
      flag = 0;
    }
  }, 200); // reduced to 200ms for better UX
});
