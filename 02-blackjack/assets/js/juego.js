

const miModulo = (() => {
    'use strict' // echar un ojo lo que hace

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let ptsJugadores = [];


    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnPlantar = document.querySelector('#btnPlantar'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    const iniciarJuego = (numJugadores = 2) => {
        deck = crearDeck();

        ptsJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            ptsJugadores.push(0);
        }
        console.clear();

        btnPedir.disabled = false;
        btnPlantar.disabled = false;

        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );


    }

    // Creamos el deck
    const crearDeck = () => {

        deck = [];
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

        return _.shuffle(deck);
    }

    // Cogemos una carta
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    }

    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        return (!isNaN(valor)) ? valor * 1 : ((valor === 'A') ? 11 : 10);
    }

    // turno: 0 = primer jugador y el ultimo sera siempre la CPU
    const acumularPuntos = (carta, turno) => {
        ptsJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = ptsJugadores[turno];
        return ptsJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const quienGana = () => {

        const [puntosMin, ptsCPU] = ptsJugadores;

        setTimeout(() => {
            if ((puntosMin > 21) || ((ptsCPU > puntosMin) && ptsCPU <= 21)) {
                alert('La CPU te ha ganado... otra vez');
            } else if (ptsCPU === puntosMin) {
                alert('EMPATE! Ni superar a una máquina puedes...')
            } else {
                alert('Eres el campeón! Qué lástima que nada más se te de bien...');
            }
        }, 100);
    }

    // Turno CPU
    const turnoCPU = (puntosMin) => {

        let ptsCPU = 0;
        do {
            const carta = pedirCarta();
            ptsCPU = acumularPuntos(carta, ptsJugadores.length - 1);
            crearCarta(carta, ptsJugadores.length - 1);

        } while ((ptsCPU < puntosMin) && (puntosMin <= 21));  
        
        quienGana();
    }

    // EVENTOS
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const ptsJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);

        if (ptsJugador > 21) {
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
        turnoCPU(ptsJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        iniciarJuego();        
    });

    return {
        nuevoJuego: iniciarJuego
    };

})();




