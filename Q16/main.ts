// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
// invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that 
// you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.



let guestList:string[]=['Nida','Anaya','Anoosha','Zainab'];
let canNotAttend:string="Zainab";
let newGuest:string=" Ayesha";
guestList[guestList.indexOf(canNotAttend)]=newGuest
//console.log(guestList)
//guestList.map((items)=>console.log(`Hey ${items},i found a good space to enjoye togther,so would like to invite you 
//on tommorrow dinner.`));

//task 2 add new guest in begning
let guestBeg:string="Komal";
guestList.unshift(guestBeg);
//console.log(guestList)

//task 3 add new guest in middle array
let guestMid:string=" Samina";
let middleIndex=guestList.length/3
guestList.splice(middleIndex,0,guestMid)
console.log(guestList)

//task 4 add new guest end of the array
let guestEnd:string="nadia"
guestList.push(guestEnd);
console.log(guestList)

//task 5 
guestList.map((items)=>
console.log(`Dear ${items},i found a big table, so i would like to invite you tommorrow for big dinner party`));
