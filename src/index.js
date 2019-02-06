// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css'; 
import Game from'./Game.js';
import Wheel from './Wheel.js';
import data from './Data.js';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';

let wheel;

$('#submit-btn').on('click', function(e) {
  e.preventDefault();
  
  let playersArray = [];

  let playerOne = $('#player-one').val();
  let playerTwo = $('#player-two').val();
  let playerThree = $('#player-three').val();

  playersArray.push(playerOne, playerTwo, playerThree);
  const wheelOfFortune = new Game(playersArray);

  wheel = new Wheel(data.wheel);
  console.log(wheel)

  wheelOfFortune.startGame();

$('.letter-button').on('click', function(e) {
  let clickedLetter = e.target.innerHTML;
  let clickedButton = e.target
  console.log(clickedButton)
  console.log(clickedLetter)
  wheelOfFortune.compareClickedButton(clickedLetter, wheel, clickedButton)
})

$('#buy-vowel-button').on('click', function () {
  console.log('moooo')
  wheelOfFortune.gamePuzzles[0].buyAVowel(wheelOfFortune.activePlayer)
})

$('#spin-button').on('click', function(e) {
  e.preventDefault(e);
  wheel.getWheelValue(e, wheelOfFortune);
  $('.letter-button').removeClass('unavailable-bank-letter');
})

$('#solve-puzzle-button').on('click', function() {

})

$('#submit-answer').on('click', function() {
  let answerGuess = $('#solve-puzzle-input').val()
  wheelOfFortune.compareFinalAnswer(answerGuess)
})

})






// export default index.js;