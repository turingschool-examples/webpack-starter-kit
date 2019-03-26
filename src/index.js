// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';
import Game from './Game.js';
import domUpdates from './domUpdates.js';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';
import './css/landingPage.css';

// let game;
const $startGameBtn = $(".start-game-btn");
const $valBtn = $(".val-btn");
// const $resetBtn = $('.reset-btn');
const $guessBtn = $(".guess-btn");
const $closeBtn = $("#close");
let game;

$startGameBtn.click(function(event) {
  event.preventDefault()
  const names = [$('#input-0').val(), $('#input-1').val(), $('#input-2').val()]
  game = new Game;
  game.createPlayers(names); // deal with this duplication
  game.startGame();
});

$valBtn.on("click", function(event) {
  event.preventDefault();
  // const event.target = { id: ${8, dynamic}, innerText: ${400: dynamic} }
  const {id, innerText} = event.target;
  // const id = event.target.id 
  // const innerText = event.target.innerText
  console.log({id, innerText})
  game.round.findClue(id, innerText, event)
  game.changePlayer();
});

$guessBtn.click(function(event) {
  event.preventDefault();
  const guess = $('#guess-input').val();
  console.log(guess);
  domUpdates.checkAnswer(guess);
  domUpdates.disappearClue();
})

$closeBtn.click(function(event) {
  event.preventDefault();
  $('.clue-card').toggleClass('hidden');
  $('#submit').removeClass('hidden');
  $('#guess-input').val('');
  $('.answer').text('Guess below!');
  $('#close').addClass('hidden');
  console.log('current player score', game.players[game.currentPlayer].score);
})
// $resetBtn.click(function() {

// })




