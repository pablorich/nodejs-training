const http = require("http");
const fs = require("fs");

const HOSTNAME = process.env.HOSTNAME || "localhost"
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode=200;
    res.setHeader("Content-Type", "text/plain");
    fs.readFile('HelloWorld.js', (err, data) => {
        if(err){
            console.error(err);
            res.end(err);
            return
        }
        console.log(data.toString())
        res.end(data.toString());
    })
})

server.listen(PORT,HOSTNAME, ()=> {
  console.log(`Server running ${HOSTNAME}:${PORT}`);
})