

class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
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

console.log(dezpul.getComidaFavorita)

console.log(dezpul);