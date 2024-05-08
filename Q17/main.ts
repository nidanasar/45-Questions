// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that 
// person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.




//initlized guest list
let guestList:string[]=['Nida','Anaya','Anoosha','Zainab'];

// inform guests to change the dinner setup
//console.log("due to limited space, i would be able to invite only two guest in my dinner party.")

// remove guest from list
while(guestList.length>2){
let removeGuest=guestList.pop();
//console.log(`Dear ${removeG uest} regret to inform you that you are not invited to this dinner party.`)
}

// remianing guests invite
guestList.forEach(guestList=>{
//console.log(`Dear ${guestList} i would like to inform you that you are remain invited to the dinner party.`)
});

// empty list
guestList.splice(0,guestList.length);
console.log(guestList)