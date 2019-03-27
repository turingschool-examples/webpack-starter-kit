import domUpdates from './domUpdates.js';
import $ from 'jquery';
import data from './data.js';
import './css/base.css';
import Game from './Game.js';
import Wheel from './Wheel.js';
import Puzzle from './Puzzle.js';

console.log('This is the JavaScript entry file - your code begins here.');

let game = new Game();
let wheel = new Wheel();


console.log(game);

$('.start-button').on('click', function() {
  domUpdates.startGame(game, wheel);
  domUpdates.displayCategoryName(game); 
  domUpdates.hideAnswer(game);
  domUpdates.diplayStartMsg();
  game.setCurrentPlayer();
  console.log(game.currentPlayer);
  // console.log('index.js', game.currentPlayer)
  domUpdates.enableQuit();
  domUpdates.enableButton();
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

$('#js-solve-button').on('click', function(e) {
  e.preventDefault();
  domUpdates.showPopup();
  // let solveInput = domUpdates.grabCurrentLetter();
  // console.log("player", game.currentPlayer);
  // game.currentPlayer.solvePuzzle(game);
  console.log(game.currentPlayer);
  // round.checkPlayerGuess();  
});

$('.answer-submit').on('click', function(e) {
  e.preventDefault();
  game.currentPlayer.solvePuzzle(game);
  console.log(game.currentPlayer);
});

$('#js-submit-button').on('click', function(e) {
  e.preventDefault();
  let letterInput = domUpdates.grabCurrentLetter();
  game.currentPuzzle.checkUserGuess(letterInput, game);
  $('.input').val('');
});

$('#js-vowel-submit').on('keyup', function(e) {
  e.preventDefault();
  domUpdates.checkVowel();
});

// $('#js-vowel-submit-button').on('click', function () {
//   let letterInput = domUpdates.grabVowel ();
//   game.currentPuzzle.checkUserGuess ();
// });

$('.exit-solve').on('click', function() {
  domUpdates.hidePopup();
})
