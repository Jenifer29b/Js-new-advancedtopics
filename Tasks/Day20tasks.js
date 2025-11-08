class calculate{
    constructor(_radius) {
        this._radius=_radius
    }

    set radius(value) {
        if (value < 0) {
            console.log("Vaue cannot be accepted")
        } else {
            this._radius = value
            console.log("Raidus of circle", (Math.PI*this._radius**2).toFixed(2))
        }
    }
}
let circle = new calculate(30)

circle.radius = 20
console.log(circle) 

class Student{
    constructor(firstname, lastname) {
        this.firstname = firstname,
            this.lastname=lastname
    }

    get names() {
        console.log(`${this.firstname} ${this.lastname}`)
    }
    set caps(names) {
        this.firstname, this.lastname = names
        console.log("the names are" , names)
    }
}

let details = new Student("jeni", "ruban")
console.log(details)

details.names
details.caps = "Jeni" 
console.log(details)


class captilize{
    constructor(name1,name2) {
        this.name1 = name1,
            this.name2=name2
    }

    set Caps(name) {
        let sep = name.split(" ")
        let first = sep[0].charAt(0).toUpperCase() + sep[0].slice(1)
        console.log(first)
        let last = (sep[1].charAt(0).toUpperCase() + sep[1].slice(1))
        console.log(last)
        let total = [first,last].join(" ")
        console.log(total)
    }
}

let after = new captilize("jeni", "ruban")
console.log(after)

after.Caps = "justin aaron"