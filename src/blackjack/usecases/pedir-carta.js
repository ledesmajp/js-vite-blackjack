/**
 * 
 * @param {Array<String>} deck es un arreglo de string 
 * @returns {String} retorna la primera carta del deck
 */

export const pedirCarta = (deck)  => {

    if (deck.length === 0){
        crearDeck();
    }

    return deck.shift();
}