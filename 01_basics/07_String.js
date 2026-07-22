const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//this is better way to write code

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)//here negative indexing does not consider
console.log(newString);

const anotherString = gameName.slice(-8, 4)//here negative indexing allowed
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//trim is use for remove spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//it can replace %20 into -

console.log(url.includes('sundar'))//it gives boolean value for example-sundar is present in url or not

console.log(gameName.split('-'));//it is use to make array and string is spilted on the basis of'-'