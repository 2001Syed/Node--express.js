const {readFile} = require("fs");

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else{
                resolve(data);
            }
        })
    })
}

// getText("../Content/First.txt")
//     .then((result) => {console.log(result)})
//     .catch((err) => {console.log(err)}) 


const start = async () => {    // async ensures that the function returns a promise, and wraps non-promises in it.
    try {
        const first = await getText('../Content/First.txt');  //Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise. If the promise is rejected, the await expression throws the rejected value.
        const second = await getText('../Content/Second.txt');
        console.log(first , second);
    } catch (error) {
        console.log(error)
    }
}

start()