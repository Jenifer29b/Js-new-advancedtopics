// Prototype :
let animal = {
    eat() {
        console.log("animal is eating")
    }
}
let dog = Object.create(animal)

dog.bark = function () {
    console.log("dog is barking")
}

dog.eat()
dog.bark()
console.log(Object.getPrototypeOf(dog))

// contructor function :

function Car(brand, model, year) {
    this.brand = brand,
        this.model = model,
        this.year = year
}
Car.prototype.getdetails = function () {
    console.log("this is from",this.brand , "with model",this.model,"from the year",this.year)
}

let details = new Car("toyoto", "A01", 2020)
let details1 = new Car("honda" , "B02" , 2024)
console.log(details)   // this is console like objects
details.getdetails() // this is console using method
details1.getdetails()

// class constructor
class Person{
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    sayhi() {
        console.log("Heloo Welcome to Js world")
    }
}

let studinfo = new Person("ruban", 21)
console.log(studinfo)
studinfo.sayhi()

// class contructor with inheritance

class Stud{
    constructor(name) {
        this.name = name
    }
}
class Study extends Stud{
    constructor(name, sub) {
        super(name),
               this.sub = sub
    }
    study() {
        console.log(this.name ,"is studing" , this.sub)
    }
}

let info = new Study("prabha" , "React")
console.log(info) // this is for console like object
info.study()   // this is for consoling method using inheritance property