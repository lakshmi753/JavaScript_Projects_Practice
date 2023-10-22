// Selecting "image container" and the "heart element" ......
const imageContainer = document.querySelector(".container");
const heartIcon = document.querySelector(".heart");

// Attaching "double-click event" to the image-container......
imageContainer.addEventListener("dblclick", function (e) {
  // Calculating the "X and Y" position of the "double click event"
  let xValue = e.clientX - e.target.offsetLeft; // console.log(e) gives the "mouse click event object".
  let yValue = e.clientY - e.target.offsetTop;

  // console.log(xValue, yValue)  gives the "X and Y" position of the "double click".

  // Setting the position of the "heart element" acc. to the "double click position"...
  heartIcon.style.left = `${xValue}px`;
  heartIcon.style.top = `${yValue}px`;

  // Adding the "active" class .........
  heartIcon.classList.add("active");

  // Removing "active class" after 1 second.....
  setTimeout(() => {
    heartIcon.classList.remove("active");
  }, 1000);
});

// NOTE : --

// 1. clientX = this property returns the "horizontal client coordinates" of the mouse pointer, when the "mouse event" occurs (relative to window).
// 2. clientY = this property returns the "vertical client coordinates" of the mouse pointer, when the "mouse event" occurs (relative to window).
// 3. offsetLeft = this property returns the left position (in pixel) of the element (relative to the parent).
// 4. offsetTop = this property returns the top position (in pixel) of the element (relative to the parent).
