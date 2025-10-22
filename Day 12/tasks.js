let person = {
    name: "ruban",
    age: 27,
    city:"Madurai"
}
console.log(person)

person.hobby = "reading"
console.log(person)
//update
person.city = "chennai"
console.log(person.city)
//delete
delete person.hobby
console.log(person)



let laptop = {
    brand: "HP",
    price: 55000,
    color: "silver"
};

let { brand, price } = laptop
console.log(brand, price)

let { price : cost } = laptop
console.log(cost)
laptop.cost = laptop.price
console.log(laptop.cost)