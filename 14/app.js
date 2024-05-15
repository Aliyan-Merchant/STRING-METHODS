var A = ["cake", "apple pie", "cookie", "chips", "patties"];

    var userInput = prompt("Enter the item to search:");

    // Convert user input and array items to lowercase for case-insensitive comparison
    var userInputLower = userInput.toLowerCase();
    var found = false;

    // Iterate through the array to search for the item
    for (var i = 0; i < A.length; i++) {
        var itemLower = A[i].toLowerCase();

        if (userInputLower === itemLower) {
            found = true;
            break;
        }
      }