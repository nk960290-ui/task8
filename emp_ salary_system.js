let employees = [
    {
        name="nandhakumar",
        salary= 30000,
    },
    {
        name="john",
        salary= 45000,
    },
    {
        name="varun",
        salary= 60000,
    }
];

let highest = employees[0].salary;

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highest) {
        highest = employees[i].salary;
    }
}
    
console.log("The highest salary is: $" + highest);

let lowest = employees[0].salary;

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary < lowest) {
        lowest = employees[i].salary;
    }
}
console.log("The lowest salary is: $" + lowest);

console.log("after bonus:");
for (let i = 0; i < employees.length; i++) {
    let bonus = employees[i].salary += 5000;
    console.log(employees[i].name + ": $" +
    employees[i].salary);
    }

    let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    total += employees[i].salary; 
}

console.log("total salary : $" + total);

console.log("employees earning more than 40000:");

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000) {
        console.log(employees[i].name + ": $" + employees[i].salary);
    }
}