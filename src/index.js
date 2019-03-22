import domUpdates from './domUpdates.js';
import $ from 'jquery';
import data from './data.js';
import './css/base.css';
import Game from './Game.js';


console.log('This is the JavaScript entry file - your code begins here.');

let game = new Game();
console.log(game);
console.log(data);


$('.start-button').on('click', function() {
  domUpdates.startGame(game);
  $('.start-button').hide('slow');
  $('.button').prop('disabled', false).css('color', 'white');
  $('.player-name-input').hide();
});

$('.quit-button').on('click', function() {
 domUpdates.resetGame(game);
 $('.button').prop('disabled', true).css('color', 'grey');
 $('.player-name-input').show();
});