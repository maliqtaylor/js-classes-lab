class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = Number(balance)
    }

    deposit(currency) {
        this.balance += currency
    }

    withdraw(currency) {
        this.balance -= currency
    }
}

class CheckingAccount extends BankAccount {
    overdraftEnabled(currency, balance, valid) {
        currency <= balance ? valid = true : valid = false
        return valid
    }

    withdraw(currency) {
        let { overdraftEnabled, balance } = this
        overdraftEnabled(currency, balance) ? balance -= currency : null
    }
}


const myAcct = new CheckingAccount('Maliq', 90)
myAcct.withdraw(700)
console.log(myAcct);