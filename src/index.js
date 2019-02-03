// This is the JavaScript entry file - your code begins here
import Game from './scripts/game.js';
import domUpdates from './scripts/domUpdates.js';
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;


// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

//  Tell webpack to use an image (link to it in index.html)
import './images/shroom-guy-bubble.png'

// Whatever filepath you use here, copy that into the HTML


//This is the JavaScript entry file - your code begins here.');
 
$('.js-start-button').on('click', (e) => {
  e.preventDefault();
  let newPlayers = domUpdates.displayPlayerNames();
  let game = new Game();
  game.startGame();
  game.createPlayers(newPlayers);
  
});
