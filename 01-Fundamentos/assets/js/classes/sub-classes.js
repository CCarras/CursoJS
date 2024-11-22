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

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor (nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'Los avenllers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} del clan de ${this.clan}`);
        super.quienSoy();
    }
}

const espaiderman = new Heroe('Decrepito Fernandez', 'Espaidermen', 'Mi sentido arácnido negro femenino me avisa');
espaiderman.quienSoy();
console.log(espaiderman);