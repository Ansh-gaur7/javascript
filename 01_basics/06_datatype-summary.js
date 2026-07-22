//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/**************STACKS AND HEAPS *****************/
//NOTE->stack work on primitive and it is based on call by value it means valur does not change
let myvalue=90
let myvalue2=myvalue
myvalue2=100
console.log(myvalue)
console.log(myvalue2)
//here we change the myvalue2 but myvalue does not because copy was sended

//NOTE=>But in case of heap memeory it is based on reference and it works on non primitive data type

let myvalue3={
    name:"Ansh"
}
let myvalue4=myvalue3
myvalue4.name="Gaur"
console.log(myvalue3.name);
console.log(myvalue4.name)//so as we see here change can visible in both value my value3 and myvalue4

