const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//this is generally use to execute current context(current variables)
    }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//here this gives output{} because it have global context

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);// this does not work in functions
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  //explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})//implicit return here we dont need to write return keyword but if we apply curly braces then it will be must to write curly braces


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()