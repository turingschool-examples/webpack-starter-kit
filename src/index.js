import $ from 'jquery';
import './css/base.css';
import data from './data-set.js';
import './images/turing-logo.png'
import Game from './Game';
import domUpdates from './domUpdates';

const startGameBtn = $('#start-game-btn');
const submitBtn = $('.submit-btn');
const resetBtn = $('#reset-game-btn');
const clueBtn = $('.col');

let game;

startGameBtn.click(function (e) {
  e.preventDefault();
  const names = [$('#player-one-input').val(), 
    $('#player-two-input').val(), 
    $('#player-three-input').val()]
  game = new Game;
  game.createPlayers(names);
  game.startGame();
})

clueBtn.on('click', function(e) {
  e.preventDefault();
  const {id, innerText} = event.target;
  console.log(id, innerText);
  game.round.findClue(id, innerText, event)
})

submitBtn.click(function (e) {
  e.preventDefault();
  domUpdates.answerQuestion(game);  
})

resetBtn.click(function (e) {
  e.preventDefault();
  location.reload();
})