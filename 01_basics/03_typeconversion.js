let value="hello"// currently it is string 
// now convert it into number
let valueInNumber=Number(value)
console.log(valueInNumber);
// if we try to convert string into number than output->NaN(Not a number)
let name="abc"
let nameInNumber=Number(name)
console.log(name);//output->abc
//but
console.log(typeof nameInNumber);//output->number
console.log(nameInNumber);//output-> NaN because string cant change into number value
//"33" convert into number ->value->33
//"33abc" convert into number->value=NaN
//boolean convert into number->true=1;false=0 is value;
let a=undefined
let b=Number(a)
console.log(typeof b);//output->number
console.log(b);//output->NaN
// so if undefined chage into number->value->NaN
let c=null
let d=Number(null)
console.log(typeof d);//output->number
console.log(d);//output->0

/* lets try to convert string into the boolean*/

let isLoggedIn="Ansh"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//so string into boolean->value=true
//""(empty) into boolean->value=false
//1->value=true;0->value=false

/*try to convert number into string*/

let somenumber=33;
let stringnumber=String(somenumber)
console.log(typeof stringnumber);
console.log(stringnumber);













