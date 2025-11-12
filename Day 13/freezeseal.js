//object.freeze means we can't able to modify ,add or delete the exisiting porperty
//its immutable
//object.freeze is shallow freeze which means nested properties are still mutable
let car = {
    brand: "honda",
    model: "model1",
    year : 2025
}
Object.freeze(car)

delete car.year
console.log(car)

car.brand = "tesla"
console.log(car.brand)

//shallow freeze of obect.freeze

let student = {
    name : "Jeni",
    age : 21,
    place : "Chennai",
    address : {
        country : "India",
        city : "madurai"
    }
}


Object.freeze(student)
student.grade = "A"
console.log(student)
student.address.city = "Banglore"
console.log(student.address.city)

//object.seal means we can modify the exisitng porperty but we can't able to delete or add any item
// it mutable only exisitng item
let student = {
    name: "justin",
    age: 18,
    place : "chennai"
}
console.log(student)
Object.seal(student)

student.age = 20
console.log(student)

delete student.place
console.log(student)