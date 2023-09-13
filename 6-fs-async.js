const {readFile, writeFile} = require("fs");

console.log("Starting of Async fs");
readFile("./content/First.txt","utf-8", (err, result)=> {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;
    readFile("./content/Second.txt","utf-8", (err, result)=> {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./content/result-async.txt", `Hello: ${first} ${second}`,(err, result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log("Done Writing File");
        })
    })
})

console.log("Starting New Task")

// In async file system the read and write files tasks are offload and the last console.log gets executed and then parllely the read and write tasks are done and we get the output.
// overall, It Doesnt wait for the task to complete and directly goes to next tasks.

// alternative to this is using promises and async await.
