let num = [2, 4, 6, 8, 10]

let multiple = num.map((value) => value * 2)
console.log("Mapped value", multiple)

let string = ["apple", "banana"]

let uppercase = string.map((value) => value.toUpperCase())
console.log("uppercase", uppercase)

let names = [{ name: "Jen" }, { name: "Tom" }]

let Mappedname = names.map((value) => value.name)
console.log("Mapped Name" , Mappedname)

let number = [10, 20, 30] 

let sum = number.reduce((acc, cur) => {
    return acc+cur
}, 0)
console.log(sum)

let fruits = ["apple", "banana", "apple"]

let total = fruits.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
}, {})
console.log(total)

let number1 = [5, 10, 8] 

let findmax = number1.reduce((prev, curr) => {
    return (prev > curr ? prev : curr)
}, 0)
console.log(findmax)

let array = [[1, 2], [3, 4]] 

let concat = array.reduce((prev, curr) => 
  prev.concat(curr)  
,[])
console.log(concat)

let obj = [{ age: 20 }, { age: 30 }, { age: 15 }] 

let filterage = obj.filter((value) => value.age >= 20)
console.log(filterage)


let number2 = [1, 2, 3, 4, 5, 6, 7]

let even = number2.filter((value) => value % 2 == 0).length
console.log(even)

let age = [{ name: "michael", age: 20 }, { name: "jeni", age: 30 }, { name: "ruban", age: 15 }]

let findage = age.filter((value) => value.age > 18)
let upper = findage.map((value) => value.name.toUpperCase())
console.log(findage)
console.log(upper)

let marks = [90, 80, 70, 60, 50, 40, 30, 20, 10]

let passmark = marks.filter((value) => value > 35).reduce((prev,curr) => prev+curr)
console.log(passmark)