let tasks = []

function addtask(title) {
    let task = {
        id: tasks.length + 1,
        name: title,
        done : false
   }
    tasks.push(task)
    console.log(`Task added : ${title}`)
}



addtask("learning Javascript")
addtask("learning react")
addtask("learning database")

function showtask() {
    for (let task of tasks) {
        console.log(`id: ${task.id} title : ${task.name}`)
    }
}
showtask()


