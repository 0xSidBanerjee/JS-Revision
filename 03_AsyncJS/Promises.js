const fs = require("fs");
const { resolve } = require("path");
// function readFile(){
//     return new Promise((resolve)=>{
//         fs.readFile('a.txt', 'utf-8', (err,data)=>{
//             resolve(data);
//         })
//     })
// }

// function newFile(data){
//     console.log(data);
// }

// readFile().then(newFile);
// This is supposed to be a syntactical sugar for callbacks but also using promises instead we avoid something known as the callback hell.

function tangerine(filePath){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

async function lemon(){
    try{
        const value = await tangerine('a.txt');
        console.log(value);
    }
    catch(err){
        console.log(err);
    }
    
}