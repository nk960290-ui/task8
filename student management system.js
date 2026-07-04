let students = [
    {
     name: "nandhakumar",
    id:104,
    mark:90
},
{
    name: "Johny",
    id:105,
    mark:45
},
{
    name:"arun",
    id:106,
    mark:25
}
];

console.log("ALL STUDENTS:");
for(let i=0;i<students.length;i++) {
    console.log(students[i])
}

console.log("student names:");
for(let i=0; i<students.length;i++) {
    console.log(students[i].names);

};

console.log("students id 105:");
for(let i=0; i<students.length; i++) {
    if (students[i].id ===105) {
        console.log(students[i]);
    }
}

console.log("\npassed students:");
for(let i=0; i<students.length; i++) {
    if (students[i].mark >=35) {
        console.log(students[i]);
    }
}

console.log("\ntotal students:" + students.length);