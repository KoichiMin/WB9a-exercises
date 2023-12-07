"use strict"


class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }

    getFullName() {
            console.log(this.firstName + " " + this.lastName);
        }
}

// let a1 = new Person("John", "Doe");

// a1.getFullName();

class Employee extends Person{

    constructor(firstName, lastName, id, jobTitle, payRate){
        super(firstName, lastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getGrossPay(hoursWorked){
        return hoursWorked * this.payRate
    }

}

let a1 = new Employee("Joey", "Doe", 3, "engineer", 30);

a1.getFullName();

console.log(a1.getGrossPay(40));