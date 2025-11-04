//Map Method

let numbers = [1, 2, 3, 4, 5]

let double = numbers.map((value) => value * 2)
console.log("Double Number :", double)

let words = ["apple", "mango", "banana"]

let uppercase = words.map((word) => word.toUpperCase())
console.log(uppercase)

// filter Method
let nums = [2, 3, 4, 5, 6, 7, 8]

let evennum = nums.filter((value) => value % 2 == 0);
console.log("Even Numbers :", evennum)

let names = ["Jen", "Michael", "Sara", "John", "Chris"];

let count = names.filter((value) => value.length > 4 )
console.log("Higher Count Names:",count)

// reduce method

let prices = [100, 1000, 2000, 3000, 5000, 600, 800, 9000]

let sumprice = prices.reduce((prev, curr) => {
    return prev+curr
})
console.log("Total Price :", sumprice)

let nums1 =  [5, 12, 7, 25, 9];

let maxvalue = nums1.reduce((prev, curr) => {
    return (prev > curr ? prev : curr);

},0)
console.log("Maximum Value :", maxvalue)

let text = "apple banana apple mango banana apple";
let texts = text.split(" ")

let counts = texts.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
}, {})
console.log("Counts of an array:", counts)

let scores = [80, 90, 100, 70];

let average = scores.reduce((prev, curr) => prev + curr) / scores.length
console.log( "Average :",average)

// Combining Map and filter

let nums3 = [1, 2, 3, 4, 5, 6];

let both = nums3.filter((value) => value % 2 == 0).map((value) => value*2)
console.log("combining Both :", both)

let users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Chris", age: 25 },
  { name: "David", age: 15 }
];

let user = users.reduce((prev, curr) => {
    prev.push([curr.age] > 18)
    return prev
}, [])
console.log(user)

// From this array, double only the numbers greater than 5
let number = [2, 5, 8, 10, 3, 7];

let boths = number.filter((value) => (value >= 5)).map((value) => value*2)
console.log(boths)

