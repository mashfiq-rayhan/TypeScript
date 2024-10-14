"use strict";
// interface Person {
//     name: string;
//     age: number;
//     greet(phrase:string): void;
// }
// let user1: Person;
// user1 = {
//     name: 'Mash',
//     age: 30,
//     greet(phrase:string){
//         console.log(phrase + ' ' + this.name);
//     }
// }
// user1.greet('Hi There.. I am');
// interface Named {
//   readonly name: string;
// }
// interface Greetable extends Named {
//   greet(phrase: string): void;
// }
// class Person implements Greetable {
//   name: string;
//   age = 30;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// }
// let user1: Greetable;
// user1 = {
//     name: 'Mash',
//     greet(phrase:string){
//         console.log(phrase + ' ' + this.name);
//     }
// }
// user1.greet('Hi There.. I am');
// user1 = new Person("Mash");
// user1.greet("Hi there.. I am");
// console.log(user1);
// type AddFn = (a: number, b: number) => number;
// interface AddFn {
//   (a: number, b: number): number;
// }
// let add: AddFn;
// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };
// interface Named {
//   readonly name: string;
//   outputName?: string;
// }
