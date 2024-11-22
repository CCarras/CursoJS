

class Singleton {

    static instancia; // undefined, #instancia si fuera privada
    nombre = '';

    constructor(nombre = '') {

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }        
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}


const instancia01 = new Singleton('Aironman');
const instancia02 = new Singleton('Espaiderman');
const instancia03 = new Singleton('Pocoyó');

console.log(`El nombre de la instancia01 es ${instancia01.nombre}`);
console.log(`El nombre de la instancia02 es ${instancia02.nombre}`);
console.log(`El nombre de la instancia03 es ${instancia03.nombre}`);