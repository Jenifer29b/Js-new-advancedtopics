let student = {
    name: "jenifer",
    age: 20,
    course : "Web Javascript"
}
console.log(student.name)

//object destructing in object
let { name: surname } = student 
 
console.log(surname)

student.surname = "ruban"
console.log(student.surname)