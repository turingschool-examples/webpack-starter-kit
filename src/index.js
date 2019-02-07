// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';
//  Tell webpack to use an image (link to it in index.html)
// import './images/turing-logo.png'

import Player from './player.js';
import Clue from './clue.js';
import Gameboard from './gameboard.js';
import Finalround from './finalRound.js';
import Dailydouble from './dailyDouble.js';
import $ from 'jquery';
import domUpdates from './domUpdates.js';

let game = new Gameboard();
console.log("start game", game);

let $startBtn = $('#playBtn');
let $gameboard = $('.game-board');
let $answerClue = $('.answer-btn')

$startBtn.on('click', function(e) {
  e.preventDefault();
  game.startGame();
  pullNames();
  domUpdates.removeStartScreen();
});

let currentClue = {};
let currentLocation = 0;

$('body').on('click', function(e) {
  e.preventDefault;
  let clue = new Clue();
  let selectedClueLocation = e.target.id;
  let selectedClue = game.roundClues[selectedClueLocation];
  if (e.target.className.includes('available-box')) {
    clue.showClue(selectedClue);
    currentClue = selectedClue;
    currentLocation = selectedClueLocation;
  };
  if (e.target.className.includes('answer-btn')) {
      let $playerAnswer = $('#playerAnswer').val();
      clue.checkAnswer(game, currentClue, $playerAnswer);
      domUpdates.disableClue(currentLocation);
    }
  });

// $answerClue.on('click', function(e) {
//   e.preventDefault();
//   domUpdates.removeClueCard();
//   domUpdates.answerFeedback(selectedClue);
// })
  //clue.checkAnswer() ??


function pullNames() {
  let $playerName1 = $('#playerNameInput1').val();
  let $playerName2 = $('#playerNameInput2').val();
  let $playerName3 = $('#playerNameInput3').val();
  game.createPlayers(game, $playerName1, $playerName2, $playerName3)
}
