// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';
import Game from './Game.js';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';
import './css/landingPage.css';

// let game;
const startGameBtn = $(".start-game-btn");

startGameBtn.click(function(e) {
  e.preventDefault()
  const names = [$('#input-0').val(), $('#input-1').val(), $('#input-2').val()]
  const game = new Game;
  game.createPlayers(names); // deal with this duplication
  game.startGame();
});




