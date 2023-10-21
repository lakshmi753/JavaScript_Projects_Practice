// Selecting "image container" and the "heart element" ......
const imageContainer = document.querySelector(".container");
const heartIcon = document.querySelector(".heart");

// Attaching "double-click event" to the image-container......
imageContainer.addEventListener("dblclick", function (e) {
  heartIcon.classList.add("active");
});

// Removing "active class" after 1 second.....
setTimeout(() => {
  heartIcon.classList.remove("active");
}, 1000);
