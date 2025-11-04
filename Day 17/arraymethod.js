// Array Methods :
// find : returns only the first value that satisfies the condition .. if no element matches returns undefined
// some : returns checks atleast one element that satisfies the given condition .. if one element that pass
// it returns true .. some returns only boolean value.
// Every : returns true only every element pass the given condition.either one value is didn't pass it returns false
// it also return boolean value
// Includes : checks whether the given value is in array or not .. if it is there returns true or false

// find Method :
let numbers = [11, 33, 55, 77, 88, 44]

let max = numbers.find((value) => value > 50)
console.log("find Method:", max)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = num.map((value) => value * 2).find((value) => value > 15)
console.log("Max Value:", sum)

// Some Method : returns either true or false

let some = numbers.some((value) => value % 2 == 0);
console.log("Some Method:", some)

// Every Value : All should pass the given condition

let every = numbers.every((value) => value % 3 == 0);
console.log("Every Method:",every)

// Includes : contains or not

let fruits = ["Apple", "Mango", "Banana", "Kiwi"]
let includes = fruits.includes("Mango")
console.log(includes)