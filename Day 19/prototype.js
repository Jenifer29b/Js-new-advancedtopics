//prototype means that every object has a hidden linked to another object .. In Js everything is object
// it is backup storage for properties and method

let obj = { name: "jeni" }

console.log(obj.toString())
console.log(obj.__proto__ == Object.prototype)

let animal = {
    eat() {
        console.log("animal is eating")
    }
}
let dog = Object.create(animal) //prototype Inheritance .. access the animal of here

dog.bark = function(){
    console.log("dog is barking")
}
    
dog.bark()
dog.eat()


//prototype inheritance in js here person1 access the properties of person by using object.create()
let person = {
    greet() {
        console.log("Hello welcome")
    }
}
let person1 = Object.create(person)

person1.welcome = function(){
   console.log("helllo....!!!")
}

person1.greet()
person1.welcome()