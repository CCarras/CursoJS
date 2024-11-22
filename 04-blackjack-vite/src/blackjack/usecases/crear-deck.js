import _ from 'underscore';

export const crearDeck = (tipoDeCarta,tiposEspeciales) => {

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}


// export default crearDeck;