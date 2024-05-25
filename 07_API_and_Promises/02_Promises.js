const promise1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Timer 1 completed");
        resolve();
    },1000)
})
promise1.then(()=>{
    console.log("Promise 1 completed");
})
// async function tangerine(){
//     try{
//         const value = await promise1;
//         console.log(value);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Timer 2 completed");
        resolve(); // Unless we call the resolve function, the then task won't be completed
    }, 1000)
}).then(()=>{ //then is closely related to resolve
    console.log("Promise 2 resolved");
})


new Promise((resolve, reject)=>{
    resolve({username: "Mandalorian", occupation: "Bounty Hunter"});
}).then((user)=>{
    console.log(`${user.username}`);
})


// Promise Four
new Promise((resolve, reject)=>{
    const error=true;
    if(error){
        reject("Something went wrong");
    }
    else{
        const data= "Lol no err";
        resolve(data);
    }
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Promise was either rejected or resolved");
})

// Promise Five
const promise05= new Promise((resolve, reject)=>{
    const err=false;
    if(err){
        reject("Something in the way");
    }
    else{
        resolve({name: "Gru", occupation: "Supervillian"});
    }
})

async function resolvePromise5(){
    try{
        const value = await promise05;
        console.log(value.occupation);
    }
    catch(err){
        console.log(err);
    }
}
resolvePromise5();


// fetch 
async function resolveFetch(){
    try{
        const resolve= await fetch("https://api.github.com/users/0xSidBanerjee");
        const value = await resolve.json(); // Why not JSON.parse?
        console.log(value.followers);
    }
    catch(err){
        console.log(`E: ${err}`);
    }
}
resolveFetch();

fetch("https://api.github.com/users/0xSidBanerjee").then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data.login);
}).catch((err)=>{
    console.log(err);
})