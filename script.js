const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const surprise = document.getElementById("surprise");

// Function to move the "No" button randomly, far from the click area
function moveNoButton(event) {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - noBtnRect.width;
  const maxY = containerRect.height - noBtnRect.height;

  // Get the mouse or touch position to calculate the farthest point from the click
  const clientX = event.clientX || event.touches[0].clientX;
  const clientY = event.clientY || event.touches[0].clientY;

  // Move the "No" button far from the click position
  const randomX = clientX + Math.random() * maxX / 2 - maxX / 4;  // Randomly shift away from the click position
  const randomY = clientY + Math.random() * maxY / 2 - maxY / 4;

  // Ensure the button stays within the container bounds
  const boundedX = Math.min(Math.max(randomX, 0), maxX);
  const boundedY = Math.min(Math.max(randomY, 0), maxY);

  noBtn.style.transform = `translate(${boundedX}px, ${boundedY}px)`;
}

// Add hover and touchstart events for the "No" button
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// Reveal the surprise message when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
});
