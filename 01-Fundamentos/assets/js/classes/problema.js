

const fher = {
    nombre: 'Fernando',
    edad: 34,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const piter = {
    nombre: 'Pedrito',
    edad: 21,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// fher.imprimir();

function Persona (nombre, edad) {
    console.log('Ejecutándose');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona('María', 28);

console.log(maria);

maria.imprimir();


