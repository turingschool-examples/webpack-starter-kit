// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

import Player from './player.js';
import Gameboard from './gameboard.js';
import $ from 'jquery';
import domUpdates from './domUpdates.js';

let game = new Gameboard();

let $startBtn = $('#playBtn');

$startBtn.on('click', function(e) {
  e.preventDefault();
  game.startGame();
  pullNames();
  domUpdates.removeStartScreen();
});

$('body').on('click', function(e) {
  e.preventDefault;
  if (game.round === 3) {
    game.selectFinalJeopardy(e);
  } else {
    game.selectCorrectClue(e);
  }
});

function pullNames() {
  let $playerName1 = $('#playerNameInput1').val();
  let $playerName2 = $('#playerNameInput2').val();
  let $playerName3 = $('#playerNameInput3').val();
  game.createPlayers(game, $playerName1, $playerName2, $playerName3)
}
