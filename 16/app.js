// Define the string
var university = "University of Karachi";

// Convert the string to an array using split method
var universityArray = university.split(" ");

// Display the elements of the array vertically
document.write("<h2>Elements of the array:</h2>");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}
