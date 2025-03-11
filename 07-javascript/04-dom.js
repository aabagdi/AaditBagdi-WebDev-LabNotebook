// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputArea = document.querySelector(".output");

// add an event listener on the target element
copyButton.addEventListener("click", handleCopyClick);

// callback function to handle event
function handleCopyClick() {
  outputArea.textContent = userInput1.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.getElementById("userInput2");
const inputEventSection = document.getElementById("inputEventExample");

// Create a new output div for the second section
const outputArea2 = document.createElement("div");
outputArea2.className = "output";
inputEventSection.appendChild(outputArea2);

// add an event listener on the target element
userInput2.addEventListener("input", handleInput);

// callback function to handle event
function handleInput(event) {
  outputArea2.textContent = event.target.value;
}
