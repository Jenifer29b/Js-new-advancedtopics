// this refers to the object that exceuting the code. its value is based upon where it is called
// Instead of this we can use bind
// this in class and usage of bind ..
class person{
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log("hello" , this.name)
    }
}
let greeting = new person("Jeni")
console.log(greeting)
greeting.greet()

let infogret = greeting.greet.bind(greeting)
infogret()

// Normal usage of this keyword
let user = {
    name: "Jenifer",
    call: function () {
        console.log("helo welcome" , this.name)
    }
}
console.log(user)
user.call()

// this in class contructor
class Car{
    constructor(brand, model) {
        this.brand = brand,
            this.model = model
    }
    getbrand() {
        console.log(this.brand)  
    }
}
let details = new Car("Honda", "A01")
console.log(details)
details.getbrand()

// usage of bind
//bind() is a method available on every function that permanently fixes the value of this for that function.
let studinfo = {
    name: "Ruban",
    place: "madurai",
    info: function () {
        console.log(`I am ${this.name} and I lives in ${this.place}`)
    }
}
console.log(studinfo)
let detail = studinfo.info.bind(studinfo)
detail()