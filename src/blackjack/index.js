import {crearDeck, pedirCarta, valorCarta, turnoCasino, crearCartaHTML} from './usecases';

let deck = [];
const altas = ['A', 'K', 'Q', 'J'];
const colores = ['D', 'C', 'H', 'S'];

const btnDeal = document.querySelector('#btnDeal'),
      btnNew = document.querySelector('#btnNew'),
      btnStay = document.querySelector('#btnStay'),
      divCartasJugador = document.querySelector('#jugador-cartas'),
      divCartasCasino = document.querySelector('#casino-cartas'),
      divPuntaje = document.querySelectorAll('small');

let puntosJugador = 0,
    puntosCasino = 0;

deck = crearDeck(colores, altas);

// eventos
btnDeal.addEventListener('click', () => {
    
const carta = pedirCarta(deck);
    
puntosJugador = puntosJugador + valorCarta(carta, puntosJugador);
divPuntaje[0].innerText = puntosJugador;

const imgCarta = crearCartaHTML(carta);
divCartasJugador.append(imgCarta);

if ( puntosJugador > 21){
    btnDeal.disabled = true;
    btnStay.disabled = true;
    turnoCasino(puntosJugador, divPuntaje[1], divCartasCasino, deck);
} else if ( puntosJugador === 21) {
    btnDeal.disabled = true;
    btnStay.disabled = true;
    turnoCasino(puntosJugador, divPuntaje[1], divCartasCasino, deck);
}


});

btnStay.addEventListener('click', () => {
    btnDeal.disabled = true;
    btnStay.disabled = true;
    turnoCasino(puntosJugador, divPuntaje[1], divCartasCasino, deck);
});


btnNew.addEventListener('click', () => {

puntosJugador = 0;
puntosCasino = 0;

divPuntaje[0].innerText = 0;
divPuntaje[1].innerText = 0;

divCartasCasino.innerHTML = '';
divCartasJugador.innerHTML = '';

btnDeal.disabled = false;
btnStay.disabled = false; 
});