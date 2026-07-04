let username = prompt("Enter username");
let password = prompt("Enter password"); 

if (username === "admin" && password === "1234") {
    console.log("welcome");
} else {
    console.log("Invalid username or password.");
}