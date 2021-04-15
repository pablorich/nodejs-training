const fs = require("fs");

const message = "This is a new line\n";

fs.appendFile('Hello.txt', message, (err) => {
    if(err){
        console.error(err);
        return
    }
    console.log("Success")
})