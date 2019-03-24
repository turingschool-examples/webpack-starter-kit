// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/sheild-and-sword.png';
import './images/family-feud-logo.png';
import './images/banner1.png';
import './images/banner2.png';
import './images/text-banner.png';

import domUpdates from './domUpdates.js';
import data from './gamedata.js';
import Game from './Game.js';
import Player from './Player.js';


$(".submit-btn").on("click", startGame);

function startGame() {
  const p1Name = $("#p1-name-input").val();
  const p2Name = $("#p2-name-input").val();
  const player1 = new Player(p1Name, 1);
  const player2 = new Player(p2Name, 2);
  const game = new Game(player1, player2);
  domUpdates.updateNames(p1Name, p2Name);
  domUpdates.revealGame();
  let round = game.startNewRound();
  console.log(round);
}