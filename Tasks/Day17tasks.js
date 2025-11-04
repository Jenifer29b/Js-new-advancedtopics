let nums = [1, 2, 2, 3, 4, 4, 5];
// Expected → [1, 3, 5]
let unique = nums.reduce((prev, curr)=>{
    prev[curr] = (prev[curr] || 0) + 1
    return prev
},{})
console.log(unique)

let findunique = nums.filter((value) => unique[value] === 1)
console.log(findunique)

const scores = [45, 60, 90, 85, 100, 70];
// Expected → [100, 90, 85]

let findMax = scores.filter((value) => value > 70)
let sort = findMax.sort((a,b) => b - a)
console.log(sort)

const users = [{age: 18}, {age: 25}, {age: 17}];
// Expected → false (because one is 17)

let checkin = users.every((value) => value.age > 17)
console.log(checkin)

const numbers = [2, 5, 8, 11, 14];
// Expected → 3

let checkeven = numbers.reduce((count, curr) => {
    if (curr % 2 === 0) {
        count ++
    }
    return count
    
},0)
console.log(checkeven)

let num = [1, 2, 3, 4, 5]

let reverse = [];
 


while (num.length > 0) {
    let remove = num.pop()
reverse.push(remove)
}
console.log(reverse)



