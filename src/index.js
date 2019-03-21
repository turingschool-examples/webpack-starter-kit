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
import './images/logo.png'

const startBtn = $('#start-game-btn')

startBtn.on('click', () => {
  const p1name = $('#player-one-input').val();
  const p2name = $('#player-one-input').val();
  const player1 = new Player(p1name);
  const player2 = new Player(p2name);
  const game = new Game(player1, player2);
  game.startGame();
  startBtn.attr("disabled", true);
});