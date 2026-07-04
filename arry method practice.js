let fruits = ["Apple", "Orange", "Banana"];

console.log("Original Array:", fruits);

// push()
fruits.push("Mango");
console.log("After push():", fruits);

// pop()
fruits.pop();
console.log("After pop():", fruits);

// shift()
fruits.shift();
console.log("After shift():", fruits);

// unshift()
fruits.unshift("Grapes");
console.log("After unshift():", fruits);

// splice()
fruits.splice(1, 1, "Pineapple");
console.log("After splice():", fruits);

// slice()
let newFruits = fruits.slice(0, 2);
console.log("After slice():", newFruits);
console.log("Original Array:", fruits);
