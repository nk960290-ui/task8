let products = [
    { name: "Laptop", price: 50000 },
    { name: "mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

console.log("products names:");
for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
}

let totalbill =0;
for (let i = 0; i < products.length; i++) {
    totalbill += products[i].price;
}
console.log("Total bill: " + totalbill);

let searchProduct = "mouse";
for (let i = 0; i < products.length; i++) {
    if (products[i].name === searchProduct) {
        console.log("Product found: " + products[i].name);
        break;
    }
}
console.log("Product not found: " + searchProduct);

let discount = totalbill * 0.1;
console.log("Discount (10%):", discount);

let finalAmount = totalbill - discount; 
console.log("Final Amount: " + finalAmount);
