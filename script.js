// Select the display and button elements
const counterDisplay = document.getElementById("counterDisplay");
const incrementBtn = document.getElementById("incrementBtn");

// Initialize counter
let counter = 0;

// Increment counter and update the display
incrementBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
