function greet(name, callback) {
    console.log("hello!!", name)
    callback()
}
function callback() {
    console.log("good bye")
}

greet("ruban" , callback)