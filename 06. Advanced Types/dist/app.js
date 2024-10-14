"use strict";
// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type ElevatedEmployee = Admin & Employee;
// const e1: ElevatedEmployee = {
//   name: "Mash",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };
// interface Admin {
//   name: string;
//   privileges: string[];
// };
// interface Employee {
//   name: string;
//   startDate: Date;
// };
// interface ElevatedEmployee extends Employee, Admin{}
// const e1: ElevatedEmployee = {
//   name: "Mash",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };
// type Combinable = string | number;
// type Numeric = number | boolean;
// type Univarsal = Combinable & Numeric;
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type ElevatedEmployee = Admin & Employee;
// type unknownEmployee = Employee | Admin;
// function printEmp(emp: unknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }
// const e1: ElevatedEmployee = {
//   name: "Mash",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };
// printEmp(e1);
// printEmp({name:"Safa", startDate: new Date()});
// class Car {
//     drive() {
//         console.log('Driving a Car...');
//     }
// }
// class Truck {
//     drive() {
//         console.log('Driving a Truck...');
//     }
//     loadCargo(amount:number) {
//         console.log('loading Cargo... ' + amount);
//     }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle:Vehicle){
//     vehicle.drive();
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     } 
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }
// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal:Animal) {
//     let speed;
//     switch(animal.type){
//         case "bird":
//             speed = animal.flyingSpeed;
//             break;
//         case "horse":
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('moving at speed: ' + speed);
// }
// moveAnimal({type: 'bird', flyingSpeed: 30});
// const uInput = <HTMLInputElement>document.getElementById('user-input')!;
// const uInput = document.getElementById('user-input')! as HTMLInputElement;
// uInput.value = 'Hi There!'
// interface ErrorContainer {
//     [prop: string]: string 
// }
