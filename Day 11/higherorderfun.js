// Higher order function means that returns other function or 
// it takes another function as argument like callbacks

function multipy(a, b, operations) {
    return operations(a,b)
}
function operator(a, b) {
    console.log(a*b)
}
multipy(5, 5, operator)

function adds(a, b, callback) {
    return callback(a,b)
}
function addition(a,b) {
    return a+b
}
console.log(adds(5, 5, addition))
  

// here it is similar to callback but it is higher order function
function greet(name, greeting) {
    greeting(name)
}

const value = (name) => {
    console.log("hello" , name)
}
greet("jeni", value)


function evennum(arr, callback) {
   return callback(arr)
}
let even = (arr) => {
   return  arr % 2 == 0 ? `the Number is even ${arr}` : "odd Number"
    
}
console.log(evennum(4, even))

function oddnum(arr1, callback1) {
   return  callback1(arr1)
}

let odd = (arr1) => {
    let numbers = [];
    for (let oddnum of arr1) {
        if (oddnum % 2 !== 0) {
            numbers.push(oddnum)
           
        }
    }
    return `the numbers are ${numbers}`

}
console.log(oddnum([1, 23, 4, 5], odd))
