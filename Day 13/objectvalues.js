// here are object.keys,object.values,object.entries
//keys : returned only the keys of the object as an array
//values : returned only the values of the object as an array
//entries : returned both keys and values of an object as an array


let person = {
    name: "ruban",
    age: 22,
    place: "madurai"
}
console.log(person) 
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(Object.entries(person));

for (let values of Object.values(person)) {
    console.log(`the values are ${values}`)
}


Object.keys(person).forEach((values) => {
    console.log(values)
})