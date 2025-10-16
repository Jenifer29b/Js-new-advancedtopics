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
greet("jeni" , value)