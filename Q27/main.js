"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColor = "Green";
// version 1
// • If the alien is green, print a message that the player earned 5 points.
if (alienColor === "Green") {
    console.log("the player earned 5 points.");
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor === "Yellow") {
    console.log("the player earned 10 points.");
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alienColor === "Red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("please select the right color.");
}
// version 2
alienColor = "Yellow";
if (alienColor === "Green") {
    console.log("the player earned 5 points.");
}
else if (alienColor === "Yellow") {
    console.log("the player earned 10 points.");
}
else if (alienColor === "Red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("please select the right color.");
}
// version 3
alienColor = "Red";
if (alienColor === "Green") {
    console.log("the player earned 5 points.");
}
else if (alienColor === "Yellow") {
    console.log("the player earned 10 points.");
}
else if (alienColor === "Red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("please select the right color.");
}