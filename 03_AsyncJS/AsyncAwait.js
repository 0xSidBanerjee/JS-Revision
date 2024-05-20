// Promises work fine but async await just looks better
// Again, its a syntactical sugar, under the hood it uses Promises and Callback functions
const fs= require('fs');

function tangerine(){
    return new Promise((resolve)=>{
        fs.readFile('a.txt', 'utf-8', (err,data)=>{  //Or just use any async function
            resolve(data);
        })
    })
}

async function main(){
    const value = await tangerine();  // The thread is blocked here but it doesn't mean it is a sync function
    console.log(value);
}
// The above code is better than writing
// function main(data){
//     console.log(data);
// }
// tangerine().then(data);

main();