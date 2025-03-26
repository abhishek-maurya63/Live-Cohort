let count = 0;
function score() {
  let icrBtn = document.querySelector("#icr");
  let counter = document.querySelector("h1");

  icrBtn.addEventListener("click", function () {
    count++;
    counter.innerText = count;
    if (count >= 0) {
      counter.style.color = "green";
    }
  });

  let dcrBtn = document.querySelector("#dcr");

  dcrBtn.addEventListener("click", function () {
    count--;
    if (count < 0) {
      counter.style.color = "red";
    }
    counter.innerText = count;
  });

  let reset = document.querySelector("#zero");

  reset.addEventListener("click", function () {
    count = 0;
    counter.innerText = count;
    if (count == 0) counter.style.color = "black";
  });
}

function showScore() {
  let scr = document.querySelector(".timer");
  scr.innerHTML = `<h1>YOUR SCORE : ${count}</h1>`;
}

function repeat() {
  let countDown = 10;
  setInterval(function () {
    if (countDown == -1) {
      showScore();
      let btn = document.querySelector(".btn");
      btn.innerHTML = " ";
      return;
    }

    let timerDisplay = document.querySelectorAll("h3");
    timerDisplay[1].innerText = countDown;
    countDown--;
  }, 1000);
}

repeat();
score();
