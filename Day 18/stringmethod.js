//split : converts the string into into array characters

let string = "apple , banana, Mango , kiwi"
const array = string.split(",")
console.log(array)

// replace : replace the first value with the replace string .. it is only first value
// replaceall : replace all the values with replace string
// we cal also use replaceall instead of /replace string/g regex

let sentence = " I love Cats Cats"
let replace = sentence.replace(/Cats/g, "dogs")
console.log(replace)

let sen = "I Love React React"
let rep = sen.replace("React", "DOM")
console.log(rep)

// trim : removes the extra space in both ends

let name = "  Ruban   "
console.log(name.trim())

//padstart and padend : add the number in start or end to make a desired length

let num = "7";
console.log(num.padStart(3, "9"))
console.log(num.padEnd(3,"0"))