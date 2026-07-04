let employees = [
    { id: 101, name: "Naveen", salary: 30000 },
    { id: 102, name: "John", salary: 45000 },
    { id: 103, name: "Arun", salary: 60000 }
];

function viewEmployees() {
    employees.forEach(emp => {
        console.log(`ID: ${emp.id}, Name: ${emp.name}, Salary: ₹${emp.salary}`);
    });
}

function searchEmployee(id) {
    let emp = employees.find(e => e.id == id);
    console.log(emp ? emp : "Employee Not Found");
}

function addBonus() {
    employees = employees.map(emp => ({
        ...emp,
        salary: emp.salary + 5000
    }));
    console.log("Bonus Added Successfully");
}

function highestSalary() {
    let emp = employees.reduce((a, b) => a.salary > b.salary ? a : b);
    console.log("Highest Salary:", emp);
}

function lowestSalary() {
    let emp = employees.reduce((a, b) => a.salary < b.salary ? a : b);
    console.log("Lowest Salary:", emp);
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    console.log("Total Salary: ₹" + total);
}

function filterSalary() {
    let result = employees.filter(emp => emp.salary > 40000);
    console.log(result);
}

function employeeReport() {
    employees.forEach(emp => {
        console.log(`
Employee ID : ${emp.id}
Employee Name : ${emp.name}
Salary : ₹${emp.salary}
        `);
    });
}

function showDateTime(callback) {
    console.log(new Date());
    callback();
}

function fetchEmployees() {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

let choice = Number(prompt(`
Employee Payroll System

1. View Employees
2. Search Employee by ID
3. Add Bonus
4. Highest Salary
5. Lowest Salary
6. Total Salary
7. Salary Above ₹40000
8. Employee Report
9. Current Date & Time
10. Fetch Employee Data
11. Exit

Enter your choice:
`));

switch (choice) {

    case 1:
        viewEmployees();
        break;

    case 2:
        let id = Number(prompt("Enter Employee ID:"));
        searchEmployee(id);
        break;

    case 3:
        addBonus();
        viewEmployees();
        break;

    case 4:
        highestSalary();
        break;

    case 5:
        lowestSalary();
        break;

    case 6:
        totalSalary();
        break;

    case 7:
        filterSalary();
        break;

    case 8:
        employeeReport();
        break;

    case 9:
        showDateTime(() => console.log("Thank You"));
        break;

    case 10:
        fetchEmployees();
        break;

    case 11:
        console.log("Exited Successfully");
        break;

    default:
        console.log("Invalid Choice");



}
