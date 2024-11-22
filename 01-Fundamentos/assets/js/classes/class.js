

class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje () {
        console.log('Hola holita, soy estático, sin sangre');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y me gustan las croquetas, porque soy ${this.codigo}`)
    }

    miFrase() {
        this.quienSoy();
        console.log(`Como soy ${this.codigo} suelo decir ${this.frase}`);
    }

}


const espaiderman = new Persona('Pedro Parquero', 'Espaider', 'Mi sentido arácnido... la leche');
const dezpul = new Persona('Jeremías Santos', 'Dezpul', 'Jejejej');

// console.log(dezpul);
dezpul.quienSoy();
dezpul.miFrase();

dezpul.setComidaFavorita = 'Hamburguesa smash';
// dezpul.nemesis = 'Agapito do Sousa';

// console.log(dezpul.getComidaFavorita)

// console.log(dezpul);
// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

