const {readFile} = require("fs");

console.log("Starting of Async fs");
readFile("../content/First.txt","utf-8", (err, result)=> {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("completed First task")
})

console.log("Starting Second Task")
// Starting of Async fs ----> first console-log statement
// Starting Second Task -------> Second task is getting started.    
// This is the first text file----> First task result
// completed First task  -------> Completion of First task

// Here second task is already started before the first task completion.

