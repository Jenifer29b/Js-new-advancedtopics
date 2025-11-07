class User{
    constructor(name, password) {
        this.name = name,
        this.password = password
    }
    get detailpass() {
        console.log("*********")
    }
    set checkpass(password) {
        if (password.length < 6) {
            console.log("Password must be greater than 6")
        } else {
            console.log("New Password" , this.password = password)
        }
    }
}
let details = new User("Ruban", "Jenifer")
console.log(details)
details.detailpass // getter password
details.checkpass = "jenifer" // setter function
console.log(details)

// getter function

class Circle{
    constructor(raidus) {
        this.raidus = raidus
    }
    get area() {
        return 3.14*(this.raidus)*(this.raidus)
    }
}
let calculate = new Circle(20)
console.log(calculate)
console.log(calculate.area)

// this Vs bind
let person = {
    name: "ruban",
    place : "madurai",
    introduce : function() {
       console.log(  `My name is ${this.name} and I lives in ${this.place}`)
    }
}
console.log(person)
person.introduce()

let info = person.introduce.bind(person)
info()

// getter and setter

class Bankaccount{
    constructor(owner, _balance) {
        this.owner = owner,
            this._balance = _balance
    }
    get balance(){
        console.log("Balance amount Rs:" , this._balance)
    }
    set check(_balance) {
        if (_balance < 0) {
            console.log("Negative cannot be accepted")
        } else {
            this._balance+=_balance
            console.log("Total Balance amount Rs:",this._balance )
            
        }
    }
}

let userinfo = new Bankaccount("Jenifer", 2000)
userinfo.balance
userinfo.check = 2000
console.log(userinfo)
