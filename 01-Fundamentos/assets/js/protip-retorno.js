
// function crearPersona(nombre, apellido) {
//     return {nombre, apellido,
//     }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });
const crearPersona2 = (nombre, apellido) => { nombre, apellido };

const persona = crearPersona('Carlitos', 'Carrasco');
const persona2 = crearPersona2('Pepe', 'Perez');
console.log(persona);
console.log(persona2);


function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
    console.log(args);
}
const imprimeArgumentos3 = (edad, ...args) => {
    // console.log({ edad, args });
    return args;
}

// imprimeArgumentos2(19, 'Pepe', true, 333);
const [edad, nombre, salario, vivo] = imprimeArgumentos3(225, 'Ojito', 844, false);
console.log({ edad, nombre, salario, vivo });

const { apellido: nuevoApellido } = crearPersona('Carlitos', 'Carrasco');
console.log({ nuevoApellido });


const toni = {
    nombre: 'Antoño Estar',
    codeName: 'Hierrombre',
    vivo: false,
    edad: 230,
    trajes: ['Marcos I', 'Julcbuster', 'Marcos V'],
};

// const imprimePropiedades = (personaje) => {

//     console.log('nombre', personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);
// };

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
};

imprimePropiedades(toni);