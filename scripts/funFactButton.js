const funFacts = [
  "coding is magic so im pretty much a witch",
  "debugging late at night feels like solving a mystery with invisible clues",
  "you can never have too many sparkles",
];

// Function to display a random fun fact
function displayRandomFunFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const funFactElement = document.getElementById("funFactDisplay");
  funFactElement.textContent = funFacts[randomIndex];
}

// Add event listener to the button
document
  .getElementById("randomFactButton")
  .addEventListener("click", displayRandomFunFact);
