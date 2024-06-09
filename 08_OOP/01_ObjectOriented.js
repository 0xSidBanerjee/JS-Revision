// JS actually doesn't have classes, though classes was introducted in ES6
// But actually JS is a prototype based language
// And classes are simply syntactic sugar over existing prototype-type based inheritance mechanisms

// What is am object
// Collection of properties and methods

// 4 pillars
// Abstraction Encapsulation Inheritance Polymorphism

// Parts of OOPS
// Object literal {}

// Constructor function => Gives us a new instance 
function userDetails(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this;
}

const user1=new userDetails("Sidoryx", 12, true);
const user2=new userDetails("Sherlock", 221, false);
console.log(user1);
console.log(user2);

// Prototypes
// Classes
// Instances (new, this)