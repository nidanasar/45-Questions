"use strict";
//initlized guest list
let guestList = ['Nida', 'Anaya', 'Anoosha', 'Zainab'];
// inform guests to change the dinner setup
//console.log("due to limited space, i would be able to invite only two guest in my dinner party.")
// remove guest from list
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    //console.log(`Dear ${removeG uest} regret to inform you that you are not invited to this dinner party.`)
}
// remianing guests invite
guestList.forEach(guestList => {
    //console.log(`Dear ${guestList} i would like to inform you that you are remain invited to the dinner party.`)
});
// empty list
guestList.splice(0, guestList.length);
console.log(guestList);
