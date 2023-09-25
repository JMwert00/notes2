// index.js

// Function to display a welcome message
function displayWelcomeMessage() {
  const welcomeMessage = "Welcome to My Website!";
  alert(welcomeMessage);
}

// Add an event listener to the h1 element to trigger the welcome message
document.addEventListener("DOMContentLoaded", function () {
  const h1Element = document.querySelector("h1");
  h1Element.addEventListener("click", displayWelcomeMessage);
});
