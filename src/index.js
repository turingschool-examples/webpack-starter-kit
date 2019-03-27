import $ from 'jquery';
import './css/base.css';
import data from './data-set.js';
import './images/turing-logo.png'
import Game from './Game.js';
import domUpdates from './domUpdates.js';
import Round from './Round.js';

const startGameBtn = $('#start-game-btn');
const submitBtn = $('.submit-btn');
const resetBtn = $('#reset-game-btn');
const clueBtn = $('.col');
const dailyDoubleBtn = $('.daily-double-btn')

let game;
$('.game-board').hide();

startGameBtn.click(function (e) {
  $('.game-board').show();
  e.preventDefault();
  const names = [$('#player-one-input').val(), 
    $('#player-two-input').val(), 
    $('#player-three-input').val()]
  game = new Game;
  game.createPlayers(names);
  game.startGame();
  domUpdates.notifyPlayerOneTurn(game);
})

clueBtn.on('click', function(e) {
  e.preventDefault();
  const {id, innerText} = event.target;
  if ($('#round').text() === '1') {
    game.round.findClue(game, id, innerText, event);
  }
  if ($('#round').text() === '2') {
   game.round.findNextRoundClues(game, id, innerText, event);
  }
})

submitBtn.click(function (e) {
  e.preventDefault();
  domUpdates.answerQuestion(game);  
  domUpdates.notifyNextTurn(game);
})

dailyDoubleBtn.click(function (e) {
  e.preventDefault();
  domUpdates.hide
  // domUpdates.
  // domUpdates.notifyNextTurn(game)
})

resetBtn.click(function (e) {
  e.preventDefault();
  location.reload();
})



