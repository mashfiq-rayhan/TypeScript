// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: "Mash",
    age: 30,
    hobbies: ['Sports', 'Coding'],
    role: [2, 'author']
};

person.role.push("admin");
person.role[1] = 10;

let favActivities: string[];
favActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());  ERROR
}