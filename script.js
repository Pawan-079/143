const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const surprise = document.getElementById("surprise");

// Make "No" button move when hovered over
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Show surprise when "Yes" button is clicked
yesBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
});
