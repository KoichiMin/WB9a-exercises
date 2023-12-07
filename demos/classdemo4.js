"use strict";

class Employee{

    constructor(id, firstName, lastName, jobTitle, payRate){

        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;

    }

    getFullName (){
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName
    }

    getFullNameAlt(){
        return `${this.lastName}, ${this.firstName}`
    }

    getIntro(){
        let intro = `${this.getFullName} is a ${this.jobTitle} and makes ${this.payRate} per hour.`
        return intro
    }

    displayIntro(){
        console.log(this.getIntro());
    }

}


let e1 = new Employee(1, "Matt", "Christenson", "Clown", 9.99);
e1.firstName = "Matthew";
let e2 = new Employee(2, "Lawrence", "Tejeda", "Jester", 12.00);

// console.log(e1.id);
// console.log(e1.getIntro());

let employees = [e1, e2];

for(let emp of employees){
    
    emp.displayIntro();

    console.log(emp.getFullName());


}