const slider = document.querySelector(".slider");
const slideContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slideWidth = slides[0].clientWidth;
let slidePosition = 0;

// Set the initial position of the slider
slideContainer.style.transform = `translateX(-${slidePosition}px)`;

// Function to move the slider to the left
const moveLeft = () => {
  slidePosition += slideWidth;
  if (slidePosition > 0) {
    slidePosition = -(slides.length - 3) * slideWidth;
  }
  slideContainer.style.transform = `translateX(${slidePosition}px)`;
};

// Function to move the slider to the right
const moveRight = () => {
  slidePosition -= slideWidth;
  if (slidePosition < -(slides.length - 3) * slideWidth) {
    slidePosition = 0;
  }
  slideContainer.style.transform = `translateX(${slidePosition}px)`;
};

// Event listeners for the previous and next buttons
prevBtn.addEventListener("click", moveLeft);
nextBtn.addEventListener("click", moveRight);
