// C -> tréboles
// D -> diamantes
// H -> corazones
// S -> espadas

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Creamos el deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }

    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    // console.log(deck);
    // Lo mezclamos
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// Cogemos una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    console.log(deck);
    console.log(carta);
    return carta;
}

//pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (!isNaN(valor)) ? valor * 1 : ((valor === 'A') ? 11 : 10);
}

const valor = valorCarta(pedirCarta());

console.log(valor);