const btnslider = function () {
  //   console.log("hello");
  const sliderBtn = document.querySelectorAll(".slide-btn");
  const imagesBox = document.querySelector(".images-box");

  // "scrollWidth" returns the width of an element, including content not
  // visible on the screen due to overflow.
  const maxScrollLeft = imagesBox.scrollWidth - imagesBox.clientWidth;
  // "clientWidth" returns the viewable width of the element.

  // Sliding images using "slide-buttons".............
  sliderBtn.forEach((button) => {
    button.addEventListener("click", () => {
      //   console.log(button);
      const slideDirection = button.id === "prev-btn" ? -1 : 1;
      const slideAmount = imagesBox.clientWidth * slideDirection;
      imagesBox.scrollBy({ left: slideAmount, behavior: "smooth" });
    });
  });

  // Removing and Displaying "slider-buttons" according to the position....
  const handleSliderBtn = function () {
    // "scrollLeft" returns the number of pixels an elements content is scrolled "horizontally".
    sliderBtn[0].style.display = imagesBox.scrollLeft <= 0 ? "none" : "block";
    sliderBtn[1].style.display =
      imagesBox.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  imagesBox.addEventListener("scroll", handleSliderBtn);
};

window.addEventListener("load", btnslider);
