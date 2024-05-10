const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const maxScore = 100;

// Initial conditions .....................
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
const totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Switching players................
function switchingPlayers() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");

  activePlayer = activePlayer === 0 ? 1 : 0;
}

// Button roll ...........................
btnRoll.addEventListener("click", function () {
  const diceNum = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    currentScore += diceNum;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchingPlayers();
  }
});

// Button hold....................
btnHold.addEventListener("click", function () {
  totalScore[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[activePlayer];

  // Checking winning conditions...........
  if (totalScore[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");

    diceEl.classList.add("hidden");

    btnRoll.classList.add("hidden");
    btnHold.classList.add("hidden");
  }

  switchingPlayers();
});

// Button play again...............................
btnNew.addEventListener("click", function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");

  btnRoll.classList.remove("hidden");
  btnHold.classList.remove("hidden");

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  totalScore[0] = totalScore[0] * 0;
  totalScore[1] = totalScore[1] * 0;
  console.log(totalScore);
  currentScore = 0;
  activePlayer = 0;
});
