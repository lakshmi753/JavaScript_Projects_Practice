const inputSetDateEl = document.getElementById("setDate");
const setTimerBtn = document.getElementById("setTimer");
const resetTimerBtn = document.getElementById("resetTimer");
const timerDisplayBoxes = document.querySelectorAll(".count");

function handleTimer(e) {
  const userDate = e.target.value;
  const endDate = new Date(userDate);
  console.log(endDate);

  const presentDate = new Date();
  console.log(presentDate);

  const timeDifference = endDate - presentDate;
  console.log(timeDifference);

  const timeDiffInSec = Math.floor(timeDifference / 1000);
  console.log(timeDiffInSec);

  // Number of days............
  const days = Math.floor(timeDiffInSec / 86400); // 1 day = 86400 secs.
  console.log(days);

  // Number of hours..........
  const remainingSecAfterDays = timeDiffInSec % 86400;
  console.log(remainingSecAfterDays);
  const hours = Math.floor(remainingSecAfterDays / 3600); // 1 hour = 3600 secs.
  console.log(hours);

  // Number of minutes..............
  const remainingsecAfterHours = remainingSecAfterDays % 3600;
  console.log(remainingsecAfterHours);
  const minutes = Math.floor(remainingsecAfterHours / 60); // 1 minute = 60 secs.
  console.log(minutes);

  // Number of seconds................
  const seconds = remainingsecAfterHours % 60;
  console.log(seconds);
}

inputSetDateEl.addEventListener("change", handleTimer);

//setInterval(handleTimer, 1000);
