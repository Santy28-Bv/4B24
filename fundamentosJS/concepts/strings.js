let name = "Antony"
let city = 'Huamantla';
let message = "hello, im "  + name + "and im from" + city;
console.log(message)
message = 'Hello, I\'m' + name + 'and I\'m from ' + city;
console.log(message);

// Templaate literals
menssage = `Hello, i\'m ` + name +'and i from' + city
console.log(message.toLowerCase());
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hello'));
console.log(message.endsWith('.'));


// menssage = `Hello, i\'m ` + name +'and i from' + city
// message= Hello, I'm ${ name } and I'm from ${ city };
