// C -> tréboles
// D -> diamantes
// H -> corazones
// S -> espadas

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let ptsJugador = 0,
    ptsCPU = 0;


// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnPlantar = document.querySelector('#btnPlantar');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasCPU = document.querySelector('#cpu-cartas');

const puntosHTML = document.querySelectorAll('small');



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
    // Lo mezclamos
    deck = _.shuffle(deck);
    return deck;
}

crearDeck();
console.log(deck);

// Cogemos una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    return carta;
}

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (!isNaN(valor)) ? valor * 1 : ((valor === 'A') ? 11 : 10);
}

// Turno CPU
const turnoCPU = (puntosMin) => {

    do {
        const carta = pedirCarta();
        ptsCPU += valorCarta(carta);
        puntosHTML[1].innerText = ptsCPU;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasCPU.append(imgCarta);

        if (puntosMin > 21) {
            
            break;
        }

    } while ((ptsCPU < puntosMin) && (puntosMin <= 21));

    setTimeout(() => {
        if ((puntosMin > 21) || ((ptsCPU > puntosMin) && ptsCPU <= 21)) {
            alert('La CPU te ha ganado... otra vez');
        } else if (ptsCPU === puntosMin) {
            alert('EMPATE! Ni superar a una máquina puedes...')
        } else {
            alert('Eres el campeón! Qué lástima que nada más se te de bien...');
        }
}, 100 );
}

// EVENTOS
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    ptsJugador += valorCarta(carta);
    puntosHTML[0].innerText = ptsJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if ( ptsJugador > 21 ) {
        console.warn('Has perdido bro');
        btnPedir.disabled = true;
        btnPlantar.disabled = true;
        turnoCPU(ptsJugador);
    } else if (ptsJugador === 21) {
        console.warn('El puto amo');
        btnPedir.disabled = true;
        btnPlantar.disabled = true;
        turnoCPU(ptsJugador);
    }
});

btnPlantar.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnPlantar.disabled = true;
    turnoCPU(ptsJugador);
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();
    console.log(deck);

    btnPedir.disabled = false;
    btnPlantar.disabled = false;

    ptsJugador = 0;
    ptsCPU = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = '';
    divCartasCPU.innerHTML = '';    

    
});
