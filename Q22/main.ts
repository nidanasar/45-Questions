// Intentional Error  array index error

const weatherSeasons:string[]=['summer','winter','autum','spring'];
//console.log(weatherSeasons[4])
//console.log(weatherSeasons[0])
weatherSeasons.forEach((Element,index)=>{
console.log(index+ ':'+ Element);
});
weatherSeasons.forEach(index=>{
console.log(index)
})