// Initial setup
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const surprise = document.getElementById("surprise");

// Position offsets to track the button's position
let offsetX = 0;
let offsetY = 0;

// Maximum movement (in pixels) per click
const moveDistance = 300;

// Get container boundaries
function getContainerBounds() {
  const container = document.querySelector(".container");
  return container.getBoundingClientRect();
}

// Get current button boundaries
function getButtonBounds() {
  return noBtn.getBoundingClientRect();
}

// Function to move the "No" button by 300px
function moveNoButton() {
  const containerBounds = getContainerBounds();
  const buttonBounds = getButtonBounds();

  // Calculate the maximum possible X and Y positions (so the button doesn't go out of bounds)
  const maxX = containerBounds.width - buttonBounds.width;
  const maxY = containerBounds.height - buttonBounds.height;

  // Determine random direction (X or Y)
  const moveDirection = Math.random() < 0.5 ? 'X' : 'Y';

  // Move button in the random direction
  if (moveDirection === 'X') {
    offsetX += moveDistance;
    if (offsetX > maxX) offsetX = 0; // Reset position if it exceeds the container width
  } else {
    offsetY += moveDistance;
    if (offsetY > maxY) offsetY = 0; // Reset position if it exceeds the container height
  }

  // Apply new position with a smooth transition
  noBtn.style.transition = 'transform 0.3s ease'; // Smooth movement
  noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Function to continuously move the "No" button when clicked
function moveContinuously() {
  const interval = setInterval(moveNoButton, 300); // Move every 300ms

  // Stop the continuous movement after a certain period (optional)
  setTimeout(() => {
    clearInterval(interval); // Stop moving after 3 seconds (you can adjust the time)
  }, 3000); // Example: Stop after 3 seconds
}

// Event listener for the "No" button
noBtn.addEventListener("click", moveContinuously);

// Event listener for the "Yes" button
yesBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
});
