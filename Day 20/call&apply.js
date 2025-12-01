// Methods to set the vaule to this Manually call,apply,bind

//Call : calls function indivially , accepts arguments one by one
//syntax : function.call(thisarg,arg1,arg2)

function greet(age) {
    console.log(`I am ${this.name} ${age} years old`)
}

greet.call({name : "ruban"},20)

 
let greet1 = {
    function() {
        console.log(`Hii I am ${this.name}`)
    }
}

greet1.function.call({ name: "Jeni" })


function call(place,work) {
    console.log(`I am ${this.name},I lives in ${place} and I develop ${work}`)
}

let person = { name: "Ruban" }

call.call(person, "Madurai","Webdev")

//Apply :Same as Call but here the other arguments are taken as array
//syntax : function.apply(thisarg,[arg1,arg2])
call.apply(person, ["Madurai", "Webdev"])

//bind :  it doesn't call immediately instead it create a new function we have to call it.
//syntax : objname.function.bind(objname)
let info = {
    name: "Jenifer",
    place: "Madurai",
    details :function() {
       console.log(`Hello I am ${this.name} from ${this.place}`) 
    }
}


let student = info.details.bind(info)
student()


