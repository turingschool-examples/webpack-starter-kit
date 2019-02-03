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
  console.log(clickedLetter)
  wheelOfFortune.compareClickedButton(clickedLetter, wheel)
  //we're gonna add class 'disabled' after a consonants button is clicked + styling (ex:permanently purple)
  //also write a game method that
})

$('#buy-a-vowel-button').on('click', function () {
  //remove class 'disabled' vowels box
})

$('#spin-button').on('click', function(e) {
  e.preventDefault(e);
  wheel.getWheelValue(e);
})

})






// export default index.js;