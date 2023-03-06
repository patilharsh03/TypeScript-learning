// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 92 }));
const assign2: Assignment = updateAssignment(assign1, { grade: 56 });

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified: Readonly<Assignment> = { ...assign2, verified: true };

recordAssignment({ ...assign2, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Harsh" | "Hermoine";
type Grades = "A" | "B" | "C" | "D" | "E";

const finalGrades: Record<Students, Grades> = {
  Harsh: "B",
  Hermoine: "A",
};

interface StudentGrades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, StudentGrades> = {
  Harsh: { assign1: 92, assign2: 76 },
  Hermoine: { assign1: 98, assign2: 89 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssignResult = {
  studentId: 'h432',
  grade: 86
}

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
  studentId: '456h',
  title: 'Blockchain Project'
}

// Exclude and Extract ------ Not work with interface

type adjustedGrade = Exclude<Grades, 'E'>

type highGrades = Extract<Grades, 'A' | 'B'>

// Nonnullable

type Names = 'Harsh' | 'Nene' | null | undefined

type Namesonly = NonNullable<Names>

// ReturnType

// type NewAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign('typescript', 100)
console.log(tsAssign)

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ['JavaScript', 98]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

const fetchUsers = async (): Promise<User[]> => {

  const data = await fetch(
      'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
      return res.json()
  }).catch(err => {
      if (err instanceof Error) console.log(err.message)
  })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType <typeof fetchUsers>>

fetchUsers().then(users => console.log(users))