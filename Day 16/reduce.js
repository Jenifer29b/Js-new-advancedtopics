// reduce in js is used to combining all elements and transform into single item


let array = [1, 2, 3, 4, 5]

let reduceval = array.reduce((prev, curr) => prev + curr);
console.log(reduceval)  

let arr = [11, 22, 33, 44, 55]

let reducenum = arr.reduce((prev, curr) => {
    return (prev+curr)
})
console.log(reducenum)

// Finding average
let numbers = [11, 33, 44, 55, 88, 99]

let average = numbers.reduce((prev, curr) => prev + curr) / numbers.length
console.log("Finding average : " ,average)

// Min and Max
let num = [1, 11, 33, 55, 77, 99, 100]

let maxvalue = num.reduce((prev, curr) => prev > curr ? prev : curr, 0)
console.log("Maximum value using reduce :",maxvalue)

let minvalue = num.reduce((prev, curr) => prev < curr ? prev : curr)
console.log("Minimum Value using reduce :", minvalue)

// reduce in array into another array

let arr2 = [11, 22, 33, 44, 55]

let arrnum = arr2.reduce((prev, curr) => {
    console.log(curr)
    
    prev.push(curr * 2)
    return prev
}, [])
console.log(arrnum)

// transform array of objects into array

let obj = [
    { name: "Jeni", place: "Madurai" },
    { name: "ruban", place: "Madurai" },
    { name: "Justin", place: "Chennai" }
]
let intoarr = obj.reduce((prev, curr) => {
    prev.push(curr.name)
    return prev
},[])
console.log(intoarr)

// transform array into obj

let arr3 = [11, 22, 33, 44, 55]

let intoobj = arr3.reduce((prev, curr, index) => {
    prev[index] = curr
    return prev
}, {} )
console.log(intoobj)

// count no.of.elements

let fruits = ["apple", "Mango", "apple", "Mango", "apple", "banana"]

let count = fruits.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
}, {})
console.log(count)