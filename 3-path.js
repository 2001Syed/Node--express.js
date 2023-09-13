const path = require("path");

console.log(path.sep);  //it creates a separate path.

const filepath = path.join('/content','subfolder','test.txt');
console.log(filepath); //combines the path and gives us output ./content/subfolder/text.txt
                        //it doesnt matter weather the path is available ornot.so wehave togive the correct path

const base = path.basename(filepath);
console.log(base); //Basename gives the last file name in the path.

const absolute = path.resolve(__dirname,'/content','subfolder','test.txt');
console.log(absolute); //this gives the path to the last test.txt and full path. this is required in js because we gotta work in indifferent enivronment in the same computer.

