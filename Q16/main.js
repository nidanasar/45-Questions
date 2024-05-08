"use strict";
let guestList = ['Nida', 'Anaya', 'Anoosha', 'Zainab'];
let canNotAttend = "Zainab";
let newGuest = " Ayesha";
guestList[guestList.indexOf(canNotAttend)] = newGuest;
//console.log(guestList)
//guestList.map((items)=>console.log(`Hey ${items},i found a good space to enjoye togther,so would like to invite you on tommorrow dinner.`));
//task 2 add new guest in begning
let guestBeg = "Komal";
guestList.unshift(guestBeg);
//console.log(guestList)
//task 3 add new guest in middle array
let guestMid = " Samina";
let middleIndex = guestList.length / 3;
guestList.splice(middleIndex, 0, guestMid);
console.log(guestList);
//task 4 add new guest end of the array
let guestEnd = "nadia";
guestList.push(guestEnd);
console.log(guestList);
//task 5 
guestList.map((items) => console.log(`Dear ${items},i found a big table, so i would like to invite you tommorrow for big dinner party`));
// console.log(canNotAttend+" "+'cannot attend the dinner')
// let newGuest:string="Hafsa";
// guestList[guestList.indexOf(canNotAttend)]=newGuest
// //console.log(guestList)
// guestList.map((items)=>console.log(`Dear ${items}, i would like to invite you on dinner tomorrow `))
