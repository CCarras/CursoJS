

let juegos = ['Zelda', 'Pokemon', 'Mario'];

console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log(primero);
console.log(ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});

juegos.push('Fzero');