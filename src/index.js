import domUpdates from './domUpdates.js';
import $ from 'jquery';
import data from './data.js';
import './css/base.css';
import Game from './Game.js';
import Wheel from './Wheel.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';


console.log('This is the JavaScript entry file - your code begins here.');

let game = new Game();
let wheel = new Wheel();
console.log(game);


$('.start-button').on('click', function() {
  domUpdates.startGame(game, wheel);
  domUpdates.displayCategoryName(game); 
  domUpdates.hideAnswer(game);
  domUpdates.diplayStartMsg();
  $('.start-button').hide('');
  $('.button').prop('disabled', false).css('color', 'white');
  $('.player-name-input').hide();
});

$('.quit-button').on('click', function() {
  domUpdates.disableQuit();
});

$('.quit-button').on('click', function() {
  location.reload(true);
  });

$('#js-spin-button').on('click', function() {
  wheel.getRandomWheel();
  // domUpdates.displayWheelValue()
});

$('#js-solve-button').on('click', function() {
  domUpdates.displayQuestionSolvePopup(game);
  // round.checkPlayerGuess();
});

$('#js-submit-button').on('click', function(e) {
  e.preventDefault();
  domUpdates.checkUserGuess(game);
});
