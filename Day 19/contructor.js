// it is before ES6 contruction function


function person(name, age) {
    this.name = name,
    this.age = age
    
}

person.prototype.sayhello = function () {
    console.log("hello")
}

let person1 = new person("ruban", 21)
console.log(person1)
person1.sayhello()

function greet(name) {
    this.name = name
}

greet.prototype.welcome = function () {
    console.log("heloo welcome",this.name)
}

let people = new greet("ruban")
console.log(people)
people.welcome()