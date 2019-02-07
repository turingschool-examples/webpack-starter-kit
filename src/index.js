import './css/base.css';

import Gameboard from './gameboard.js';
import $ from 'jquery';
import domUpdates from './domUpdates.js';

let game = new Gameboard();

let $startBtn = $('#playBtn');
let $resetButton = $('#reset-button');

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

$resetButton.on('click', function() {
  location.reload();
})

function pullNames() {
  let $playerName1 = $('#playerNameInput1').val();
  let $playerName2 = $('#playerNameInput2').val();
  let $playerName3 = $('#playerNameInput3').val();
  game.createPlayers(game, $playerName1, $playerName2, $playerName3)
}
