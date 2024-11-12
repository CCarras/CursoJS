
function saludar(nombre) {
    console.log('Hola ' + nombre);
    return 3;
}

const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


// let numerito = saludar('Paquito');
// saludar2('Xoxi');
// saludarFlecha();
// saludarFlecha2('Jaimito');


function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// };

const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();


console.log(getAleatorio2());


