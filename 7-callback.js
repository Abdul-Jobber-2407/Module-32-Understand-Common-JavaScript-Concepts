/**
 * function greeting(person){
    console.log(person);
}
// greeting('Halim Mama')
// const name = 'AR Babu Vai';
// const numbers = [24,56,78,90];
// const laptop = { price :2900, brand: 'hp' , memory :'16gb'};
function greetingHandler(name){
    console.log('Good Morning ', name)
}
greeting(greetingHandler);

 */

function greeting(greetingHandler, name){
    greetingHandler(name);
}
function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}
greeting(greetingHandler, 'Tom Hanks');
greeting(greetEvening, 'Tom Hanks');
