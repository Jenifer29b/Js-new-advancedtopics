class Employee{
    constructor(name, _salary) {
        this.name = name,
             this._salary=_salary
    }

    set captial(word) {
        let caps = word.charAt(0).toUpperCase() + word.slice(1)
        console.log(caps)
        this.name = caps
    }

    set salary(value) {
        if (value < 0) {
             console.log("salary cannot be negaitve")
        } else {
            this._salary = value
            
         }
    }
}

let details = new Employee("justin", 25000)
console.log(details)

details.captial = "justin"
details.salary = 23000

console.log(details)

class Product{
    constructor(name, price) {
        this.name = name,
            this.price = price
    }

    set caps(value){
        let captilize = value.charAt(0).toUpperCase() + value.slice(1)
        console.log(captilize)
        this.name = captilize
    }

    get tax() {
        let aftertax = this.price * 0.9
        console.log(aftertax)
        this.price = aftertax
    }
}

let productinfo = new Product("dress", 15000)
console.log(productinfo)

productinfo.caps = "frock"
productinfo.tax

console.log(productinfo)