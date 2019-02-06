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
// import Data from './data.js';

let game = new Gameboard();

let $startBtn = $('#playBtn');
let $gameboard = $('.game-board');
let $answerClue = $('.answer-btn')

$startBtn.on('click', function(e) {
  e.preventDefault();
  game.startGame();
  console.log(game);
  pullNames();
  domUpdates.removeStartScreen();
})

$gameboard.on('click', function(e) {
  if (e.target.className === 'clue-box') {
    let selectedClueLocation = e.target.id;
    let selectedClue = game.roundClues[selectedClueLocation]
    //change first round clues array to one array for all rounds and use index+15 for second round
    let clue = new Clue();
    clue.showClue(selectedClue);
    domUpdates.populateClueCard(selectedClue);
    $answerClue.on('click', function(e) {
      e.preventDefault();
      let $playerAnswer = $('#playerAnswer').val();
      clue.checkAnswer(selectedClue, $playerAnswer)
      // domUpdates.removeClueCard();
      // domUpdates.answerFeedback(selectedClue);
    })
  }
})

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
  $('#playerName1').text($playerName1);
  $('#playerName2').text($playerName2);
  $('#playerName3').text($playerName3);
  let player1 = new Player($playerName1, 0, 0, 1, false);
  let player2 = new Player($playerName2, 0, 0, 2, false);
  let player3 = new Player($playerName3, 0, 0, 3, false);
  console.log(player1);
  console.log(player2);
  console.log(player3);
}
