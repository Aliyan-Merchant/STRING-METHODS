var username = prompt("Please enter your username:");

            // Regular expression to match special symbols [@ . , !]
            var specialSymbolsRegex = /[@.,!]/;

            // Check if the username contains any special symbols
            if (specialSymbolsRegex.test(username)) {
                alert("Please enter a valid username without special symbols [@ . , !]");
                // Call the function recursively to prompt the user again
                validateUsername();
            } else {
                alert("Username is valid!");
            }