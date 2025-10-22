//If a function is part of object is called a method..
//this keyword refers to object that calls the method

let person = {
    name: "ruban",
    greet: function () {
        console.log("hello" , this.name)
    }
}
console.log(person.name)
person.greet()

let brand = {
    car: "tesla",
    bike: "honda",
    function: function() {
        console.log("This is new model car", this.car)
    }
}
brand.function()