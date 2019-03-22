// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';
import Game from './Game';
import Player from './Player';
import Round from './Round';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import domUpdates from './domUpdates';

const startBtn = $('#start-game-btn')
const submitBtn = $('.submit-btn')

let game;

startBtn.on('click', () => {
  const p1name = $('#player-one-input').val();
  const p2name = $('#player-two-input').val();
  const player1 = new Player(p1name, 1);
  const player2 = new Player(p2name, 2);
  game = new Game(player1, player2);
  game.startGame();
  domUpdates.updateNames(p1name, p2name);
  domUpdates.displayCurrentPlayer(game.currentPlayer);
  domUpdates.disableStartButton();
});

submitBtn.on('click', () => {
  const guess = $('#guess-input').val().toLowerCase();
  game.currentRound.submitGuess(game.currentPlayer, guess, game);
  if (game.currentRound.isFinished) {

    console.log('game over');
    // // TODO starts new round after 5 seconds
    // setTimeout(() => {
    //   game.startNextRound();
    // }, 5000);
  }
});
