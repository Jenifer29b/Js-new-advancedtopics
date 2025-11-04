// slice : Returns a shallow copy of an orginal array into a new array without modifying the original array.
// It takes two parameters: the start index and the end index..
// It works with both array and string but the parameter should be numeric

let numbers = [1, 2, 3, 4, 5, 6, 7]
let slice = numbers.slice(2, 5)
console.log("Sliced Numbers :", slice)
console.log("Original Array :", numbers)

let string = "HelloWorld"
let sliceword = string.slice(5, 9)
console.log("slicedword :",sliceword)

// splice : Changes the contents of an array by removing or replacing existing elements  or adding new elements.
// It takes  multiple parameters: the start index , end index and the number of items to remove/add.
// it deletes the value by given condition and returns the remaining value.. not deleted value
// it modifies the original array.

let fruits = ["apple","mango","banana","kiwi","orange"]
fruits.splice(1, 2) // after deleting mango and banana 
console.log("removing splice Method", fruits) // it returnd other remaining fruits

let fruits1 = ["apple","mango","banana","kiwi","orange"]
fruits1.splice(1, 2,"custardapple")
console.log("replace using splice", fruits1)

let fruits2 = ["apple", "mango", "banana", "kiwi", "orange"]
fruits2.splice(2, 0, "pineapple")
console.log("Adding using splice:",fruits2)
