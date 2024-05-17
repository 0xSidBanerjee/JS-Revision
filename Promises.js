const fs = require("fs");
function readFile(){
    return new Promise((resolve)=>{
        fs.readFile('a.txt', 'utf-8', (err,data)=>{
            resolve(data);
        })
    })
}

function newFile(data){
    console.log(data);
}

readFile().then(newFile);
// This is supposed to be a syntactical sugar for callbacks but also using promises instead we avoid something known as the callback hell.