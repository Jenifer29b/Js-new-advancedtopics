let student = {
  name: "Jenifer",
  age: 22,
  course: "Full Stack Development",
  marks: 88
};
for (let values of Object.entries(student)) {
      console.log(values)
}

let car = { brand: "Tata", model: "Nexon", price: 1200000 };
let keys = Object.keys(car).length
console.log(`This object has ${keys} properties `)

let product = {
    name: "frock",
    mode: "online",
    platform: "amazon",
    price : 1200
}
Object.seal(product)
//it works
product.price = 1500
console.log(product)
// these are not worked
delete product.price
console.log(product)

product.anotheritem = "midi"
console.log(product)

let user = {
  name: "Ruban",
  address: { city: "Madurai", pin: 625001 }
};
Object.freeze(user)

user.address.city = "chennai"
console.log(user)