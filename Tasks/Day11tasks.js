//Callback Tasks

function dotwice(Name, fn) {
    fn(Name)
}
let call = (Name) => {
    for (let i = 1; i <= 2; i++){
        console.log("Hello!!" , Name)
    }
}
dotwice("Jeni", call)

//Task2
function logarray(arr, fn) {
    fn(arr)
}
let array = (arr) => {
    arr.forEach((number,index) => {
        console.log(`${index} : ${number}`)
    })
}
logarray(["apple", "Mango", "kiwi"], array)

// Higher Order Function Tasks

function multiplier(Value, fn) {
    return fn(Value)
}
let multiplied = (value) => {
    return value*5
}
console.log(multiplier(5, multiplied))

function applytoall(arr, fn) {
   return fn(arr)
}
let newarray = (arr) => {
    arr.forEach((value) => {
        console.log([value*3])
    })
    
}
applytoall([1, 2, 3, 4, 5], newarray)

//foreach tasks
function foreach(arr, cb) {
    return cb(arr)
}
let callback = (arr) => {
    arr.forEach((value, index,arr) => {
        console.log (`this is ${value} from ${index} in ${arr} `)
    })
}
(foreach([1, 2, 3, 4, 5], callback))

function myforeach(arr, fn) {
    return fn(arr)
}
let value = (arr) => {
    let array = [];
    arr.forEach((value, index) => {
        let multiple = value*index
        array.push(multiple)
    })
    return array
}
console.log(myforeach([1, 2, 3, 4, 5] , value))