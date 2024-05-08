// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// print the array in original order 
let palcesVisit:string[]=['Saudia','Germany','Canada','Uk','Turkey'];
//console.log("origional:" , palcesVisit)

// // aplhaetical order without modifying the actual list
// console.log("alphabatical order:",[...palcesVisit].sort());

// // original order after sorting
// console.log("original order after sorting", palcesVisit);

//reverse alphabetical 
//console.log("reverse alphabetical order:",[...palcesVisit].sort().reverse());

// original order after reverse sorting
//console.log("reverse alphabetical oder:",palcesVisit);

//reversed order
//console.log("reversed order:", [...palcesVisit].reverse());

// origibnal order after reversed order
//console.log("origional order after reversed order:",palcesVisit)

// sorting in alphabetical array
//console.log("order has changed in alphabatical:",[...palcesVisit].sort());

//sorting in reversed alphabatical array
console.log("order has changed in alphabatical reverse:",[...palcesVisit].sort().reverse());