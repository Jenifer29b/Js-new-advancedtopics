let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((value) => value * 2)
console.log(doubled)

let nums = [9, 16, 25];

let squareroot = nums.map((value) => Math.sqrt(value))
console.log(squareroot)

let words = ["apple", "banana", "kiwi"];

let length = words.map((value) => value.length)
console.log(length)

let names = ["jenifer", "tom", "michael"];

let addstr = names.map((value) => "hello " + value)
console.log(addstr)

let users = [
  { name: "Jen", age: 20 },
  { name: "Tom", age: 25 },
  { name: "Bob", age: 30 }
];

let name = users.map((value) => value.name)
console.log(name)

let sentence = "learning javascript is fun";

let titlecase = sentence.split(" ").map((word) => word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
console.log(titlecase)

let number = [10, 20, 30];

let str = number.map((value) => "value is "+ value)
console.log(str)

let marks = [35, 60, 80, 25, 90];

let filter = marks.filter((value) => value > 40).map((value) => "passed with "+value)
console.log(filter)

let prices = [100, 200, 300];

let tax = prices.map((value) => value + 0.1*value).reduce((prev,curr) => prev+curr).toFixed(0)
console.log(tax)

let people = [
  { name: "Jenifer", age: 17 },
  { name: "Tom", age: 22 },
  { name: "Rose", age: 19 }
];

let filtername = people.filter((value) => value.age > 18).map((value) => value.name.toUpperCase())
console.log(filtername)