let student = {
    name: "ruban",
    age: 20,
    place: "madurai",
    mark : 40
}
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

let car = {
    brand: "honda",
    model: "model1",
    year : 2025
}
Object.seal(car)

car.year = 2023
console.log(car.year)

car.owner = "tata"
console.log(car.owner)

delete car.year
console.log(car)

let book = {
    name: "remeojuliet",
    year: 1998,
    price : "$125"
}
Object.freeze(book)

book.price = "$150"
console.log(book)

for (let values of Object.entries(book)) {
    console.log(values)
}