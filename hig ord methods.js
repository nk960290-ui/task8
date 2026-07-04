let employees = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 35000 },
    { name: "C", salary: 50000 },
    { name: "D", salary: 70000 }
];


let increasedSalary = employees.map(emp => ({
    name: emp.name,
    salary: emp.salary + 5000
}));
console.log("After Salary Increase:");
console.log(increasedSalary);

let highSalary = employees.filter(emp => emp.salary > 30000);
console.log("Salary > ₹30000:");
console.log(highSalary);

let employee = employees.find(emp => emp.salary === 50000);
console.log("Employee with Salary ₹50000:");
console.log(employee);


let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total Salary:", totalSalary);


let moreThan60000 = employees.some(emp => emp.salary > 60000);
console.log("Any Salary > ₹60000:", moreThan60000);

let moreThan15000 = employees.every(emp => emp.salary > 15000);
console.log("Every Salary > ₹15000:", moreThan15000);
