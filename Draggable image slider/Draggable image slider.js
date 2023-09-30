const imagesBox = document.querySelector(".images-box");
const firstImage = imagesBox.querySelectorAll("img")[0];
const sliderBtn = document.querySelectorAll(".slide-btn");

let isDragging = false; // by default "isDraggging" will be "false".
let prevPageX, prevScrollLeft, positionDiff;

const hideSliderBtn = function () {
  let maxScrollWidth = imagesBox.scrollWidth - imagesBox.clientWidth; // getting the max. scrollable width.
  sliderBtn[0].style.display = imagesBox.scrollLeft === 0 ? "none" : "block";
  sliderBtn[1].style.display =
    imagesBox.scrollLeft === maxScrollWidth ? "none" : "block";
};

// Sliding images using "slider button"...
sliderBtn.forEach((button) => {
  button.addEventListener("click", () => {
    let firstImgWidth = firstImage.clientWidth + 10; // getting the width of "first image".
    imagesBox.scrollLeft +=
      button.id === "prev-btn" ? -firstImgWidth : firstImgWidth;

    // Calling "hideSliderbtn function"...
    setTimeout(() => hideSliderBtn(), 60);
  });
});

const autoSlide = function () {
  // if there is no image left to scroll then return froom here...
  if (imagesBox.scrollLeft === imagesBox.scrollWidth - imagesBox.clientWidth)
    return;

  positionDiff = Math.abs(positionDiff); // making "possitionDiff" a positive value (in case of -ve ones).

  let firstImgWidth = firstImage.clientWidth + 10;
  // getting value that is required to add or substract from imagesBox left to take the img to the centre.
  let valueDiff = firstImgWidth - positionDiff;

  // if "current scrollLeft value" is greater than than the "prev scrollLeft value",
  // then the user is sliding to the "right" else user is sliding to the "left".

  // when user is scrolling to the "right"...
  if (imagesBox.scrollLeft > prevScrollLeft) {
    return (imagesBox.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valueDiff : -positionDiff);
    // if "positionDiff" is greater than 33% of imageWidth then add "valueDiff",
    // to scrollLeft else reduce "positionDiff" from it.
  }

  // when user is scrolling to the "left"...
  imagesBox.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valueDiff : -positionDiff;
};

// "mouseDown event" related function...
const startDragging = function (e) {
  // "isDraggging" is only "ture" if the mouse button is clicked.
  isDragging = true;

  // Updating variable values on "mouseDown event"...

  // "pageX" property returns the document relative "X coordinates" i.e
  // (horizontal) of the mouse pointer when a mouse event occurs.
  prevPageX = e.pageX || e.touches[0].pageX; // 0 at the starting...
  // e.pageX run on desktop devices and e.touches[0].pageX runs on touch devices.

  // "scrollLeft" sets or returns the no. of pixel an element's content is scrolled horizontally.
  prevScrollLeft = imagesBox.scrollLeft;
};

// "mouseMove event" related function...
const dragging = function (e) {
  if (!isDragging) return;

  e.preventDefault();

  imagesBox.classList.add("dragging");

  // Scrolling images to left acc. to mouse pointer...
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX; // here "e.pageX" gets the dragged value as the user clicked at some point.
  // "positionDiff" is basically the "dragged value" i.e (final pos. - initial pos.).
  imagesBox.scrollLeft = prevScrollLeft - positionDiff;

  hideSliderBtn();
};

const stopDragging = function () {
  // this will stop the images from dragging when the mouse button is not clicked.
  isDragging = false;

  imagesBox.classList.remove("dragging");

  autoSlide();
};

imagesBox.addEventListener("mousedown", startDragging);
imagesBox.addEventListener("touchstart", startDragging);

imagesBox.addEventListener("mousemove", dragging);
imagesBox.addEventListener("touchmove", dragging);

imagesBox.addEventListener("mouseup", stopDragging);
imagesBox.addEventListener("touchend", stopDragging);
