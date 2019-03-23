import Game from './Game.js';
import $ from 'jquery';
import domUpdates from './domUpdates.js';
import './css/base.css';
import './images/wheel.png';
import './images/Color_Wheel.png';



let game =  new Game();

$('.startGame').on('click', function (e) {
    e.preventDefault()
    domUpdates.startGame(game)
    domUpdates.changeNames()
    console.log(game)
});

$('.letters').on('click', function(e) {
    e.target.innerText
    console.log(e.target.innerText)
})

// $('.spinButton').on('click', function (e) {
//     e.preventDefault()
//     game.wheel.spinWheel()
// });

