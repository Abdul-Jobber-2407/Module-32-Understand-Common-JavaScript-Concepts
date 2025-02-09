/**
 * 8 ways to get undefine
 */
// 1. variable that is not initialized will give undefined
let first ;
// console.log(first);

// function with no return 
function second (a,b){
    const total = a+b;
}
const result = second();
// console.log(result);

// parameter that is not passed will be undefined 
function third (a,b,c,d){
    const total = a+b+c+d;
    // console.log(a, b, c, d);
}
// third(2,5);


// if return has nothing on the right side will return undefined 
function noNegative(a,b){
    if(a<0 || b<0 ){
        return
    }
    return a+b;
}
const total = noNegative(2,-5);
// console.log(total);

//property that does not exists on an object will give you undefined
const fifth = {id:2, name:'ponchom', age:40}
// console.log(fifth.age, fifth.salary);


// accessing array elements outside of the index range 
const sixth = [4,34,5,6];
// console.log(sixth[1], sixth[5], sixth[200]);


//  deleating an elements inside an array 
const seven = [23,45,6,7];
// you should not do it. Instead use splice
delete sixth[1];
// console.log(sixth[1]);
// console.log(sixth);

// set a value directly to undefined
const eight = undefined;
const ninth = null ;
const data = {result: [], updated:null}

console.log(typeof undefined);
console.log(typeof null );

