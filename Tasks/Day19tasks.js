class Teacher{
    constructor(name) {
        this.name = name
    }
}

class Person extends Teacher{
    constructor(name, subject,age) {
        super(name)
        this.subject = subject
        this.age=age
    }
    teach() {
        console.log("My teacher" , this.name,"Mam teaches" , this.subject)
    }
    getageinMonths() {
        console.log("age :" , this.age)
    }
}


let details = new Person("Jeni","React",21)
console.log(details)
details.teach()
details.getageinMonths()


class animal{
    constructor(name, sound) {
        this.name = name,
            this.sound = sound
    }
    bark() {
        console.log("dog is barking")
    }
}
class bird extends animal{
    constructor(name,sound) {
        super(name,sound)
    }
    fly() {
        console.log("bird will fly")
    }
}


let info = new bird("dog", "bark")
console.log(info)
info.bark()
info.fly()