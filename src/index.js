import Game from './Game.js';
import $ from 'jquery';
import domUpdates from './domUpdates.js'
import './css/base.css';



let game =  new Game();

$('.startGame').on('click', function (e) {
    e.preventDefault()
    console.log(game)
    domUpdates.startGame(game)
})