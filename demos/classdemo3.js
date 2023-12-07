"use strict";

class Employee{
    // constructor is activated only when creating a new variable
    constructor(id, firstName, lastName, jobTitle, payRate){

        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
        this.intro = `${firstName} ${lastName} is a ${jobTitle} and makes ${payRate} per hour.`;

    }

    setFirstName(firstName){
        this.firstName = firstName;
        this.intro = `${this.firstName} ${this.lastName} is a ${this.jobTitle} and makes ${this.payRate} per hour.`
    }

    displayIntro(){
        console.log(this.intro);
    }

}


let e1 = new Employee(1, "Matt", "Christenson", "Clown", 9.99);
// e1.firstName = "Matthew";
// the intro property wont be able to change the firstName value
e1.setFirstName("Matthew");

let e2 = new Employee(2, "Lawrence", "Tejeda", "Jester", 12.00);

// console.log(e1.id);
// console.log(e1.getIntro());

let employees = [e1, e2];

for(let emp of employees){
    
    emp.displayIntro();



}