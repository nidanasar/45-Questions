"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
// and titlecase.
let personName = "nida";
// lowercase
console.log("Lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
// titlecase
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
//console.log("titlecase:" , personName.replace(/\bw/g,c =>c.toUpperCase()));
