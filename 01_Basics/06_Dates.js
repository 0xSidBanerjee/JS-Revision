let firstTimeStamp=Date.now();
let myDate = new Date();
console.table([myDate.toDateString(), myDate.toTimeString(), myDate.toLocaleDateString('en-In'), myDate.toJSON()]);

let createdDate=new Date("05-12-2024");
console.log(createdDate.toLocaleDateString("en-In"));
let secondTimeStamp=Date.now();
console.log(secondTimeStamp-firstTimeStamp); // Prints time taken to process the whole code in Milliseconds
