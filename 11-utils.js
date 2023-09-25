const {readFile, writeFile} = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./Content/First.txt', 'utf8');
        const second = await readFilePromise('./Content/Second.txt', 'utf8')
        await writeFilePromise("./Content/result-mind-grenade.txt" , `This is a util file ${first} , ${second}`, {flag:"a"}) // Flag:"a" appends the file to the exixting file
        console.log(first, second);

    } catch (error) {
        console.log(error);
    }
}

start();