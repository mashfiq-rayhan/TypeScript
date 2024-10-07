// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Mash",
//     age: 30,
//     hobbies: ['Sports', 'Coding'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: "Mash",
  age: 30,
  hobbies: ["Sports", "Coding"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

let favActivities: string[];
favActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());  ERROR
}

if (person.role === Role.AUTHOR) {
  console.log("is AUTHOR");
}
