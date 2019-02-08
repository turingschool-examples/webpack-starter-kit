import './css/base.css'; 
import Game from'./Game.js';
import Wheel from './Wheel.js';
import data from './Data.js';
import domUpdates from './domUpdates.js';

import './images/turing-logo.png';

let wheel;

$('#submit-btn').on('click', function(e) {
  e.preventDefault();
  
  let playersArray = [];

  let playerOne = $('#player-one').val();
  let playerTwo = $('#player-two').val();
  let playerThree = $('#player-three').val();

  playersArray.push(playerOne, playerTwo, playerThree);
  const wheelOfFortune = new Game();

  wheel = new Wheel(data.wheel);

  wheelOfFortune.startGame(playersArray);

  $('.letter-button').on('click', function(e) {
    let clickedLetter = e.target.innerHTML;
    let clickedButton = e.target
    wheelOfFortune.compareClickedButton(clickedLetter, wheel, clickedButton, playersArray)
  })

  $('#buy-vowel-button').on('click', function () {
    wheelOfFortune.gamePuzzles[0].buyAVowel(wheelOfFortune.activePlayer, window)
  })

  $('#spin-button').on('click', function(e) {
    e.preventDefault(e);
    wheel.getWheelValue(e, wheelOfFortune);
    $('.letter-button').removeClass('unavailable-bank-letter');
    domUpdates.disableVowelButtons()
  })

  $('#solve-puzzle-button').on('click', function() {
    domUpdates.solvePuzzlePrompt();
  })

  $('#submit-answer').on('click', function() {
    let answerGuess = $('#solve-puzzle-input').val()
    wheelOfFortune.compareFinalAnswer(answerGuess, playersArray)
  })

})
