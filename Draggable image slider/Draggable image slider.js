const imagesBox = document.querySelector(".images-box");
const firstImage = imagesBox.querySelectorAll("img")[0];
const sliderBtn = document.querySelectorAll(".slide-btn");

let isDragging = false; // by default "isDraggging" will be "false".
let prevPageX, prevScrollLeft;
let firstImgWidth = firstImage.clientWidth + 10; // getting the width of "first image".

// Sliding images using "slider button"...
sliderBtn.forEach((button) => {
  button.addEventListener("click", () => {
    imagesBox.scrollLeft +=
      button.id === "prev-btn" ? -firstImgWidth : firstImgWidth;
  });
});

const startDragging = function (e) {
  // "isDraggging" is only "ture" if the mouse button is clicked.
  isDragging = true;

  // Updating variable values on "mouseDown event"...
  prevPageX = e.pageX;
  prevScrollLeft = imagesBox.scrollLeft;
};

const dragging = function (e) {
  // "pageX" property returns the document relative "X coordinates" i.e
  // (horizontal) of the mouse pointer when a mouse event occurs.

  if (!isDragging) return;

  e.preventDefault();

  imagesBox.classList.add("dragging");

  // Scrolling images to left acc. to mouse pointer...

  // "scrollLeft" returns the no. of pixel an element's content is scrolled horizontally.
  let positionDiff = e.pageX - prevPageX;
  imagesBox.scrollLeft = prevScrollLeft - positionDiff;
};

const stopDragging = function () {
  // this will stop the images from dragging when the mouse button is not clicked.
  isDragging = false;

  imagesBox.classList.remove("dragging");
};

imagesBox.addEventListener("mousedown", startDragging);
imagesBox.addEventListener("mousemove", dragging);
imagesBox.addEventListener("mouseup", stopDragging);
