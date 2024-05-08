"use strict";
// more conditinal test
// let fruitName1:string="Apple";
// let fruitName2:string="Mango";
// let fruitName3:string="Grapes";
// if (fruitName1==fruitName3){
// console.log("names are equal")
// } else{console.log("names are not equal")}
// equality and inequality in string
console.log("equality test in string:", "Apple" === "Apple"); // true
console.log("inequality test in string:", "Apple" != "Apple"); // false
// lowercase function test
console.log("lowercase function:", "HELLO".toLowerCase() === "hello"); // true
console.log("lowercase function:", "HELLO".toLowerCase() != "hello"); // false
// numerical test equality and inequality
console.log("equality with number:", 20 == 20); // true
console.log("inequality with number:", 20 != 20); // false
// greater then and less then test 
console.log("greater then:", 100 > 50); // true
console.log("less then:", 100 < 50); // false
// greater then or equal to
console.log(" greater then equal to:", 200 >= 100); // true
console.log("less  equal to:", 1200 <= 100); // false
// using And operator
console.log("And operator:", 5 === 5 && 10 > 5); // true
console.log("And Operator:", 5 === 5 && 10 < 5); // false
// using OR operator
console.log("or operator:", 12 > 10 || 12 < 10); // true
console.log("or operator:", 6 > 7 || 6 < 5); // false
// wether  an item in array
const items = ['Bread', 'Milk', 'Butter', 'water'];
console.log("item in the array:", items.includes('Bread'));
// wether an items is not in array
console.log("item is not in the array:", items.includes('ColdDrink'));
