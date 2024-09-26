// High Order Functions
//Funciones de Orden Superior
//Son Son funciones que reciben funciones como
//parametros

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const operation = (a, b, callback) => {
const result = callback(a,b)
console.log('EL resultado es:' + result)
}
operation(12, 5, suma);
operation(12, 5, resta);
operation(12, 5, (a,b) => a*b);

const cars = ['vocho', 'athos','painter','tsuru','bmw']

cars.forEach(car => {console.log(car) });
let filtrados = cars.filter(car => car === 'tsuru');
console.log(filtrados);

filtrados = cars.filter(car => car.includes('o'));
console.log(filtrados);
// includes en cualquier posicion (O)

filtrados = cars.filter(car => car.startsWith('a'));
console.log(filtrados);
//startsWith Empieza con (A)

filtrados = cars.filter(car => car.endsWith('u'));
console.log(filtrados);
//endsWith Termina con (U)

filtrados = cars.filter(car => car.length < 5);
console.log('los coches con menos de 5 letras son:' + '['+filtrados+']');



console.log('----------------------------');





//Método Map (MAYUSCULAS; minusculas, invertir texto)
const CARS = cars.map(car => car.toLocaleUpperCase());
const reves = cars.map(car => {
    return car.split('').reverse().join('');
});

console.log(cars);
console.log(CARS);
console.log(reves);  // Array con las palabras invertidas



//ForEach, map, filter
//reduce

const numbers=[1,2,3,4,5,6,7,8,9,10];
const sumatoria = numbers.reduce((a,b) => a + b);
console.log(numbers);
console.log(sumatoria);
const factorial = numbers.reduce((a,b) => a*b);
console.log(factorial);

//every regresa verdadero si todos cumplen la condición
const ages = [23, 14,37, 19, 18,22, 27];
const olders = ages.every(age=> age >=18);
const youngers = ages.every(age => age < 18);

console.log(olders);
console.log(youngers);

//some con 1 que cumpla la condición
const olders2 = ages.some(age=> age >=18);
const youngers2 = ages.some(age => age < 18);

console.log(olders2);
console.log(youngers2);


//Ejrcicios
/**
 * //mismo numeros de elementos map, diferente numero de elementos filtrer
 * 1.-crear un array con elementos del 1 al 10
 * 2.-crear uno nuevo con los cuadrados
 * 3.-crear uno nuevo con los cubos
 * 4.-crear uno nuevo con las mitades
 * 
 * 5.-crear uno nuevo con los pares
 * 6.-crear uno nuevo con los impares
 * 7.-crear uno nuevo con los valores entre 3 y 8
 */


//1.-
const unoalDiez = [1,2,3,4,5,6,7,8,9,10];

//2.-
const cuadrados = unoalDiez.map(num => num ** 2); 
console.log("Cuadrados:", cuadrados);


//3.-
const cubos = unoalDiez.map(num => num ** 3); 
console.log("Cubos:", cubos);

// 4. Crear uno nuevo con las mitades
const mitades = unoalDiez.map(num => num / 2);
console.log("Mitades:", mitades);

// 5. Crear uno nuevo con los pares
const pares = unoalDiez.filter(num => num % 2 === 0);
console.log("Pares:", pares);

// 6. Crear uno nuevo con los impares
const impares = unoalDiez.filter(num => num % 2 !== 0);
console.log("Impares:", impares);

//7.-crear uno nuevo con los valores entre 3 y 8
let rango = elements.filter(va => va >= 3 && va <= 8);
console.log(rango);