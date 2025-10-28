let colors = ["red", "green"];
colors.push("blue")
colors.unshift("yellow")
colors.pop()
colors.shift()
console.log(colors)

let history = [];
history.push("home")
history.push("about")
history.push("education")
console.log(history, [history.length])
console.log("current page :", history[history.length - 1])
history.pop()
console.log("current page :", history[history.length - 1])

let queue = [];
queue.push("customer 1")
queue.push("customer 2")
queue.push("customer 3")
queue.push("customer 4")
console.log("Customer on line :", queue)
queue.shift()
console.log("Customer after:", queue)

let managelist = [];

function adding(addstart) {
    managelist.unshift(addstart)
}
adding("banana")

function inend(addend) {
    managelist.push(addend)
}
inend("mango")

function removestart() {
    managelist.shift()
}
removestart()

function remeoveend() {
    managelist.pop()
}
remeoveend()



console.log(managelist)