"use strict" //Treat all the JS code below as a newer version of JS

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof undefined); //undefined 
console.log(typeof null); //object

//Comparision of Datatypes(Tricky)
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
/* Why?
This happens cause JS treats null values differently
in comparision(> < >= <=) and equality operations:
In comparision, JS converts null to number 0
But in case of an equality check, this doesn't happens, 
hence it shows as false. But in case of >= it shows true.
*/

console.log("2"===2); //false for strict check

/*
- primitive and non primitive (call by value, call by reference)
- primitive:7 (call by value)
- string, number, bolean, null, undefined, symbol , BigInt
- non primitive:3 (call by reference)
- arrays, object, function 

- dynamically type vs statically type
- js is dynamically typed
- const id = Symbol("123")
- const anotherId = Symbol("123")
- id === anotherId => false
- array, object, function overview 
*/

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

const bigNumber = 276384632487364987634n;

const nations =['Air', 'Fire', 'Water', 'Earth'];
let myObj = {
    name: "Bruce Wayne",
    occupation: "World's Greatest Detective",
    age: 35,
}
const myFunction = function(){
    console.log("As it is written");
}