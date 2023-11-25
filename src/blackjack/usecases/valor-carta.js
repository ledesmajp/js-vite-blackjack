/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @param {Number} puntosA pasa los puntos del jugador 
 * @returns {Number} el valor de la carta
 */

export const valorCarta = (carta, puntosA) => {

const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
                (valor === 'A') ?
                    (puntosA + 11 > 21) ? 1 : 11
                :10
            : valor * 1
}