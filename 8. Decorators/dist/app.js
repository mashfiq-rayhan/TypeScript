"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function withTempalte(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
        // Please watch video 112
    };
}
let Person = class Person {
    constructor() {
        this.name = "Mash";
        console.log("Creating person object...");
    }
    showItem(item) {
        console.log(item);
    }
};
Person = __decorate([
    Logger("LOGGING - PERSON"),
    withTempalte("<h1>My Person Object.</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
// function PropertyLog(target: any, propertyName: string | Symbol) {
//   console.log("Property Decorator");
//   console.log(target, propertyName);
// }
// function AccessorLog(target: any, name: string, desc: PropertyDescriptor) {
//   console.log("Accessor Decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(desc);
// }
// function MethodLog(target: any, name: string | Symbol, desc: PropertyDescriptor) {
//   console.log("Method Decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(desc);
// }
// function ParamLog(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter Decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }
// class Product {
//   @PropertyLog
//   title: string;
//   private _price: number;
//   @AccessorLog
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - Should be positive");
//     }
//   }
//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }
//   @MethodLog
//   getPriceWithTax(@ParamLog tax: number) {
//     return this._price * (1 + tax);
//   }
// }
// const p1 = new Product('Book', 19);
// const p2 = new Product('Book2', 19);
