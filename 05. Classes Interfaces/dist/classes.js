"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private readonly id: string;
        //   private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass is a valid value!");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department - Id: " + this.id);
    }
    addEmployee(name) {
        if (name === "Mash") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Mash');
const fisYear = Department.fiscalYear;
console.log(employee1, fisYear);
const it = new ITDepartment("d2", ["Mash"]);
// const accounting = new AccountingDepartment("d1", []);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = "Setting Yearly Report";
accounting.addReport("Yearly Report");
accounting.addEmployee("Mash");
accounting.addEmployee("Safa");
// accounting.employees[2] = 'Nosh';
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();
console.log(accounting.mostRecentReport);
it.addEmployee("Mash");
it.addEmployee("Safa");
console.log(it);
it.describe();
it.printEmployeeInformation();
// const acCopy = { name: "Dummy", describe: accounting.describe };
// acCopy.describe();
