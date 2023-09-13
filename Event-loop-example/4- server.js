const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request event");
    console.log("2nd reuest");  // Requesting 2 times....
    res.end("HelloWorld")
})

server.listen(5000, () => {
    console.log("Server listening on port : 5000..........");
})

// We request the server again and again as we reload the page the log code gets printed on console.