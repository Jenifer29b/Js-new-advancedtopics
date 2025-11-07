// Getter and Setter in js

// Get = obj.prop  - it used to get or return a value and calculate
// set = (obj.prop = value) - it is used to change or validate.. it doesn't need console to print 
 
class Person{
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    get getage() {
        return this.age   // this is getter
    }
    set agelimit(value) {
        if (value < 0 || value > 100) {
            console.log("Setter function age is not valid" ,value  )
        } else {
            console.log(this.age = value)
        }
    }
}

let info = new Person("ruba", 27)
console.log(info.getage) // it return an age

info.agelimit = 23 // setter function
console.log(info.getage) // getter function
console.log(info)


class Rectangle{
    constructor(height, width) {
        this.height = height,
            this.width = width
    }

    get calculation() {
        return this.height*this.width
    }
}

let calculate = new Rectangle(25, 25)
console.log(calculate)

console.log(calculate.calculation)