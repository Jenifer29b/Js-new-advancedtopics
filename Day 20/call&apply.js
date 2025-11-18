// Methods to set the vaule to this Manually call,apply,bind

//Call : calls function indivially , accepts arguments one by one

function greet(age) {
    console.log(`I am ${this.name} ${age} years old`)
}

greet.call({name : "ruban"},20)

 
let greet1 = {
    function() {
        console.log(`Hii I am ${this.name}`)
    }
}

greet1.function.call({name:"Jeni"})