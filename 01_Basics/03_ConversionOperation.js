let score = "Batman";

console.log(typeof score); // shows as string
console.log(typeof Number(score)); // shows as number
console.log(Number(score)); //but its an unsuccessful conversion, hence shows NaN

// When using the Number type conversion
// '33' => 33
// '33abc' => NaN
// true => 1, false => 0

// boolean type conversion
// 1 => true, 0 => false
// "" => false
// "Batman" => true

/* String conversion simply converts any respective 
datatypes to string
*/

// ***************** Operations *****************
let value = 3
let negValue = -value

console.log(negValue);

// Basic Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// Tricky Operations
console.log("1"+2+2) // 122
console.log(1+2+"2") // 32
console.log(1+2+true+"2") //42
console.log(1+2+"2"+true) //32true


/* The above scenario can be explained by the following:
The first datatype is assumed to be the default datatype,
hence all the remaining are by default treated as string 
and hence concatenated.
But in the second scenario the first data type being a number,
it treats rest datatypes as number too until it meets a string,
then after addition, it converts itself to a string and concatenates
with the remaining strings
*/

//Prefix and Postfix
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"