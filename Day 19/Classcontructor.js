// After Es6 it is very neat and clean
// class contrutor
class Person{
    constructor(name, age) {
        this.name = name,
            this.age = age
        
    }
    sayhello() {
        console.log("helo boss welcome" , this.name)
    }


}

let biodata = new Person("ruban", 21)
console.log(biodata)
biodata.sayhello()

// inhertiance from class contructor using extends and super keyword

class student{
    constructor(name) {
        this.name = name
          
    }

    welcome() {
        console.log("hello Welcome" ,this.name )
    }
}

class info extends student{
    constructor(name,subject) {
        super(name),
            this.subject = subject
            
    }

    greets() {
        console.log("helo welcome to" ,this.name )
    }

}
 
let studinfo = new info("Justin", "chennai","React")
console.log(studinfo)
studinfo.welcome()
studinfo.greets()










// function contructor
function person(name, age) {
    this.name = name,
        this.age = age
}

person.prototype.sayhello = function () {
    console.log("helo boss" , this.name)
}

let greet = new person("ruban", 21)
console.log(greet)
greet.sayhello()