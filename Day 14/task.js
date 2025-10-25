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
        console.log(`id: ${task.id} title : ${task.name} done : ${task.done}`)
    }
}
showtask()


function markdone(id) {
    let task = tasks.find((taskid) => taskid.id === id)
    if (task) {
        task.done = true;
        console.log(`task is already done ${task.name}`)
    } else {
        console.log("task not found")
    }
}
markdone(1)
showtask()

