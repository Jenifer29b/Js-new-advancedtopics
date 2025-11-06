class bankaccount{
    constructor(owner, balance) {
        this.owner = owner,
            this.balance = balance
    }
    depoistamount(amount) {
        this.balance+=amount
        console.log("amount depoisted : " , this.balance)
    }
    withdrawamount(amount) {
        if (amount > this.balance) {
            console.log("insufficient balance")
        } else {
            this.balance -= amount
            console.log("amount withdrawed :" , this.balance)
        }
    }
}

class savings extends bankaccount{
    constructor(owner ,balance, intrestrate) {
        super(owner , balance),
        this.intrestrate = intrestrate
    }
    addintrest() {
        console.log("balance after intrest added :",this.balance + this.balance * this.intrestrate)
        
    }
}

let details = new savings("Ruban", 2000,0.1)

console.log(details)
details.depoistamount(1000) 
details.withdrawamount(500)
details.addintrest()