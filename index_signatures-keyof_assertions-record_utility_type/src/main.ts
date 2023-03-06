// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number  // This is index signature
// }

interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -10,
  Job: 50
}

console.log(todaysTransaction.Pizza)
console.log(todaysTransaction['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransaction[prop])

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

console.log(todaysNet(todaysTransaction))

// todaysTransaction.Pizza = 40

console.log(todaysTransaction['Harsh'])

// -----------------------------------------------------------

// Keyof Assertions

interface Student {
  // [key: string]: string | number | number[] | undefined
  name: string,
  CGPA: number,
  classes?: number[]
}

const student: Student = {
  name: 'Cecil',
  CGPA: 9,
  classes: [100, 200]
}

// console.log(student.test)

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'CGPA')

// -----------------------------------------------------------

// Utility Types

// interface Incomes {
//   [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 230
}

// for(const money in monthlyIncomes) {
//   console.log(monthlyIncomes[money])
// }

for(const money in monthlyIncomes) {
  console.log(monthlyIncomes[money as keyof Incomes])
}