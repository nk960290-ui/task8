let account = {
    name: "nandhakumar",
    balance: 50000
};

account.balance = account.balance + 10000;
console.log("After deposit of $10000:", account.balance);

account.balance = account.balance - 5000;
console.log("After withdrawal of $5000:", account.balance);

console.log("current balance:", account.balance);

if(account.balance < 20000) {
    console.log("balance is below $20,000");
}else {
    console.log("balance is above $20,000");
}

console.log("account of details:", account);
console.log("account name:", account.name);
console.log("account balance:", account.balance);
