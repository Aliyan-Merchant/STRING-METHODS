var sentence = "The quick brown fox jumps over the lazy dog";

// Convert the string to lowercase for case-insensitive comparison
var lowercaseSentence = sentence.toLowerCase();

// Define the word to search for
var wordToSearch = "the";

// Split the string into words
var words = lowercaseSentence.split(" ");

// Initialize a variable to store the count of occurrences
var count = 0;

// Iterate through the words to count occurrences of the word "the"
for (var i = 0; i < words.length; i++) {
    // Check if the current word matches the word to search
    if (words[i] === wordToSearch) {
        count++;
    }
}

// Display the count of occurrences
alert("Sentence:" + sentence + `<br>` + "Number of occurrences of the word 'the': " + count);









