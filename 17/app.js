// Prompt the user to input a string
var userInput = prompt("Please enter a string:");

// Get the length of the user input
var inputLength = userInput.length;

// Check if the input is not empty
if (inputLength > 0) {
    // Get the last character of the input
    var lastCharacter = userInput.charAt(inputLength - 1);
    // Display the last character
    alert(`User Input: ${userInput} <br> The last character of the input is:  ${lastCharacter}`);
} else {
    // Display a message if the input is empty
    alert("No input provided!");
}




