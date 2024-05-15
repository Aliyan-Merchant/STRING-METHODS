function validatePassword() {
    // Get user input for the password
    var password = prompt("Please enter your password:");

    // Regular expressions for checking requirements
    var alphabetRegex = /[a-zA-Z]/;
    var numberRegex = /[0-9]/;
    var startsWithNumberRegex = /^[0-9]/;

    // Check if the password meets the requirements
    if (
        password.length >= 6 &&
        alphabetRegex.test(password) &&
        numberRegex.test(password) &&
        !startsWithNumberRegex.test(password)
    ) {
        alert("Password is valid!");
    } else {
        alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
        // Call the function recursively to prompt the user again
        validatePassword();
    }
}

// Call the function to start password validation
validatePassword();
  


