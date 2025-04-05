let body = document.querySelector("body");
let btn = document.querySelector("button");

let images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png"];

btn.addEventListener("click", () => {
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    `${images[Math.floor(Math.random() * images.length)]}`
  );
  img.style.height = "200px";
  img.style.position = "absolute";
  img.style.right = `${Math.floor(Math.random() * 100)}%`;
  img.style.top = `${Math.floor(Math.random() * 70)}%`;

  body.appendChild(img);
});
