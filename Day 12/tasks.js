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

let user = {
    name: "ruban",
    sayhii : function () {
        console.log("hii I am",this.name)
    },
    changename: function () {
        let { name : surname } = user
        console.log(surname)
    } 
}
user.sayhii()
user.changename()

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