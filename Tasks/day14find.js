let animals = [
    { id: 1, name: "lion", lives: "forest" },
    { id: 2, name: "tiger", lives: "forest" },
    { id: 3, name: "dog", lives: "home" },
    { id: 4, name: "cat", lives: "home" },
    {id : 5 ,name : "fish",lives : "sea"}
]
console.log(animals)

//find is used to find one particular items

let animal = animals.find((ani) => ani.id == 2)
console.log(animal)

//filter is used to find group of item 
let ani = animals.filter((animal) => animal.id <= 3)
console.log(ani)