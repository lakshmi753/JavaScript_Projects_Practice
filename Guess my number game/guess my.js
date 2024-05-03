const msgEl = document.querySelector(".message");

const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

const guessNoEl = document.querySelector(".guess");
const secretNoEl = document.querySelector(".number");
//console.log(msg, score, highScore);

let score = 20;
let highScore = 0;
let secretNo = Math.ceil(Math.random() * 20);

function handleGuessNum() {
  const guessedNum = Number(guessNoEl.value);
  //console.log(guessNo);

  if (!guessedNum) {
    msgEl.textContent = "No number...";
  } else if (guessedNum === secretNo) {
    msgEl.textContent = "🎉 Correct Number";

    secretNoEl.textContent = secretNo;

    highScore = highScore < score ? score : highScore;
    highScoreEl.textContent = highScore;
  } else if (guessedNum < secretNo) {
    msgEl.textContent = "📉 Too low...";

    score--;
    scoreEl.textContent = score;
  } else if (guessedNum > secretNo) {
    msgEl.textContent = "📈 Too high...";

    score--;
    scoreEl.textContent = score;
  }
}

function handlePlayAgain() {
  msgEl.textContent = "Start guessing...";
  guessNoEl.value = "";
  score = 20;
  scoreEl.textContent = score;
  secretNoEl.textContent = "?";
  highScoreEl.textContent = highScore;
  secretNo = Math.ceil(Math.random() * 20);
}

checkBtn.addEventListener("click", handleGuessNum);

againBtn.addEventListener("click", handlePlayAgain);
