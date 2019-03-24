import $ from 'jquery';
import Game from './Game';
import Player from './Player';
import Round from './Round';
import domUpdates from './domUpdates';

import './css/normalize.css';
import './css/base.css';

import './images/turing-logo.png'

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
  domUpdates.startGame(game);
});

submitBtn.on('click', () => {
  const guess = $('#guess-input').val().toLowerCase();
  game.currentRound.submitGuess(game.currentPlayer, guess, game);
  domUpdates.clearguess();
  if (game.currentRound.isFinished) {

    console.log('game over');
    // // TODO starts new round after 5 seconds
    // setTimeout(() => {
    //   game.startNextRound();
    // }, 5000);
  }
});
