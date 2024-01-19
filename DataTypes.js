//  primitive 7 types
// String, Number, Boolean, null, undefined, Symbol BigInt,

const score = 100;
const scoreValue = 100.5;
const IsloggedIn = false;
const outsideTemp = null;
let userEmail

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId); // it returns false bcooz symbol is unique identifiers for different users.

const bigNumber = 8767657956757078n;


// Refrence Types/ non Primitive types
// Types: Array, Objects,Functions,
// Array
const vehicles = ["car", "jeeeb", "van"];

// Objects
let myObj = {
    name: "car",
    color:"White",
    price: "12 lac",

    myFunction: function(){
        const hello = {
            name:"nested",
            myFunction2: function(){
                const anotherObj = {
                    name:"nested nested"
                }
                 console.log(anotherObj.name)
            }
        }

        console.log(hello.name)
        hello.myFunction2()
    }
} 

// Functions
const myFunction = function(){
    console.log("This is a functon");
}


//  use of typeOf
myObj.myFunction()