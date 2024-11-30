const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const surprise = document.getElementById("surprise");

// Add click event to Yes button
yesBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
});

// Move the No button randomly on hover or touch
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

// Detect hover (for desktops/laptops)
noBtn.addEventListener("mouseover", moveNoButton);

// Detect touch (for phones/tablets)
noBtn.addEventListener("touchstart", moveNoButton);
