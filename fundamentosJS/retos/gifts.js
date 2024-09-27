function wrapping(gifts) {
  const envueltos = [];

     //return envueltos;
    return gifts.map(gift =>{
      let tapa= '*'.repeat(gift.length + 2);
      let g =  `${tapa}\n*${gift}*\n${tapa}`; 
      return g;
    })
  };

const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);