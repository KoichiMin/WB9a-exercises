"use strict"

class Account {



    constructor(accountName, accountType){
        this.accountName = accountName;
        this.accountType = accountType;
        this.overdraftLimit = 500;
        this.overdraftFee = 50;
        this.balance = 0;
        this.accountHistory = [];
        this.addHistory("Full account history: ");
        this.addHistory("CREATING ACCOUNT");
        this.Display();

    }

    addHistory(record){
        this.accountHistory.push(record);
    }



    getBalance(){
        return this.balance;
    }

    setBalance(newAmount){
        this.balance = newAmount;
    }



    Deposit(amountToDeposit){
        this.balance += amountToDeposit;
        this.addHistory("Depositing " + amountToDeposit + " into account. ");

        this.Display();
    }

    Withdrawal(amountTodWithdraw){
        this.addHistory("Withdrawing " + amountTodWithdraw );
        if(this.balance >= amountTodWithdraw){
            this.balance -= amountTodWithdraw;
            this.Display();
        }
        else if((this.balance + this.overdraftLimit) >= amountTodWithdraw){

            this.balance -= amountTodWithdraw;
            this.balance -= this.overdraftFee;
            this.addHistory("incurring overdraft fee of " + this.overdraftFee)
            this.Display();


        } else{
            this.addHistory("Withdrawal failed.")
            console.log("Sorry. You're broke.");
            this.Display();

        }

    }

    Display(){
        console.log("---------------------------------------");
        console.log(`ACCOUNT NAME: ${this.accountName} ${this.accountType}`);
        console.log("CURRENT BALANCE " + this.getBalance());
        
        this.accountHistory.forEach(record => console.log(record));
        console.log("---------------------------------------");

    }



}

class SavingsAccount extends Account{

    constructor(accountName, interestRate){
        super(accountName, "Savings Account");
        this.interestRate = interestRate;
    }

    AccrueInterestForOneMonth(){
        let monthlyInterestRate = this.interestRate/ 12;
        let interestThisMonth = super.getBalance() * monthlyInterestRate;
        super.addHistory("Accruing Interest of " + interestThisMonth);
        super.setBalance(super.getBalance() + interestThisMonth);
        super.Display();

    }


}

let a1 = new Account("Matt", "Checking");
// // a1.setBalance(1000000);
// a1.Deposit(200);

// a1.Withdrawal(711);

// a1.Display();

let a2 = new SavingsAccount("Koichi", .08);

a2.Deposit(500);

for(let month = 1; month < 13; month ++){
    a2.AccrueInterestForOneMonth();

}

a2.Withdrawal(500);

