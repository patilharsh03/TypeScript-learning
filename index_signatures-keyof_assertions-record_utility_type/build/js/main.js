"use strict";
// Index Signatures
const todaysTransaction = {
    Pizza: -10,
    Books: -10,
    Job: 50
};
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);
let prop = 'Pizza';
console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
// todaysTransaction.Pizza = 40
console.log(todaysTransaction['Harsh']);
const student = {
    name: 'Cecil',
    CGPA: 9,
    classes: [100, 200]
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'CGPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 230
};
// for(const money in monthlyIncomes) {
//   console.log(monthlyIncomes[money])
// }
for (const money in monthlyIncomes) {
    console.log(monthlyIncomes[money]);
}
