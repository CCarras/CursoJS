

let a = 5;

if (a >= 10) {
    console.log('A es mayor que 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log(dia);

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
}
// else {
//     if (dia === 1) {
//         console.log('Lunes');
//     } else {
//         console.log('No es domingo ni lunes');
//     }
// }
dia = 31;
const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado'
}

const diasLetras2 = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
];


console.log(diasLetras[dia] || 'Día no válido');
console.log(diasLetras2[dia] || 'Día no válido');