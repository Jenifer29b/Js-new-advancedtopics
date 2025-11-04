let nums = [10, 25, 60, 70, 20];

let firstmax = nums.find((value) => value > 50)
console.log("First Max :", firstmax)

let arr = [4, 9, -2, 7, 12];

let checkneg = arr.some((value) => value < 0);
console.log("check Negative :" , checkneg)

let arr1 = [2, 4, 6, 8, 10];

let checkall = arr1.every((value) => value > 0)
console.log("check all positive :",checkall)

let fruits = ["mango", "banana", "apple", "grape"];

let checkin = fruits.includes("apple")
console.log("checkin :",checkin)

let fruits1 = ["mango", "banana", "apple", "grape"];

let copyfrom = fruits1.slice(1, 3)
console.log("copy slice :",copyfrom)

let fruits2 = ["mango", "banana", "apple", "grape"];
// expected final array → ["mango", "kiwi", "orange", "grape"]
fruits2.splice(1,2,"kiwi","Orange")
console.log("adding and removing splice :", fruits2)

let scores = [70, 88, 95, 60, 99, 85];
// expected → true (some >90)
// top 3 → [70, 88, 95]
let findsome = scores.some((value) => value > 90)
let slice = scores.slice(0,3)
console.log(" some :", findsome)
console.log(" slice :", slice);

let number = [1, 2, 3, 4, 5] 
number.splice(2, 1)
console.log("remove using splice:",number)