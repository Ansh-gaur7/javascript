const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);//to string is used to convert number into string
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//output=>123.9 because we give 4 as argument if we give 3 then output=>124 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//this is used to convert the big number number representation in coma style but by default it is in us type so if we want to change into indian style so write 'en-In'

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//ansolut value always positive so in this case output->4
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));//output=>3
// console.log(Math.max(4, 3, 6, 8));//output=>8

console.log(Math.random());// it gives value always in 0 to 1 range
console.log((Math.random()*10) + 1);//so here we multiply with 10 b/c we want to shift one decimal point and +1 because it always gives value greater than 1 
console.log(Math.floor(Math.random()*10) + 1);//math.floor is used for convert long decimal number into low integer 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//very important