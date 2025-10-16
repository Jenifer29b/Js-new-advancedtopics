let fruits = ["apple", "Mango", "kiwi"]

fruits.forEach((fruit , index) => {
    console.log(`${index} : ${fruit}`)
})

function multipled(arr2, callback2) {
    return callback2(arr2)
}

let multiple = (arr2) => {
    let multinum = [];
    arr2.forEach((num) => {
        multinum.push(num*2)
    })
    return `the mutiplied numbers are ${multinum} `
}
console.log(multiple([1, 2, 3, 4, 5] , multiple))