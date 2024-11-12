
const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 euros' : '10 eurazos';

console.log(elMayor(20, 15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArrr = [
    'Pedro',
    'Antonio',
    'Doctor Raro',
    amigo ? 'Thorero' : 'Locuelo',
    // (() => 'Nicolás Furia')()
];

console.log(amigosArrr);


const nota = 101; // A+ A B+ B C...
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
        nota >= 95 ? 'B+' :
            nota >= 80 ? 'B' : 'F';

console.log({ nota, grado });