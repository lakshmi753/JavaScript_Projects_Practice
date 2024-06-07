const inputSetDateEl = document.getElementById("setDate");
const setTimerBtn = document.getElementById("setTimer");
const resetTimerBtn = document.getElementById("resetTimer");
const timerDisplayBoxes = document.querySelectorAll(".count");

let id;

function displayTimer(days, hours, minutes, seconds) {
  timerDisplayBoxes[0].textContent = days;
  timerDisplayBoxes[1].textContent = hours;
  timerDisplayBoxes[2].textContent = minutes;
  timerDisplayBoxes[3].textContent = seconds;
}

function clacTimer(endDate) {
  let presentDate = new Date();

  const timeDifference = endDate - presentDate;

  if (timeDifference < 0) return;

  const timeDiffInSec = Math.floor(timeDifference / 1000);

  // Number of days............
  const days = Math.floor(timeDiffInSec / 86400); // 1 day = 86400 secs.

  // Number of hours..........
  const remainingSecAfterDays = timeDiffInSec % 86400;

  const hours = Math.floor(remainingSecAfterDays / 3600); // 1 hour = 3600 secs.

  // Number of minutes..............
  const remainingsecAfterHours = remainingSecAfterDays % 3600;

  const minutes = Math.floor(remainingsecAfterHours / 60); // 1 minute = 60 secs.

  // Number of seconds................
  const seconds = remainingsecAfterHours % 60;

  // Setting Timer ......................
  displayTimer(days, hours, minutes, seconds);
}

function handleTimer() {
  const userDate = inputSetDateEl.value;

  if (userDate === "") return;

  const endDate = new Date(userDate);
  console.log(endDate);

  clacTimer(endDate);

  id = setInterval(() => {
    clacTimer(endDate);
  }, 1000);
}

setTimerBtn.addEventListener("click", handleTimer);

// Starting timer..........................

// Resetting the timer ...............................................
function handleResetTimer() {
  clearInterval(id);

  inputSetDateEl.value = "";
  timerDisplayBoxes.forEach((el) => (el.textContent = 0));
}

resetTimerBtn.addEventListener("click", handleResetTimer);
