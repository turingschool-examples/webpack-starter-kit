// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css'; 
import Game from'./Game.js';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';

$('#submit-btn').on('click', function(e) {
  e.preventDefault();
  
  let playersArray = [];

  let playerOne = $('#player-one').val();
  let playerTwo = $('#player-two').val();
  let playerThree = $('#player-three').val();

  playersArray.push(playerOne, playerTwo, playerThree);
  const wheelOfFortune = new Game(playersArray);

  wheelOfFortune.startGame();
})

console.log('This is the JavaScript entry file - your code begins here.');



// export default index.js;