// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

interface itmes{
Name:string
Price:number
}

// make two diffrent objects
let book:itmes={
Name:"English",
Price:200,
};

let car:itmes={
Name: "suzuki",
Price:250000,
};

console.log(`Book Name: ${book.Name}, Book Price: ${book.Price}`)
console.log(`Car Name:${car.Name}, Car Price: ${car.Price}`)