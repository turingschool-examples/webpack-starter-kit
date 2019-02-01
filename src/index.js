// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';
import Game from './Game.js';
import domUpdates from './domUpdates.js';

//  Tell webpack to use an image (link to it in index.html)
let game;

$('.start--btn').on('click', () => {
  game = new Game();
  domUpdates.displayPlayers(game);
  domUpdates.toggleSplash();
  domUpdates.enableReset();
  game.getRandomCat();
});


$('.game--exit').on('click', () => {
  game.quitGame();
  domUpdates.disableReset();
});