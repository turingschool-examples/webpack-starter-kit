// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';
import data from './data-set.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Game from './Game';
import Round from './Round';
import domUpdates from './domUpdates';
// import Clue from './Clue';

const startGameBtn = $('#start-game-btn');
const gameBoard = $('.game-board');
const submitBtn = $('.submit-btn');
const resetBtn = $('#reset-game-btn');

const game = new Game;



startGameBtn.click(function (e) {
  e.preventDefault();
  const names = [$('#player-one-input').val(), $('#player-two-input').val(), $('#player-three-input').val()]
  game.createPlayers(names);
  game.startRound();
})

gameBoard.click(function (e) {
  e.preventDefault();
  let btnId = event.target.id;
  let btnText = event.target.innerText;
  domUpdates.showQuestion(game, btnId, btnText);
})

submitBtn.click(function (e) {
  e.preventDefault();
  domUpdates.answerQuestion(game);
  console.log(game)
  
})

resetBtn.click(function (e) {
  e.preventDefault();
  location.reload();
})