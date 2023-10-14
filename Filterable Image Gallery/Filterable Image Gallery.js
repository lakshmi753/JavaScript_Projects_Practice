const filterBtn = document.querySelectorAll(".filter-btn button");
const filterImageInfoBox = document.querySelectorAll(
  ".image-info-container .image-info-box"
);

// Handler function.............
const handleImageInfoBox = function (e) {
  // Adding the "active class" to the selected button...
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  // Selecting the "image-info-box"...
  filterImageInfoBox.forEach((box) => {
    box.classList.add("hide");

    // Conditionally applying or removiing the "hide class"...
    if (
      box.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      box.classList.remove("hide");
    }
  });
};

// Attaching "event handler" to all the buttons...
filterBtn.forEach((btn) => btn.addEventListener("click", handleImageInfoBox));
