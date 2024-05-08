// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
let lifeStage:number= 2;

if(lifeStage<2){
console.log("the person is a baby");
}
else if(lifeStage>=2 && lifeStage<4){
console.log("the person is Toddler");
}
else if(lifeStage>=4 && lifeStage<13){
console.log("the person is a kid");
}
else if(lifeStage>=13 && lifeStage<20){
console.log("the person is a Teenager");
}
else if(lifeStage>=20 && lifeStage<65){
console.log("the person is an Adult");
}
else{
console.log("the person is an Elder");
}