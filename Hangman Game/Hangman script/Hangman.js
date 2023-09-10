const keyboardDiv = document.querySelector(".keyboard-box");
const guessingDiv = document.querySelector(".guess-item-box");

let currentWord;

const getRandomWord = function () {
  // getting a random word from the wordList..........
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  console.log(word, hint);
  document.querySelector(".hint b").innerText = hint;
  guessingDiv.innerHTML = word
    .split("")
    .map(() => `<div class="guessed-letters"></div>`)
    .join("");
};

const initGame = function (button, clickedLetter) {
  // checking if clicked letter exists on the current word......
  if (currentWord.includes(clickedLetter)) {
    // displaying all the guessed letters..........
    [...currentWord].forEach((currentLetter, index) => {
      if (currentLetter === clickedLetter) {
        guessingDiv.querySelectorAll("div")[index].innerText = currentLetter;
        guessingDiv.querySelectorAll("div")[index].classList.add("guessed");
      }
    });
  }
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
