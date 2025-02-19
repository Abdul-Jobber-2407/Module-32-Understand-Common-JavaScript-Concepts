/**
 * Truthy :
 * 1.true
 * 2. any number (+ve, -ve) will be truthy  other than 0 . 
 * 3. Any string other than empty string . 
 * 4. '0'
 * 5. 'false'
 * 6. {}
 * 
 * Falsy:
 * 1.false
 * 2. '' (empty string )
 * 3. undefined
 * 4. null 
 */

// const x = false ;
// const x = 'false'
// const x = 4;
// const x = -4;
// const x = 0;
// const x = 'Mahomuda Anam Tonni ';
// const x = '';
// const x = ' '; 
// const x = '0';

// let x ;
// console.log(x);

// let x = null;
// console.log(x);

let x ={};
console.log(x);


if(x){
    console.log('Value of x is truthy')
}
else{
    console.log('Value of x is falsy')
}


// optional 
// Check falsy
const y = '' ;
if(!y){
    console.log('Value is falsy');
}

// Check true
const z = ' ' ;
if(!!z){
    console.log('Value is truthy');
}