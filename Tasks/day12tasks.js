let student = {
    name: "jenifer",
    age: 21,
    grade : "A"
}
console.log(student)
student.school = "IHM"
console.log(student)

student.grade = "B"
console.log(student)
delete student.age 
console.log(student)

let car = {
    brand: "tesla",
    model: "model 1",
    getdetails: function () {
        console.log(`this is from ${this.brand} and ${this.model}`)
    }
}
car.getdetails()

let book = { title: "Atomic Habits", author: "James Clear", price: 499 };

let { title: newbook , price} = book
console.log(`book : ${newbook} ,Price: ${price}`)

let employee = {
    name: "ruban",
    salary: 21000,
    raisesalary(amount) {
        console.log("total salary :",this.salary+amount)
    }
}
console.log(employee)
employee.raisesalary(1000)
employee.raisesalary(2000)

let movie = {
    title: "title 1",
    realeaseyear : 2025,
    rating : 3.1
}

let { title, realeaseyear, rating } = movie
console.log(`this is ${title}, ${realeaseyear} with rating ${rating}`)

let bankaccount = {
    owner: "ruban",
    actualamount : 2000,
    depoist(amount) {
        console.log("total ammount :",this.actualamount + amount)
    },
    withdraw(amount) {
        console.log("balance ammount :",this.actualamount-amount)
    },
    
}
console.log(bankaccount)
bankaccount.depoist(1000)
bankaccount.withdraw(1000)
