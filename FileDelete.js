const fs = require("fs");

fs.unlink('Hello.txt', (err) => {
    if(err){
        console.error(err);
        return
    }
    console.log("Deleted")
})