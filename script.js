// Initial setup
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const surprise = document.getElementById("surprise");

// Function to move the "No" button randomly
function moveNoButton() {
  const container = document.querySelector(".container");
  const containerBounds = container.getBoundingClientRect();
  const buttonBounds = noBtn.getBoundingClientRect();

  // Random positions ensuring the button doesn't go out of bounds
  const maxX = containerBounds.width - buttonBounds.width;
  const maxY = containerBounds.height - buttonBounds.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Add event listeners
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  startConfetti(); // Optional confetti effect
});

// Confetti effect (optional enhancement)
function startConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.style.position = "absolute";
  confettiContainer.style.top = "0";
  confettiContainer.style.left = "0";
  confettiContainer.style.width = "100%";
  confettiContainer.style.height = "100%";
  confettiContainer.style.pointerEvents = "none";
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor =
      `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}%`;
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => confettiContainer.remove(), 5000);
}
