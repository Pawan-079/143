const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const surprise = document.getElementById("surprise");

// Function to move the "No" button randomly
function moveNoButton() {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - noBtnRect.width;
  const maxY = containerRect.height - noBtnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Add hover and touchstart events for the "No" button
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// Reveal the surprise message when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
});
