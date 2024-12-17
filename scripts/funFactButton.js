const funFacts = [
  "coding is magic so im pretty much a witch",
  "debugging late at night feels like solving a mystery with invisible clues",
  "you can never have too many sparkles",
  "i started coding when i was 9 because i didnt have anything else to do during lunch breaks",
  "my favorite game is undertale because of how nice and sweet all the characters are (even the ones like undyne who seem mean)",
  "gregg rulz",
  "my dad made me play basketball in 5th grade but i was so bad one time the ball bounced off my head when someone passed to me",
  "i had more friends at my old school but then they all stopped using skype so i dont talk to them anymore",
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
