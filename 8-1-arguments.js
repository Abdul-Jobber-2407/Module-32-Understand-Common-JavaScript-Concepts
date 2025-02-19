function sum(a,b,c){
    // console.log(arguments);
    // console.log(arguments[4]);
    // console.log(typeof arguments);
    // arguments.push(98); // this is a array like object but not array .

    // const args = [...arguments];
    // console.log(args);

    const result = a+b+c;
    return result;
}
// console.log(arguments);
const total = sum( 45,87,90,23,46,78);
// console.log(total);
// console.log(typeof sum);
console.log(sum.length);
