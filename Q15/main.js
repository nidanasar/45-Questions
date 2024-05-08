"use strict";
let guestList = ['Nida', 'Anaya', 'Anoosha', 'Zainab'];
let canNotAttend = "Zainab";
console.log(canNotAttend + " " + 'cannot attend the dinner');
let newGuest = "Hafsa";
guestList[guestList.indexOf(canNotAttend)] = newGuest;
//console.log(guestList)
guestList.map((items) => console.log(`Dear ${items}, i would like to invite you on dinner tomorrow `));
