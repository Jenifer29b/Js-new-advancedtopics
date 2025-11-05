let sentence = "I Love Javascript"
let words = sentence.split(" ")
let length = words.length
console.log(length)
console.log(words)

let word = "Not Every Good is Good"
let replace = word.replace("Good", "Bad")
console.log(replace)

let string = "  Hello World   "
let trim = string.trim()
console.log(trim)

let num = "5"
let padst = num.padStart("3", "0")
console.log(padst)

let str = "Javascript"
let checkin = str.includes("script")
console.log(checkin)

let name = "jenifer"
let learn = "javascript"

console.log(`hii, My name is ${name} .. I love to learn ${learn}`)

let sen = " welcome to javascript learning, jenifer "

let trimrep = sen.trim().replace("javascript", "js")
console.log(trimrep)

let titlecase = sen.trim().split(" ").map((word) => word.charAt(0).toUpperCase()+ word.slice(1)).join(" ")
console.log(titlecase)

