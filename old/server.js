const http = require("http");
const fs = require("fs");

const HOSTNAME = process.env.HOSTNAME || "localhost"
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let path = './htmlFiles/';
    switch(req.url){
        case "/":
            path += "index.html";
            res.statusCode=200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode=200;
            break;
        default:
            path += "404.html";
            res.statusCode=404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.error(err);
            res.end(err);
            return;
        }
        res.end(data.toString());
    })
})

server.listen(PORT,HOSTNAME, ()=> {
  console.log(`Server running ${HOSTNAME}:${PORT}`);
})