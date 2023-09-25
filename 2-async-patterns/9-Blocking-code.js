const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home page");
    }
    if (req.url === "/about") {
        // Blocking Code
        for (let i = 0; i < 1000; i++) {       
            for (let j = 0; j < 1000; j++) {  // as this for loop gets started and we think that only "/about" url gets time to load but all the urls takes time till the for statement gets executed. this is why we prefer asynchronous methods.
            console.log(`${i} ${j}`); 
            }     
        }
        res.end("About Page");
    }
    // res.end("ErprrPage");
})

server.listen(5000);

