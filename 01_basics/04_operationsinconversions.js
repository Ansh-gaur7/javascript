/********** some basic operations *****************/

console.log(1+1);
console.log(1-1);
console.log(5*5);
console.log(2**3);//it means 2 to the power 3
console.log(5%3);
console.log(10/2);

/** string concatination **/

let str1="hello"
let str2=" world"

let str3=str1+str2
console.log(str3);

/************ tricky part in js *************/
console.log(1+"2");//output->12
console.log("1"+2);//output->12
console.log("1"+2+2);//output->122
console.log(1+2+"2");//output->32

console.log(+true);//output->1
//console.log(true+) output=>error (not allowed)
console.log(+"")//output=>0



