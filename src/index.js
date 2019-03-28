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

startGameBtn.click(function(e) {
  $('.game-board').show();
  $('#reset-game-btn').show();
  e.preventDefault();
  const names = [$('#player-one-input').val(), 
    $('#player-two-input').val(), 
    $('#player-three-input').val()]
  game = new Game;
  game.createPlayers(names);
  game.startGame();
  domUpdates.notifyPlayerOneTurn(game);
  startGameBtn.hide();
})

clueBtn.on('click', function(e) {
  e.preventDefault();
  $('.game-board').hide();
  const {id, innerText} = event.target;
  game.round.findClue(game, id, innerText, event)
})

submitBtn.click(function(e) {
  e.preventDefault();
  domUpdates.answerQuestion(game);  
  domUpdates.notifyNextTurn(game);
})

dailyDoubleBtn.click(function(e) {
  e.preventDefault();
  domUpdates.notifyNextTurn(game)
})

resetBtn.click(function(e) {
  e.preventDefault();
  location.reload();
})

$('#submit-wager-btn').click(function(e) {
  e.preventDefault();
  let wagers = [($('#player-one-wager-input').val()),
    $('#player-two-wager-input').val(),
    $('#player-three-wager-input').val()];
  $('.wager-inputs').hide();
  $('#submit-wager-btn').hide();
  $('.final-jeopardy-input-styles').show();
  $('.display-final-clue-question').show();
  $('#submit-final-btn').show();
})

$('#submit-final-btn').click(function(e) {
  e.preventDefault();
  let champion = game.players.sort((a, b) => a.score - b.score).pop();
})

