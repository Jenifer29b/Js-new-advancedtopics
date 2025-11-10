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
addtask("leatning OOPS")
addtask("Learning HTML&CSS")
addtask("Learning Bootstarp")

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
markdone(5)
markdone(6)
showtask()

function deletetask(id) {
    let find = tasks.findIndex((value) => value.id === id)
    console.log(find)

    if (find !== -1) {
        tasks.splice(find, 1)
        console.log(`task is deleted ${find.name}` )
    } else {
        console.log("Contact not deleted")
    }
}

deletetask(1)
showtask()

function Showpending() {
    let search = tasks.filter((value) => value.done == false)
    console.log(search)
}
Showpending()

function Showfinished() {
    let showtask = tasks.filter((value) => value.done == true)
    console.log(showtask)
}
Showfinished()

