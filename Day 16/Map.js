//map in array returned new array by applying a function to each element in an original array
//map doesn't modify the original array .. it only returned new array

let arr = [1, 2, 3, 4, 5]

let double = arr.map((value) => value * 2)
console.log("Double Values",double)
console.log("Orginal Array" ,arr)

let arr1 = [1, 2, 3, 4, 5]

let divide = arr1.map((value) => value % 2 == 0)
console.log("Divided Value", divide)

