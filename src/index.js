import domUpdates from './domUpdates.js';
import $ from 'jquery';
import data from './data.js';
import './css/base.css';
import Game from './Game.js';
import Wheel from './Wheel.js';
import Puzzle from './Puzzle.js';

let game = new Game();

console.log(game);

$('.start-button').on('click', function() {
  domUpdates.startGame(game);
  domUpdates.displayCategoryName(game); 
  domUpdates.hideAnswer(game);
  domUpdates.diplayStartMsg();
  game.setCurrentPlayer();
  domUpdates.enableQuit();
  domUpdates.enableButton();
  $('.start-button').hide('');
  $('.button').prop('disabled', false).css('color', 'white');
  $('.player-name-input').hide();
});

//this is not working properly below
$('.quit-button').on('click', function() {
  domUpdates.disableQuit();
});

$('.quit-button').on('click', function() {
  location.reload(true);
});

$('#js-spin-button').on('click', function() {
  game.wheel.getRandomWheel();
});

$('#js-solve-button').on('click', function(e) {
  e.preventDefault();
  domUpdates.showPopup();
  console.log('currentPlayer:', game.currentPlayer);
});

$('.answer-submit').on('click', function(e) {
  e.preventDefault();
  game.currentPlayer.solvePuzzle(game);
  domUpdates.displayScore(game);
  console.log('winner current player', game.currentPlayer);
});

$('#js-submit-button').on('click', function(e) {
  e.preventDefault();
  let letterInput = domUpdates.grabCurrentLetter();
  game.currentPuzzle.checkForVowel(letterInput, game);
  $('.input').val('');
});

// $('#js-vowel-submit-button').on('click', function () {
//   let letterInput = domUpdates.grabVowel ();
//   game.currentPuzzle.checkUserGuess ();
// });

$('.exit-solve').on('click', function(e) {
  e.preventDefault();
  domUpdates.hidePopup();
})
