// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';
import Game from './Game.js';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';
import './css/landingPage.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

const startGameBtn = $(".start-game-btn");

// startGameBtn.click(function(e) {
//   e.preventDefault();
//   console.log(playerNames);
// })

startGameBtn.click(function(e) {
  e.preventDefault()
  const names = [$('#input-1').val(), $('#input-2').val(), $('#input-3').val()]
  const game = new Game;
  game.createPlayers(names);
  game.startGame(); 
})

