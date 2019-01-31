// This is the JavaScript entry file - your code begins here
import BonusWheel from'../scripts/BonusWheel.js';
import Wheel from'../scripts/Wheel.js';
import Player from'../scripts/Player.js';
import Puzzle from'../scripts/Puzzle.js';
import Game from '../scripts/Game.js';
import domUpdates from '../scripts/domUpdates.js';
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

//  Tell webpack to use an image (link to it in index.html)
import '/images/shroom-guy.png'


console.log('This is the JavaScript entry file - your code begins here.');

$('.js-start-button').on('click', (e) => {
  e.preventDefault();
  domUpdates.getPlayerInput();

});
