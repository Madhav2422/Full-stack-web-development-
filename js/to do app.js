let todo = [];
let req = prompt("Please enter your request");

while (true) {
    if (req == "quit") {
        console.log("Quit");
        break;
    }

    if (req == "list") {
        console.log("---------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("---------------");

    }

    else if (req == "add") {
        let task = prompt("Enterr enter your task ");
        todo.push(task);
        console.log("tasks addes");


    }
    else if (req == "delete") {
        let del = prompt("Enter index you want to delete ");
        todo.splice(del, 1);
        console.log("Task deleted");
    }
    else {
        console.log("wrong request");
    }
    req = prompt("Please enter your request");

}