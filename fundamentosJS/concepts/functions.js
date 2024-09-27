// function nameFunction(params){
//     body
//     return
    

// } 

// Arrow Function
// const nameFunction = (parms) => {
//     body
//     return
// }

// function nameFunction(params){
//     body
// }

//Arrow function
// const nameFunction2 = (params) =>{
//     body 
//     return
// }

function sayHello(){
    console.log('Hello');
};

sayHello();

console.log('========================================================================================');

const sayHelloInSpanish = () => console.log('Hola');
sayHelloInSpanish();

console.log('========================================================================================');

function sayHelloto(name){
    console.log(`Hello ${ name}`);
}

sayHelloto('Gera');

const sayHelloTo1 = (name) => console.log(`Hello ${ name}`);
sayHelloTo1('Gabo');

console.log('==========================================================================================');

function fullName(name, lastName){
    return console.log(`${name } ${lastName}`);

};

fullName("Alejandro", "Perez")

console.log('==========================================================================================');

const fullName2 = (name, lastName) => console.log(`${name } ${ lastName}`);
fullName2('Damián', 'Marco')

console.log('==========================================================================================');

function duplicateNumber(number){
    return number + 2;
};

console.log('==========================================================================================');

let duplicate = duplicateNumber(5);
console.log(duplicate);

console.log('==========================================================================================');

const halfNumber = number => number/2;
let half = halfNumber(10);
console.log(half);

console.log('==========================================================================================');

function greetings(name = 'Invitado'){
    console.log(`Hola ${ name}`);
};

greetings('Gerardo');
greetings();

console.log('==========================================================================================');

const greetings2 = (name = 'Invitado') => console.log(`Hi ${ name}`);
greetings('Ola');
greetings();