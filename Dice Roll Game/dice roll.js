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
  /*if (activePlayer) {
    current1El.textContent = 0;
  } else {
    current0El.textContent = 0;
  }*/

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");

  activePlayer = activePlayer === 0 ? 1 : 0;
}

// Button roll ...........................
btnRoll.addEventListener("click", function () {
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  //console.log(diceNum);

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    /*if (activePlayer) {
      currentScore = currentScore + diceNum;
      current1El.textContent = currentScore;
    } else {
      currentScore = currentScore + diceNum;
      current0El.textContent = currentScore;
    }*/

    currentScore += diceNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchingPlayers();
  }
});

// Button hold....................
btnHold.addEventListener("click", function () {
  /*if (activePlayer) {
    totalScore[activePlayer] = totalScore[1] + currentScore;
    score1El.textContent = totalScore[activePlayer];
  } else {
    totalScore[activePlayer] = totalScore[0] + currentScore;
    score0El.textContent = totalScore[activePlayer];
  }*/

  totalScore[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[activePlayer];

  // Checking winning conditions...........
  if (totalScore[0] >= 100 || totalScore[1] >= 100) {
    activePlayer
      ? player1El.classList.add("player--winner")
      : player0El.classList.add("player--winner");
    diceEl.classList.add("hidden");
    btnRoll.disabled = true;
    btnHold.disabled = true;
  }

  switchingPlayers();
});

// Button play again...............................
btnNew.addEventListener("click", function () {
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  totalScore[0] * 0;
  totalScore[1] * 0;
  currentScore = 0;
  activePlayer = 0;
});
