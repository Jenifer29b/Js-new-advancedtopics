// here we can combine both map and filter

let arr1 = [1, 2, 3, 4, 5, 6]

let totalvalues = arr1.map((value) => value * 3).filter((value) => value % 2 == 0)
console.log(totalvalues)

// sum calculator

let numbers = [11, 22, 33, 55, 66, 88, 99, 100]

let sum = numbers.reduce((prev, curr) => {
    return (prev+curr)
})
console.log(sum)

//word calcuator

let word = "apple mango apple banana mango apple kiwi"
let words = word.split(" ")

let counts = words.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
}, {})
console.log(counts)

let names = "Jenifer"


let count = names.split('').reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
},{})
console.log(count)