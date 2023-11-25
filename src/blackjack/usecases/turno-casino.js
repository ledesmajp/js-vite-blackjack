import { pedirCarta, valorCarta, crearCartaHTML} from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que el casino necesita para ganar
 * @param {HTMLElement} divPuntaje HTML para mostrar los puntos
 * @param {HTMLElement} divCartasCasino muestra las cartas en el HTML
 * @param {Array<String>} deck 
 */
export const turnoCasino = (puntosMinimos, divPuntaje, divCartasCasino, deck) => {

    if (!puntosMinimos) throw new Error ('Puntos del jugador son necesarios');
    if (!deck) throw new Error ('El deck es necesario');
    if( !divPuntaje) throw new Error ('argumentos puntosHTML son necesarios');

    let puntosCasino = 0;

    do {
        const carta = pedirCarta(deck);

        puntosCasino = puntosCasino + valorCarta(carta);
        divPuntaje.innerText = puntosCasino;

        const imgCarta = crearCartaHTML(carta);
        // const imgCarta = document.createElement('img');
        // imgCarta.classList.add('carta');
        // imgCarta.src = `assets/cartas/${carta}.png`;
        divCartasCasino.append(imgCarta);

        if (puntosCasino > 21) {
            break;
        }

    } while ((puntosCasino < puntosMinimos) && (puntosMinimos <= 21));

setTimeout(() => {
    if (puntosCasino === puntosMinimos){
        alert('Push');
    } else if (puntosMinimos > 21) {
        alert('Casino win');
    } else if (puntosCasino > 21) {
        alert('Player Win');
    } else {
        alert('Casino Win');
    }
},300);
};