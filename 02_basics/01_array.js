//ARRAY-------->

const arr=[1,2,3,4,5,true,"hello"]//array store any datatype
// console.log(arr);

const arr2=new Array(1,2,3,4)//another way to declare array

/***********ARRAY METHODS *****************/

arr2.push("hello")//it push the element in array at last index
// console.log(arr2);
arr2.pop()//here we don't need to pass argument it pop the last elemnt 
// console.log(arr2);

arr2.unshift("starting")//it push the element at starting of an array so here disadvantage is it shifted all the elemnt of an array to push the elemnt at 0th index
// console.log(arr2);

arr2.shift()//it pop the 0th index element
// console.log(arr2);

// console.log(myArr.includes(9));//it gives output in boolean
// console.log(myArr.indexOf(3));//it gives the index numbere where this element present

const newarr=arr2.join()//this is used to convert array into string 
console.log(arr2);
console.log(newarr);

/*DIFFERENCE BETWEEN SLICE AND SPLICE METHOD*/

const myarr=arr2.slice(1,3)//In slice actual array does not change and in array those elemnt is added which is lie in range here range 1 to 2 because 3 is not included
console.log(arr2);
console.log(myarr);

const myarr2=arr2.splice(1,3)//In splice original array is changed as we see here range elemnts remove in original array and range elemnt added into myarr2
console.log(myarr2);
console.log(arr2);











