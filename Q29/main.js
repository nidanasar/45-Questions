"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ['Watermelon', 'Mango', 'Cherry',];
if (favorite_fruits.includes('Watermelon')) {
    console.log('I really like Watermelon');
}
if (favorite_fruits.includes('Mango')) {
    console.log('I really like Mango');
}
if (favorite_fruits.includes('Cherry')) {
    console.log('I really like Cherry');
}
if (favorite_fruits.includes('Pineapple')) {
    console.log('I really like Pineapple');
}
if (favorite_fruits.includes('Kiwi')) {
    console.log('I really like Kiwi');
}
else {
    console.log('please select the listed fruits');
}
