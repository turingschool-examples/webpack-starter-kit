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
import $ from 'jquery';
// import Data from './data.js';


let $startBtn = $('#playBtn');
$startBtn.on('click', function(e) {
  e.preventDefault();
  let game = new Game();
  game.startGame();
  console.log(game);
  pullNames();
})

let $gameboard = $('.game-board');

$gameboard.on('click', function(e) {
  if (e.target.className === 'clue-box') {
    console.log(e.target);
  }
})

let $clueBoxes = $('.clue-box');

// $clueBoxes.forEach(clueBox => {
//   clueBox.on('click', assignClue)
// })

function pullNames() {
  let $playerName1 = $('#playerNameInput1').val();
  let $playerName2 = $('#playerNameInput2').val();
  let $playerName3 = $('#playerNameInput3').val();
  $('#playerName1').text($playerName1);
  $('#playerName2').text($playerName2);
  $('#playerName3').text($playerName3);
  let player1 = new Player($playerName1, 0, 0, 1);
  let player2 = new Player($playerName2, 0, 0, 2);
  let player3 = new Player($playerName3, 0, 0, 3);
  console.log(player1);
  console.log(player2);
  console.log(player3);
}



console.log('This is the JavaScript entry file - your code begins here.');
