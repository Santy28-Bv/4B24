function wrapping(gifts) {
    const envueltos = [];
  
    for (let gift of gifts){
      let tapa= '*'.repeat(gift.length + 2);
      let g =  `${tapa}\n*${gift}*\n${tapa}`; 
      envueltos.push(g);
    };
  
      return envueltos;
    };
  
  const gifts = ['cat', 'game', 'socks'];
  const wrapped = wrapping(gifts);
  
  console.log(wrapped);