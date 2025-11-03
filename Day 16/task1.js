// here we can combine both map and filter

let arr1 = [1, 2, 3, 4, 5, 6]

let totalvalues = arr1.map((value) => value * 3).filter((value) => value % 2 == 0)
console.log(totalvalues)