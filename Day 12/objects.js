//object is a used to store a key-value pair data.

let person = {
    "name": "ruban",
    "age": 22,
    "place" : "Madurai"
}
console.log(person.name) // caling object using dot notation
console.log(person["age"]) // and also using array with "" these

//adding , modify and deleting the data 

person.hobby = "reading" // adding new data into the obj person
console.log(person.hobby)
person.age = 27  // modify the existing data in obj person
console.log(person.age)
console.log(person)
delete person.place  // delete the existitng data in obj person
console.log(person.place)
console.log(person);
