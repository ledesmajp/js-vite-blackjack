import _, { defaults } from 'underscore'

/**
 * 
 * @param {Array<String>} tiposColores  ej: ['A', 'K', 'Q', 'J']
 * @param {Array<String>} tiposAltas ej: ['D', 'C', 'H', 'S']
 * @returns {Array<String>} retorna el arreglo del deck
 */
export const crearDeck = (tiposColores, tiposAltas) => {

    if (!tiposColores || tiposColores.length === 0)
    throw new Error('Los colores de la carata son obligatorios');

    if (!tiposAltas || tiposAltas.length === 0)
    throw new Error('Las cartas alta son obligatorios');

    let deck = [];

    for (let decks = 0; decks < 3; decks++){
        for (let i = 2; i <= 10; i++){
            for (let color of tiposColores) {
                deck.push(i + color);
            }
        }
    
        for (let color of tiposColores) {
            for (let alta of tiposAltas) {
                deck.push(alta + color);
            }
        }
    }

    deck = _.shuffle(deck);
    return deck;
}


