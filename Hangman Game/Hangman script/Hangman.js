const keyboardDiv = document.querySelector(".keyboard-box");
const guessingDiv = document.querySelector(".guess-item-box");
const incorrectText = document.querySelector(".incorrect b");
const hangmanImg = document.querySelector(".game-icon-pic");
const gameOverModal = document.querySelector(".game-over-overlay");
const playAgainBtn = document.querySelector(".play-again");

let currentWord;
let incorrectGuessCount;
const maxguess = 6;
let correctWord;

const resetGame = function () {
  // resseting all the variables ang UI elements...
  incorrectGuessCount = 0;
  correctWord = [];
  hangmanImg.src = `images/hangman-${incorrectGuessCount}.svg`;
  incorrectText.innerText = `${incorrectGuessCount}/${maxguess}`;
  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
  guessingDiv.innerHTML = currentWord
    .split("")
    .map(() => `<div class="guessed-letters"></div>`)
    .join("");
  gameOverModal.classList.remove("show");
};

const getRandomWord = function () {
  // getting a random word from the wordList..........
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  console.log(word, hint);
  document.querySelector(".hint b").innerText = hint;
  resetGame();
};

const gameOver = (isvictory) => {
  setTimeout(() => {
    // setting the gameoever modal content acc. to the game status...
    const modalText = isvictory
      ? "You found the word :"
      : "The correct word was :";
    gameOverModal.querySelector(".game-over-gif").src = `images/${
      isvictory ? "victory" : "lost"
    }.gif`;
    gameOverModal.querySelector(".game-over").innerText = `${
      isvictory ? "Congrats!" : "Game over!"
    }`;
    gameOverModal.querySelector(
      ".correct-word"
    ).innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameOverModal.classList.add("show");
  }, 300);
};

const initGame = function (button, clickedLetter) {
  // checking if clicked letter exists on the current word......
  if (currentWord.includes(clickedLetter)) {
    // displaying all the guessed letters..........
    [...currentWord].forEach((currentLetter, index) => {
      if (currentLetter === clickedLetter) {
        correctWord.push(currentLetter);
        guessingDiv.querySelectorAll("div")[index].innerText = currentLetter;
        guessingDiv.querySelectorAll("div")[index].classList.add("guessed");
      }
    });
  } else {
    // Updating the "incorrect counter" ang the "Hangman image"...
    incorrectGuessCount++;
    hangmanImg.src = `images/hangman-${incorrectGuessCount}.svg`;
  }

  incorrectText.innerText = `${incorrectGuessCount}/${maxguess}`;
  button.disabled = true;

  // Calling gameOver function for the following conditions...
  if (incorrectGuessCount === maxguess) return gameOver(false);
  if (correctWord.length === currentWord.length) return gameOver(true);
};

// Creating keyboard buttons ............
for (let i = 97; i <= 122; i++) {
  const keyboardButton = document.createElement("button");
  keyboardButton.innerText = String.fromCharCode(i);
  //   button.classList.add("alpha");
  keyboardDiv.appendChild(keyboardButton);

  // checking which button is pressed on the keyboard...........
  keyboardButton.addEventListener("click", (e) => {
    initGame(e.target, String.fromCharCode(i));
  });
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
