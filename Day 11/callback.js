// callback is function in Javascript that takes as an argument by other function .. 
// another function taskes this function as an argument  and exceutes it 


// normal calback function with user given names
function greet(name, callback) {
    console.log("hello!!", name)
    callback()
}
function callback() {
    console.log("good bye")
}
greet("ruban", callback)

// callback with user given age by passing the arguments to callback
function number(age, callback) {
    console.log("hii I am ruban")
    callback(age) // age is passed to another function by using callback
}
function hello(age) {
    console.log(`my age is ${age}`) // that passed age i collected by this function
}
number(20, hello)


// callback function using accessing the inside objects
function obj(callback) {
    let variables = {
        "name": "ruban",
        "age" : 21
    }
    callback(variables)
}
let objvar = (variables) => {
    console.log(`Hiii!! I am ${variables.name}.. I am ${variables.age} years old `)
}
obj(objvar)

//callback function that accessing the array
function arr(callback) {
    let num = [1, 2, 3, 4, 5]
    callback(num)
}
let array = (num) => {
    for (arrnum of num) {
        console.log(arrnum*3)
    }
}
arr(array)