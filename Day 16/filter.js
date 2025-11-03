// filter in array means it filterout the elements from the given array
// filter returns the new array only when the given condition is true 

let array = [1, 2, 3, 4, 5]

let evennum = array.filter((value) => value % 2 ===0)
console.log("filtered value:", evennum)

let arr = [13, 12, 15, 23, 26, 28, 47, 88, 99]

let oddnum = arr.filter((value) => value % 2 !== 0);
console.log("Odd Numbers : ",oddnum)