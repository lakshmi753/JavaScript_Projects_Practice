const btnslider = function () {
  //   console.log("hello");
  const sliderBtn = document.querySelectorAll(".slide-btn");
  const imagesBox = document.querySelector(".images-box");
  const scrollbox = document.querySelector(".scrollbar-track-box");
  const scrollBar = scrollbox.querySelector(".scrollbar");

  // "scrollWidth" returns the width of an element, including content not
  // visible on the screen due to overflow.
  const maxScrollLeft = imagesBox.scrollWidth - imagesBox.clientWidth;
  // "clientWidth" returns the viewable width of the element.

  // Handling "Scroll-bar" drag...........
  scrollBar.addEventListener("mousedown", (e) => {
    const startX = e.clientX; // "clientX" returns the horizontal mouse pointer coordinates.
    const scrollPos = scrollBar.offsetLeft; // "offsetLeft" returns the left position (in pixels) relative to the parent.

    // Updating "scroll position" on mouse move..........
    const handleMouseMove = function (e) {
      const deltaX = e.clientX - startX;
      const newScrollPos = scrollPos + deltaX;

      const maxScrollPos =
        scrollbox.getBoundingClientRect().width - scrollBar.offsetWidth;

      const boundingPos = Math.max(0, Math.min(maxScrollPos, newScrollPos));
      const scrollImgPos = (boundingPos / maxScrollPos) * maxScrollLeft;

      scrollBar.style.left = `${boundingPos}px`;
      imagesBox.scrollLeft = scrollImgPos;
    };

    // Removing "eventListeners" on "mouse up"...........
    const handleMouseUp = function () {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Add eventlistener for "drag" interaction........
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

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

  // Updating "scroll-bar" position acc. to the images position...........
  const updateScrollBarPosition = function () {
    const scrollPosition = imagesBox.scrollLeft;
    const scrollBarPosition =
      (scrollPosition / maxScrollLeft) *
      (scrollbox.clientWidth - scrollBar.offsetWidth);

    scrollBar.style.left = `${scrollBarPosition}px`;
  };

  imagesBox.addEventListener("scroll", () => {
    handleSliderBtn();
    updateScrollBarPosition();
  });
};

window.addEventListener("load", btnslider);
