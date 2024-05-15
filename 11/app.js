var userInput = prompt("Enter a word")

// Split the input string into words
var words = userInput.split(" ");

// Convert each word to title case
for (var i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    var firstLetter = words[i].charAt(0).toUpperCase();
    // Concatenate the first letter with the rest of the word (starting from index 1)
    var restOfWord = words[i].slice(1).toLowerCase();
    // Replace the original word with the title case version
    words[i] = firstLetter + restOfWord;
}

// Join the words back into a single string
var titleCaseString = words.join(" ");

// Display the result
document.getElementById("result").innerHTML = "Title Case: " + titleCaseString;

