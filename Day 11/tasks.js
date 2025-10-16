function calculate(arr, callback) {
    return callback(arr)
}

let value = (arr) => {
    let mutiplied = [];
    arr.forEach((num) => {
        mutiplied.push(num*3)
    })
    return `the Multiplied vaues are : ${mutiplied}`
}
console.log(calculate([1, 2, 3, 4, 5], value))



function filterarray(arr1, testfn) {
    return testfn(arr1)
}

let filtered = (arr1) => {
    let filteredvalue = [];
    arr1.forEach((num) => {
        if (num % 2 == 0) {
            filteredvalue.push(num)
        }
    })
    return `the Even Numbers are : ${filteredvalue}`
}
console.log(filterarray([1, 2, 34, 5, 46, 28, 50], filtered))


let fruits = ["apple", "Mango", "pineapple", "kiwi"]

fruits.forEach((fruit) => {
    console.log("the fruits are :" , fruit)
})