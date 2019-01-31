// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';
//  Tell webpack to use an image (link to it in index.html)
// import './images/turing-logo.png'

import Game from './game.js';
import Player from './player.js';
import Clue from './clue.js';
import Gameboard from './gameboard.js';
import Finalround from './finalRound.js';
import Dailydouble from './dailyDouble.js';
// import Data from './data.js';



let $startBtn = $('#playBtn');
$startBtn.on('click', function(e) {
  e.preventDefault();
  console.log('You started!!!');
  let game = new Game();
  game.startGame();
})



console.log('This is the JavaScript entry file - your code begins here.');
