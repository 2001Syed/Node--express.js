const {readFileSync, writeFileSync} = require("fs");
// ----------------------------------------
// const fs = require("fs");
// fs.readFileSync();
// the Above method and below methods are same as to access the readFileSync in fs module.
console.log("Starting the FileSystem")
const first = readFileSync("./content/First.txt","utf-8");
const second = readFileSync("./content/Second.txt","utf-8");

console.log(first, second);

writeFileSync("./content/result-sync.txt", `Hello ${first} ${second}`, {flag : 'a'});// this add the first.txt and second.txt to the result-sync.txt
// flag : a appends the file to the exixsting file.
console.log("Done with the file system")
console.log("Starting with the next file.")