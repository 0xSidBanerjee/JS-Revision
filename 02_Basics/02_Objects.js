// Object can be declared either as a literal or as a constructor
// When making an object using a constructor then its a singleton (unique)

// Object.create //Constructor Method

const mySymbol = Symbol("Bats");

const User = {  //Object Literal
    name: "Bruce Wayne",
    age: 21,
    [mySymbol]: "Bat Sign",
}

//How to access objects
console.log(User["name"]);
console.log(User[mySymbol]);


// const tinderUser = new Object(); // Another way of creating objects using constructor, hence this is a singleton object
const tinderUser = {} //Same thing as above but this is a non-singleton object
tinderUser.id = "42369dfq";
tinderUser.name = "Daniel Park";
tinderUser.isLoggedIn = false;

const anotherUser = {
    id1: "123abc",
    name1: "Crystal Choi",
    isLoggedIn1: true,
}

const allUsers=Object.assign({}, anotherUser, tinderUser); 
// If we don't use {} then anotherUser will be treated as the target object and its value will be modified

const all_Users={...anotherUser, ...tinderUser};
console.table(all_Users);
console.log(Object.keys(allUsers));

// Object Destructuring
const {isLoggedIn1: log} = anotherUser;
console.log(log);