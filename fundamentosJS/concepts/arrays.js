
const myArray = new Array(1,2,3,4,5);
console.log(myArray);
const otherArray = [1,2,3,4,5];
console.log(otherArray);
console.log(myArray[0]);
console.log(myArray[4]);
myArray[2] = 'dos';
myArray[3] = true;
myArray[1] = 2.34;
console.log(myArray);

console.log(otherArray.length);

console.log('-------------------------------------------------------------------------------------')

const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack);
stack.pop();
stack.pop();
stack.pop();
console.log(stack);

console.log('==============================================================================================')


const queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log(queue);
queue.shift();
queue.shift();
queue.shift();
console.log(queue);

console.log('===================================================================================================')

const numbers = [12,4,23,-1,3,99];
console.log(numbers);
console.log(numbers.reverse());//Invierte el orden del array
console.log(numbers.sort());//Ordena los elementos del array

console.log('===================================================================================================')

const myName = 'Alejandro Perez';
const letters = myName.split('');
console.log(letters.reverse().join(''));
console.log(letters.sort());

console.log('===================================================================================================')


const pairce = [2,4,6,8,10,12];

for(let i = 0; i< pairce.length; i++){
    
    console.log(`elemento ${ i }: ${ pairce[i] }`)
};

for(let pair of pairce){
    console.log(pair);
};

pairce.forEach(pair => {
    console.log(`Numero ${ pair}: ${ pair}`)  
});
