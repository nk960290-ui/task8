console.log("Current Balance: ₹" + balance);
let balance = 10000;
let running = true;

while (running) {
    let choice = Number(prompt(`
ATM MENU
1. Balance
2. Deposit
3. Withdraw
4. Exit

Enter your choice:
`));

    switch (choice) {

        case 1:
            console.log("Current Balance: ₹" + balance);
            break;

        case 2:
            let deposit = Number(prompt("Enter Deposit Amount:"));
            if (deposit > 0) {
                balance += deposit;
                console.log("Amount Deposited: ₹" + deposit);
                console.log("New Balance: ₹" + balance);
            } else {
                console.log("Invalid deposit amount");
            }
            break;

        case 3:
            let withdraw = Number(prompt("Enter Withdraw Amount:"));
            if (withdraw <= 0) {
                console.log("Invalid withdraw amount");
            } else if (withdraw <= balance) {
                balance -= withdraw;
                console.log("Amount Withdrawn: ₹" + withdraw);
                console.log("Remaining Balance: ₹" + balance);
            } else {
                console.log("Insufficient Balance");
            }
            break;

        case 4:
            console.log("Thank You! Visit Again.");
            running = false;
            break;

        default:
            console.log("Invalid Choice");
    }
}
