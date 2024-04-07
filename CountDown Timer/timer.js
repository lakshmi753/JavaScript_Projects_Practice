const inputSetDateEl = document.getElementById("setDate");

inputSetDateEl.addEventListener("change", function (e) {
  //console.log(e.target.value);
  const userDate = e.target.value;
  const endDate = new Date(userDate);
  console.log(endDate);
  // console.log(Date.now(userDate));
  const presentDate = new Date();
  console.log(presentDate);
  //console.log(Date.now(presentDate));
  console.log(endDate - presentDate);

  /* const usersDate = e.target.value;
  const endingDate = Date.now(usersDate);
  console.log(endingDate);

  const presentDate = new Date();
  const nowDate = Date.now(presentDate);
  console.log(nowDate);

  console.log(endingDate - nowDate);*/
});
