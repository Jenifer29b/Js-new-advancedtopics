//object.freeze means we can't able to modify ,add or delete the exisiting porperty
//its immutable

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