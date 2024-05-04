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

    document.querySelector("body").style.backgroundColor = " #60b347";
    secretNoEl.style.width = "30rem";
  } else if (guessedNum < secretNo) {
    if (score < 2) {
      msgEl.textContent = "😵‍💫 Game over...";
      scoreEl.textContent = 0;
    } else {
      msgEl.textContent = "📉 Too low...";

      score--;
      scoreEl.textContent = score;
    }
  } else if (guessedNum > secretNo) {
    if (score < 2) {
      msgEl.textContent = "😵‍💫 Game over...";
      scoreEl.textContent = 0;
    } else {
      msgEl.textContent = "📈 Too high...";

      score--;
      scoreEl.textContent = score;
    }
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
  document.querySelector("body").style.backgroundColor = " #222";
  secretNoEl.style.width = "15rem";
}

checkBtn.addEventListener("click", handleGuessNum);

againBtn.addEventListener("click", handlePlayAgain);

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/* -> let score = 20;
   -> This variable here can also be called as "state-variable" because this "score"
      is part of the so-called application-state, which is basically all the data
      relavent to the application.
   -> We could also have stored "score" basically in the DOM and to do that we 
      could have always just read the value of "score" from the DOM, then we 
      could decrease that value and then write it back to the DOM.
   -> But then we would not gonna have that value in our code, so, essentially
      our application would have no way of knowing that "score" at all points.
   -> So, it's always good to keep a variable which actually holds the data in 
      our code and not just rely on DOM to hold our data.    */
