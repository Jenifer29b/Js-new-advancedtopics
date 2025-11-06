// remove duplicates using inbuilt method
let arr = [1, 2, 3, 4, 5, 3, 4, 2, 5]
console.log(...new Set(arr)) 

// foreach method
let fruits = ["apple", "Mango", "banana", "kiwi"]
fruits.forEach((fruit, index) => {
    console.log(`${fruit} : ${index}`)
}) 

// position of an array
console.log(arr.indexOf(2))
console.log(arr.lastIndexOf(2))

//Merge array

let fruit = ["custard", "pineapple"]
console.log(fruits.concat(fruit))