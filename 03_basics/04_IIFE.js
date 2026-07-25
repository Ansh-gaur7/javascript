// Immediately Invoked Function Expressions (IIFE)
//iife isliye use hota hai because bahut baar global variables ke karan variable polluted hote hai or one more reason is to immediately execute the function

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//here semicolon is must if we dont give semicolon here so iife dont know how much it execute so error 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
