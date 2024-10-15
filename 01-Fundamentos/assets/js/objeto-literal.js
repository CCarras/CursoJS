let personaje = {
    nombre: 'Antoño Estar',
    codeName: 'Hierrombre',
    vivo: false,
    edad: 230,
    coords: {
        lat: 34.231,
        lng: -110.43
    },
    trajes: ['Marcos I', 'Julcbuster', 'Marcos V'],
    direccion: {
        zip: '28802',
        ubicacion: 'Simancas, Madriz',
    },
    'ultima pelicula': 'Guerra Infinita',
};

console.log(personaje);
console.log('Nombre', personaje.nombre);

console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coords:', personaje.coords);
console.log('Lat:', personaje.coords.lat);


console.log('Nº trajes:', personaje.trajes.length);
console.log('Último traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo?', personaje[x]);
console.log('La ultima:', personaje['ultima pelicula']);

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 123;
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
console.log({ propiedades });

const valores = Object.values(personaje);
console.log({ valores });