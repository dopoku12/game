`use strict`;
/*console.log(document.querySelector(`.message`).textContent);
document.querySelector(".message").textContent = "Correct num";
console.log(document.querySelector(".message").textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
// document.querySelector(".number").textContent = number;
const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = number;
document.querySelector(`.check`).addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number...?`;
    document.body.style.backgroundColor = "gray";
  } else if (guess == number) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.body.style.backgroundColor = "green";
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      document.body.style.backgroundColor = "red";
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(".message").textContent = "HAHAHA you lost !";
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      document.body.style.backgroundColor = "red";
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(".message").textContent = "HAHAHA you lost!";
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
// document.querySelector(".btn again").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   if ((guess = true)) {
//     document.querySelector(".highscore").textContent;
//     document.querySelector(".message").textContent;
//   }
// });
